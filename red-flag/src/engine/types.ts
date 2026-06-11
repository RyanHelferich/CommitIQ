export type SourceType = "chat" | "dating_app" | "voice_transcript";
export type RelationshipGoal = "long-term" | "marriage-minded" | "casual" | "exploring" | "re-entering";
export type SpectrumLevel = "strength" | "compatibility" | "discuss" | "concern";
export type CompatibilityLevel = "excellent" | "strong" | "promising" | "challenging";

export type Signal = {
  id: string;
  category: string;
  level: SpectrumLevel;
  label: string;
  description: string;
  evidenceSnippet: string;
  messageIndex: number;
  whyItMatters: string;
  questionsToAsk: string[];
};

export type CompatibilitySummary = {
  level: CompatibilityLevel;
  headline: string;
  strengths: string[];
  topicsToDiscuss: string[];
};

export type SourceContext = {
  label: string;
  detail: string;
};

export type ContextInsight = {
  label: string;
  detail: string;
  emphasis: "compatibility" | "discuss" | "concern";
};

export type ReadinessInsight = {
  status: "ready" | "mixed" | "needs-space";
  headline: string;
  detail: string;
  questions: string[];
};

export type EvidenceItem = {
  messageIndex: number;
  speaker: string;
  text: string;
  signals: string[];
};

export type SyntheticBankingSignal = {
  category: string;
  description: string;
  riskModifier: number;
};

export type SyntheticSocialTimeSignal = {
  pattern: string;
  description: string;
  riskModifier: number;
};

export type SyntheticProfileSignal = {
  signal: string;
  description: string;
  riskModifier: number;
};

export type SyntheticSearchSignal = {
  category: string;
  description: string;
  riskModifier: number;
};

export type ContextPack = {
  banking?: SyntheticBankingSignal[];
  socialTime?: SyntheticSocialTimeSignal[];
  publicProfile?: SyntheticProfileSignal[];
  searchCategories?: SyntheticSearchSignal[];
};

export type ContextPackToggles = {
  banking: boolean;
  socialTime: boolean;
  publicProfile: boolean;
  searchCategories: boolean;
};

export type SelfAssessmentAnswers = {
  emotionalAvailability: "fully" | "mostly" | "somewhat" | "not-yet";
  overPastRelationships: "yes" | "mostly" | "still-processing";
  timeInvestment: "a-lot" | "moderate" | "limited";
  patternsToBreak: string;
};

export type AnalysisInput = {
  transcript: string;
  sourceType: SourceType;
  sampleId?: string;
  contextToggles?: ContextPackToggles;
  relationshipGoal?: RelationshipGoal;
  selfAssessment?: SelfAssessmentAnswers;
};

export type AnalysisResult = {
  compatibilitySummary: CompatibilitySummary;
  strengthSignals: Signal[];
  compatibilitySignals: Signal[];
  discussionSignals: Signal[];
  concernSignals: Signal[];
  communicationSummary: string;
  evidenceTimeline: EvidenceItem[];
  limitations: string[];
  sampleId?: string;
  goalContext?: string;
  sourceContext: SourceContext;
  contextInsights: ContextInsight[];
  readinessInsight?: ReadinessInsight;
  appliedPersonalization: string[];
};

export type ParsedMessage = {
  index: number;
  speaker: string;
  text: string;
};
