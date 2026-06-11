import type { ContextPack } from "../engine/types";

export const SYNTHETIC_CONTEXT: ContextPack = {
  banking: [
    { category: "Repeated gift spending", description: "Synthetic: 6 expensive gift purchases within 2 weeks of meeting", riskModifier: -3 },
    { category: "Loan request pattern", description: "Synthetic: 3 informal loan requests via messaging apps", riskModifier: -4 },
  ],
  socialTime: [
    { pattern: "Late-night message spikes", description: "Synthetic: messaging activity spikes 11pm–2am on days following disagreements", riskModifier: -2 },
    { pattern: "Profile check frequency", description: "Synthetic: profile view frequency increased 4x in the past week", riskModifier: -2 },
  ],
  publicProfile: [
    { signal: "Relationship status inconsistency", description: "Synthetic: public profile shows 'single' while claiming exclusive relationship", riskModifier: -3 },
    { signal: "Posting intensity spike", description: "Synthetic: unusually high posting cadence with relationship-themed content after first date", riskModifier: -1 },
  ],
  searchCategories: [
    { category: "Manipulation awareness searches", description: "Synthetic: searches in 'how to tell if someone is manipulating me' category", riskModifier: -1 },
    { category: "Relationship health queries", description: "Synthetic: queries about healthy relationship boundaries and red flags", riskModifier: -1 },
  ],
};
