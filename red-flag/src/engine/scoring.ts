import type { Signal, CompatibilitySummary, CompatibilityLevel, RelationshipGoal } from "./types";

type SummaryOptions = {
  goal?: RelationshipGoal;
  extraTopics?: string[];
  extraStrengths?: string[];
};

const GOAL_PRIORITY: Record<RelationshipGoal, string[]> = {
  "long-term": [
    "conflict_repair",
    "future_orientation",
    "communication_style",
    "value_alignment",
    "financial_alignment",
    "logistics_alignment",
  ],
  "marriage-minded": [
    "financial_alignment",
    "logistics_alignment",
    "value_alignment",
    "future_orientation",
    "conflict_repair",
  ],
  casual: [
    "mutual_respect",
    "autonomy_support",
    "intentional_communication",
    "communication_style",
    "relationship_pacing",
    "limit_navigation",
  ],
  exploring: [
    "intentional_communication",
    "value_alignment",
    "lifestyle_fit",
    "relationship_pacing",
    "communication_style",
  ],
  "re-entering": [
    "emotional_validation",
    "limit_navigation",
    "relationship_pacing",
    "communication_style",
    "autonomy_support",
  ],
};

function computeLevel(
  strengthCount: number,
  compatibilityCount: number,
  discussCount: number,
  concernCount: number
): CompatibilityLevel {
  if (concernCount >= 3) return "challenging";
  if (concernCount >= 2 || (concernCount >= 1 && discussCount >= 3)) return "promising";
  if (concernCount === 0 && strengthCount >= 3) return "excellent";
  if (concernCount <= 1 && strengthCount >= 2) return "strong";
  if (strengthCount >= 1 || compatibilityCount >= 1) return "promising";
  return "challenging";
}

const HEADLINES: Record<CompatibilityLevel, string> = {
  excellent: "Excellent Match — Strong Alignment Across the Board",
  strong: "Strong Connection — Solid Foundation with Opportunity to Deepen",
  promising: "Promising Start — Real Strengths and Important Conversations Ahead",
  challenging: "Worth Exploring — Several Areas to Discuss Before Moving Forward",
};

function categoryRank(category: string, goal?: RelationshipGoal): number {
  if (!goal) return Number.MAX_SAFE_INTEGER;
  const idx = GOAL_PRIORITY[goal].indexOf(category);
  return idx === -1 ? Number.MAX_SAFE_INTEGER : idx;
}

function uniquePush(items: string[], item: string) {
  if (!items.includes(item)) items.push(item);
}

function buildStrengths(
  strengthSignals: Signal[],
  compatibilitySignals: Signal[],
  options: SummaryOptions
): string[] {
  const all = [...strengthSignals, ...compatibilitySignals];
  all.sort((a, b) => categoryRank(a.category, options.goal) - categoryRank(b.category, options.goal));
  const strengths: string[] = [];
  const categories = new Set<string>();
  for (const s of options.extraStrengths ?? []) uniquePush(strengths, s);
  for (const s of all) {
    if (!categories.has(s.category)) {
      categories.add(s.category);
      uniquePush(strengths, s.label.split(":")[1]?.trim() ?? s.label);
    }
  }
  if (strengths.length === 0) strengths.push("Willingness to have honest conversations");
  return strengths.slice(0, 4);
}

function buildTopicsToDiscuss(
  discussSignals: Signal[],
  concernSignals: Signal[],
  options: SummaryOptions
): string[] {
  const all = [...discussSignals, ...concernSignals];
  all.sort((a, b) => categoryRank(a.category, options.goal) - categoryRank(b.category, options.goal));
  const topics: string[] = [];
  const categories = new Set<string>();
  for (const s of all) {
    if (!categories.has(s.category)) {
      categories.add(s.category);
      uniquePush(topics, s.label.split(":")[1]?.trim() ?? s.label);
    }
  }
  for (const topic of options.extraTopics ?? []) uniquePush(topics, topic);
  if (options.goal === "marriage-minded" && !categories.has("financial_alignment")) {
    uniquePush(topics, "Long-term financial planning and goals");
  }
  if (options.goal === "long-term" && !categories.has("future_orientation")) {
    uniquePush(topics, "Future vision and life goals");
  }
  if (options.goal === "re-entering" && topics.length < 2) {
    uniquePush(topics, "Emotional readiness and past relationship patterns");
  }
  return topics.slice(0, 5);
}

export function buildCompatibilitySummary(
  strengthSignals: Signal[],
  compatibilitySignals: Signal[],
  discussSignals: Signal[],
  concernSignals: Signal[],
  options: SummaryOptions = {}
): CompatibilitySummary {
  const level = computeLevel(
    strengthSignals.length,
    compatibilitySignals.length,
    discussSignals.length,
    concernSignals.length
  );

  return {
    level,
    headline: HEADLINES[level],
    strengths: buildStrengths(strengthSignals, compatibilitySignals, options),
    topicsToDiscuss: buildTopicsToDiscuss(discussSignals, concernSignals, options),
  };
}

export function buildGoalContext(goal?: RelationshipGoal): string {
  const contexts: Record<RelationshipGoal, string> = {
    "long-term": "Analyzed with long-term partnership in mind. Focus areas: sustained compatibility, conflict resolution, shared vision.",
    "marriage-minded": "Analyzed with marriage in mind. Focus areas: value alignment, family planning, financial transparency, life logistics.",
    "casual": "Analyzed for casual dating context. Focus areas: communication style, boundary clarity, mutual enjoyment.",
    "exploring": "Analyzed for compatibility exploration. Focus areas: connection quality, early signals, conversation ease.",
    "re-entering": "Analyzed for someone re-entering dating. Focus areas: emotional readiness, healthy patterns, pacing.",
  };
  return goal ? contexts[goal] : "General compatibility analysis across all dimensions.";
}
