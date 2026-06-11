import type {
  AnalysisInput,
  AnalysisResult,
  ContextInsight,
  EvidenceItem,
  ReadinessInsight,
  SelfAssessmentAnswers,
  Signal,
  SourceContext,
  SourceType,
} from "./types";
import {
  parseTranscript,
  detectBoundaryRespect,
  detectAccountability,
  detectRepairLanguage,
  detectSupportsIndependence,
  detectAsksInsteadOfAssumes,
  detectValueAlignment,
  detectFutureOrientation,
  detectCommunicationStyleGap,
  detectLifestyleDifferences,
  detectFinancialConversation,
  detectLocationOrLogistics,
  detectRapidIntensity,
  detectIndirectConflictStyle,
  detectPersistentPressure,
  detectPrivacyOrControlLanguage,
  detectDismissiveResponses,
} from "./detectors";
import { buildCompatibilitySummary, buildGoalContext } from "./scoring";

const LIMITATIONS = [
  "This analysis is based on a synthetic demonstration conversation only.",
  "CommitIQ uses local AI-style pattern analysis. It reads patterns, not intent. Context, tone, and relationship history matter.",
  "Every signal is a starting point for conversation — not a verdict about a person.",
  "This is not a substitute for couples counseling or professional relationship guidance.",
  "Green signals in this conversation do not guarantee healthy behavior in all situations.",
];

function buildSourceContext(sourceType: SourceType): SourceContext {
  const contexts: Record<SourceType, SourceContext> = {
    chat: {
      label: "Chat transcript",
      detail: "Short written messages were weighted for turn-taking, direct language, and repeated phrasing.",
    },
    dating_app: {
      label: "Dating app chat",
      detail: "Early-stage app context was weighted for pacing, consent language, and assumptions made before trust is established.",
    },
    voice_transcript: {
      label: "Voice transcript",
      detail: "Spoken-transcript context was weighted for repair attempts, clarification, and conversational back-and-forth.",
    },
  };
  return contexts[sourceType];
}

function buildContextInsights(input: AnalysisInput): ContextInsight[] {
  const toggles = input.contextToggles;
  if (!toggles) return [];

  const insights: ContextInsight[] = [];
  if (toggles.banking) {
    insights.push({
      label: "Synthetic banking context",
      detail: "Adds a prompt to discuss gift expectations, loan requests, and money boundaries before deeper commitment.",
      emphasis: "discuss",
    });
  }
  if (toggles.socialTime) {
    insights.push({
      label: "Synthetic social-time context",
      detail: "Adds a prompt to compare digital availability, response-time expectations, and late-night communication patterns.",
      emphasis: "compatibility",
    });
  }
  if (toggles.publicProfile) {
    insights.push({
      label: "Synthetic public-profile context",
      detail: "Adds a prompt to clarify social transparency, relationship visibility, and how public each partner wants to be.",
      emphasis: "discuss",
    });
  }
  if (toggles.searchCategories) {
    insights.push({
      label: "Synthetic search-category context",
      detail: "Adds a safety-oriented prompt for outside advice-seeking, uncertainty, and language around manipulation concerns.",
      emphasis: "concern",
    });
  }
  return insights;
}

function buildContextTopics(insights: ContextInsight[]): string[] {
  return insights.map((insight) => {
    if (insight.label.includes("banking")) return "Money expectations, gifts, and loan boundaries";
    if (insight.label.includes("social-time")) return "Digital availability and response-time expectations";
    if (insight.label.includes("public-profile")) return "Relationship visibility and social transparency";
    return "Outside advice-seeking and safety language";
  });
}

function clipPattern(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length <= 72) return trimmed;
  return `${trimmed.slice(0, 69)}...`;
}

function buildReadinessInsight(answers?: SelfAssessmentAnswers): ReadinessInsight | undefined {
  if (!answers) return undefined;

  const availabilityScore =
    answers.emotionalAvailability === "fully" ? 2 :
    answers.emotionalAvailability === "mostly" ? 1 :
    answers.emotionalAvailability === "somewhat" ? 0 : -2;
  const pastScore =
    answers.overPastRelationships === "yes" ? 1 :
    answers.overPastRelationships === "mostly" ? 0 : -1;
  const timeScore =
    answers.timeInvestment === "a-lot" ? 1 :
    answers.timeInvestment === "moderate" ? 0 : -1;

  const score = availabilityScore + pastScore + timeScore;
  const questions: string[] = [];

  if (answers.emotionalAvailability === "somewhat" || answers.emotionalAvailability === "not-yet") {
    questions.push("What pace helps you stay emotionally honest without overcommitting?");
  }
  if (answers.overPastRelationships === "still-processing") {
    questions.push("What support do you need so past relationship patterns do not drive new decisions?");
  }
  if (answers.timeInvestment === "limited") {
    questions.push("How much time can you reliably give a relationship right now?");
  }
  if (answers.patternsToBreak.trim()) {
    questions.push(`Pattern to watch: ${clipPattern(answers.patternsToBreak)}`);
  }

  if (score >= 3) {
    return {
      status: "ready",
      headline: "Your readiness check supports moving conversations forward.",
      detail: "Your answers show strong emotional availability, enough time, and good readiness to evaluate the connection clearly.",
      questions: questions.length ? questions : ["What would make this relationship feel sustainable three months from now?"],
    };
  }

  if (score >= 0) {
    return {
      status: "mixed",
      headline: "Your readiness check suggests moving with intention.",
      detail: "Your answers show interest and openness, with a few areas to name clearly so the relationship can move at a healthy pace.",
      questions: questions.length ? questions : ["What would help you stay grounded while you learn more about this person?"],
    };
  }

  return {
    status: "needs-space",
    headline: "Your readiness check suggests slowing the pace.",
    detail: "Your answers point to limited availability or unresolved context. The best next step may be setting expectations before evaluating the other person.",
    questions: questions.length ? questions : ["What would need to change before deeper commitment feels healthy?"],
  };
}

function buildReadinessTopics(readiness?: ReadinessInsight): string[] {
  if (!readiness) return [];
  if (readiness.status === "ready") return ["Sustaining healthy pacing and communication habits"];
  if (readiness.status === "mixed") return ["Your emotional availability and pacing needs"];
  return ["Readiness, recovery time, and whether to slow the relationship pace"];
}

function buildAppliedPersonalization(input: AnalysisInput, contextInsights: ContextInsight[], readiness?: ReadinessInsight): string[] {
  const applied = [`Source type: ${buildSourceContext(input.sourceType).label}`];
  if (input.relationshipGoal) applied.push("Relationship goal prioritization");
  if (contextInsights.length > 0) applied.push(`${contextInsights.length} synthetic context signal${contextInsights.length === 1 ? "" : "s"}`);
  if (readiness) applied.push("Dating readiness self-assessment");
  return applied;
}

function buildCommunicationSummary(
  strengthCount: number,
  compatibilityCount: number,
  discussCount: number,
  concernCount: number,
  level: string
): string {
  if (level === "excellent") {
    return `This conversation shows ${strengthCount} clear relationship strength${strengthCount !== 1 ? "s" : ""} and strong mutual alignment. Communication is open, intentional, and future-focused. Both partners demonstrate the habits that sustain healthy long-term relationships.`;
  }
  if (level === "strong") {
    return `This conversation shows a solid foundation — ${strengthCount} relationship strength${strengthCount !== 1 ? "s" : ""}, ${compatibilityCount} compatibility signal${compatibilityCount !== 1 ? "s" : ""}, and ${discussCount > 0 ? discussCount + " area" + (discussCount !== 1 ? "s" : "") + " worth discussing further" : "no significant discussion points"}. The overall picture is positive with good depth to explore.`;
  }
  if (level === "promising") {
    return `This conversation reveals a promising connection with real areas worth exploring. There ${strengthCount === 1 ? "is" : "are"} ${strengthCount} relationship strength${strengthCount !== 1 ? "s" : ""} alongside ${discussCount + concernCount} topic${discussCount + concernCount !== 1 ? "s" : ""} worth discussing openly. These conversations are healthy to have early.`;
  }
  return `This conversation surfaces ${concernCount} area${concernCount !== 1 ? "s" : ""} that deserve direct, honest discussion before moving forward. Open communication about these topics — ideally with curiosity rather than judgment — is the most important next step.`;
}

function buildTimeline(allSignals: Signal[], transcript: string): EvidenceItem[] {
  const msgs = parseTranscript(transcript);
  const signalsByIndex: Record<number, string[]> = {};
  for (const s of allSignals) {
    if (!signalsByIndex[s.messageIndex]) signalsByIndex[s.messageIndex] = [];
    signalsByIndex[s.messageIndex].push(s.label.split(":")[0]);
  }
  return msgs
    .filter((m) => signalsByIndex[m.index])
    .map((m) => ({
      messageIndex: m.index,
      speaker: m.speaker,
      text: m.text,
      signals: signalsByIndex[m.index],
    }));
}

export function analyzeConversation(input: AnalysisInput): AnalysisResult {
  const msgs = parseTranscript(input.transcript);
  const sourceContext = buildSourceContext(input.sourceType);
  const contextInsights = buildContextInsights(input);
  const readinessInsight = buildReadinessInsight(input.selfAssessment);
  const extraTopics = [
    ...buildContextTopics(contextInsights),
    ...buildReadinessTopics(readinessInsight),
  ];
  const extraStrengths =
    readinessInsight?.status === "ready"
      ? ["Your own readiness check supports intentional dating"]
      : [];

  const strengthSignals: Signal[] = [
    ...detectBoundaryRespect(msgs),
    ...detectAccountability(msgs),
    ...detectRepairLanguage(msgs),
    ...detectSupportsIndependence(msgs),
  ];

  const compatibilitySignals: Signal[] = [
    ...detectAsksInsteadOfAssumes(msgs),
    ...detectValueAlignment(msgs),
    ...detectFutureOrientation(msgs),
  ];

  const discussionSignals: Signal[] = [
    ...detectCommunicationStyleGap(msgs),
    ...detectLifestyleDifferences(msgs),
    ...detectFinancialConversation(msgs),
    ...detectLocationOrLogistics(msgs),
  ];

  const concernSignals: Signal[] = [
    ...detectRapidIntensity(msgs),
    ...detectIndirectConflictStyle(msgs),
    ...detectPersistentPressure(msgs),
    ...detectPrivacyOrControlLanguage(msgs),
    ...detectDismissiveResponses(msgs),
  ];

  // PersistentPressure returns "discuss" level signals too — split them
  const persistentDiscuss = concernSignals.filter((s) => s.level === "discuss");
  const actualConcerns = concernSignals.filter((s) => s.level === "concern");
  const allDiscussion = [...discussionSignals, ...persistentDiscuss];

  const compatibilitySummary = buildCompatibilitySummary(
    strengthSignals,
    compatibilitySignals,
    allDiscussion,
    actualConcerns,
    {
      goal: input.relationshipGoal,
      extraTopics,
      extraStrengths,
    }
  );

  const communicationSummary = buildCommunicationSummary(
    strengthSignals.length,
    compatibilitySignals.length,
    allDiscussion.length,
    actualConcerns.length,
    compatibilitySummary.level
  );

  const allSignals = [
    ...strengthSignals,
    ...compatibilitySignals,
    ...allDiscussion,
    ...actualConcerns,
  ];

  const evidenceTimeline = buildTimeline(allSignals, input.transcript);

  return {
    compatibilitySummary,
    strengthSignals,
    compatibilitySignals,
    discussionSignals: allDiscussion,
    concernSignals: actualConcerns,
    communicationSummary,
    evidenceTimeline,
    limitations: LIMITATIONS,
    sampleId: input.sampleId,
    goalContext: buildGoalContext(input.relationshipGoal),
    sourceContext,
    contextInsights,
    readinessInsight,
    appliedPersonalization: buildAppliedPersonalization(input, contextInsights, readinessInsight),
  };
}
