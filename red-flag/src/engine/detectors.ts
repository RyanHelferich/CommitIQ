import type { ParsedMessage, Signal } from "./types";

let sigId = 0;
const uid = () => `sig-${++sigId}`;

function matches(text: string, patterns: string[]): boolean {
  const lower = text.toLowerCase();
  return patterns.some((p) => lower.includes(p));
}

function findAll(messages: ParsedMessage[], patterns: string[]): ParsedMessage[] {
  return messages.filter((m) => matches(m.text, patterns));
}

export function parseTranscript(transcript: string): ParsedMessage[] {
  const lines = transcript.split("\n").filter((l) => l.trim().length > 0);
  const parsed: ParsedMessage[] = [];
  let speaker = "Unknown";
  lines.forEach((line, idx) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx > 0 && colonIdx < 20) {
      speaker = line.slice(0, colonIdx).trim();
      const text = line.slice(colonIdx + 1).trim();
      if (text) parsed.push({ index: idx, speaker, text });
    } else {
      parsed.push({ index: idx, speaker, text: line.trim() });
    }
  });
  return parsed;
}

// ── ♥ RELATIONSHIP STRENGTHS ─────────────────────────────────────────────────

export function detectBoundaryRespect(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "of course", "i understand", "i'll wait", "whatever you're comfortable",
    "no pressure", "take your time", "whenever you're ready", "that's okay",
    "i respect that", "okay i hear you", "completely support",
  ]);
  return hits.slice(0, 3).map((m) => ({
    id: uid(),
    category: "mutual_respect",
    level: "strength" as const,
    label: "Mutual Respect: Consistently Demonstrated",
    description: "Partner acknowledged and accepted a stated limit or preference without pushback or pressure.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Consistent respect for limits is one of the strongest indicators of long-term relationship health.",
    questionsToAsk: [
      "What does mutual respect look like to you in a relationship?",
      "How do you want to feel when you set a boundary with a partner?",
      "What does it look like when someone truly hears you?",
    ],
  }));
}

export function detectAccountability(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "i should have", "i was wrong", "that's on me", "i'm sorry i",
    "my fault", "i shouldn't have", "i owe you", "i take responsibility",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "accountability",
    level: "strength" as const,
    label: "Accountability: Directly and Clearly Expressed",
    description: "Partner takes direct ownership of a mistake without deflection or redirection.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Partners who take accountability prevent recurring patterns and build lasting trust.",
    questionsToAsk: [
      "How do you usually handle it when you've made a mistake in a relationship?",
      "What's the hardest thing to apologize for?",
      "How do you want a partner to respond when you're taking accountability?",
    ],
  }));
}

export function detectRepairLanguage(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "can we talk about", "i want to understand", "i didn't mean to",
    "let's work this out", "i want us to be okay", "let's figure this out",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "conflict_repair",
    level: "strength" as const,
    label: "Conflict Resolution: Active Repair Attempts",
    description: "Partner actively tries to reconnect and resolve rather than withdraw or escalate.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Repair attempts after conflict are one of the most reliable predictors of relationship resilience.",
    questionsToAsk: [
      "How do you typically reconnect after a disagreement?",
      "What does 'making things right' look like to you?",
      "How long do you usually need before you're ready to talk something through?",
    ],
  }));
}

export function detectSupportsIndependence(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "you should go", "spend time with your friends", "you don't need my permission",
    "have fun with them", "go hang out", "enjoy your time", "i completely support",
    "your friendships are important",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "autonomy_support",
    level: "strength" as const,
    label: "Partnership Style: Actively Encourages Autonomy",
    description: "Partner encourages maintaining individual friendships and personal space.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Healthy long-term relationships preserve each person's individual identity and social network.",
    questionsToAsk: [
      "How do you envision balancing couple time with individual friendships?",
      "What does a healthy amount of independence look like to you in a relationship?",
      "How important is your social circle to your overall wellbeing?",
    ],
  }));
}

// ── ✓ STRONG COMPATIBILITY ────────────────────────────────────────────────────

export function detectAsksInsteadOfAssumes(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "would you be okay with", "is that alright", "how do you feel about",
    "are you comfortable", "what do you think", "is that okay with you",
    "what does that look like for you",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "intentional_communication",
    level: "compatibility" as const,
    label: "Intentional Communication: Checks In Before Acting",
    description: "Partner consistently checks in rather than assuming preference or consent.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Partners who ask rather than assume create space for honest communication and genuine connection.",
    questionsToAsk: [
      "What's your communication style like in relationships?",
      "How important is checking in with a partner before making plans that affect both of you?",
      "What does feeling truly considered in a relationship feel like to you?",
    ],
  }));
}

export function detectValueAlignment(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "that's what i want too", "i feel the same", "we're aligned", "i agree completely",
    "that matters to me too", "both of those are mine", "i feel the same way",
    "that resonates with me", "i think about that too",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "value_alignment",
    level: "compatibility" as const,
    label: "Value Alignment: Expressed and Mutual",
    description: "Both partners expressed shared values, goals, or priorities in this exchange.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Shared values are a more reliable long-term compatibility indicator than shared interests.",
    questionsToAsk: [
      "What are the values you consider absolutely non-negotiable in a relationship?",
      "How do you feel about having a partner whose values differ from yours in some areas?",
      "What does it look like when two people are genuinely aligned on the things that matter?",
    ],
  }));
}

export function detectFutureOrientation(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "long-term", "building something", "where do you see", "future", "down the road",
    "eventually", "someday", "at some point", "over time", "as we grow",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "future_orientation",
    level: "compatibility" as const,
    label: "Future Thinking: Both Partners Are Forward-Looking",
    description: "Partner demonstrated willingness to think and talk about the future of the relationship.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Partners who can discuss the future openly are more likely to build intentional, sustainable relationships.",
    questionsToAsk: [
      "What does commitment mean to you at this stage?",
      "Where do you see yourself in two to three years?",
      "What kind of life do you want to build with a partner?",
    ],
  }));
}

// ── ● NEEDS DISCUSSION ────────────────────────────────────────────────────────

export function detectCommunicationStyleGap(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "go quiet", "shut down", "i don't always say", "hard to read",
    "i need time to process", "i pull away", "i go silent",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "communication_style",
    level: "discuss" as const,
    label: "Communication Style: Different Processing Approaches",
    description: "Partners appear to handle emotional situations differently — one may need space while the other wants to talk.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Mismatched communication styles are common and very workable — the key is understanding and accommodating each other's approach.",
    questionsToAsk: [
      "How do you prefer to process things when you're upset — alone first, or by talking it through?",
      "What helps you feel most supported when something is hard?",
      "How do you want a partner to show up when you need space?",
    ],
  }));
}

export function detectLifestyleDifferences(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "homebody", "social life", "different", "more of a", "i know i'm not",
    "that's just how i am", "i'm wired that way", "we're different in that way",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "lifestyle_fit",
    level: "discuss" as const,
    label: "Lifestyle Fit: Worth Exploring Together",
    description: "Partners have acknowledged differences in their social preferences or day-to-day lifestyle.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Lifestyle differences are very navigable — the most important thing is that both partners feel their needs are understood.",
    questionsToAsk: [
      "How do you imagine your ideal weekend with a partner?",
      "How important is it that your partner shares your social lifestyle?",
      "How have you navigated lifestyle differences in past relationships?",
    ],
  }));
}

export function detectFinancialConversation(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "money", "savings", "student loans", "financial", "spending", "saver",
    "budget", "afford", "expenses", "debt",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "financial_alignment",
    level: "discuss" as const,
    label: "Financial Transparency: Open Conversation Started",
    description: "Financial topics have come up — this is healthy and important to continue exploring.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Financial values and habits are one of the top predictors of long-term relationship satisfaction. Starting this conversation early is a strong sign.",
    questionsToAsk: [
      "How do you approach conversations about money in a relationship?",
      "What are your financial goals and how do they shape your lifestyle?",
      "How do you think couples should navigate financial decisions together?",
    ],
  }));
}

export function detectLocationOrLogistics(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "where we'd live", "close to family", "other cities", "stay here",
    "move", "roots here", "career opportunity", "location",
  ]);
  return hits.slice(0, 1).map((m) => ({
    id: uid(),
    category: "logistics_alignment",
    level: "discuss" as const,
    label: "Life Logistics: Geography and Roots",
    description: "Location preferences or family proximity came up — an important practical area to align on.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Where a couple lives affects nearly every aspect of their relationship. Discussing this openly early prevents surprises later.",
    questionsToAsk: [
      "How tied are you to where you live now?",
      "How do you think about balancing career opportunities with relationship stability?",
      "How important is it to be near your family long-term?",
    ],
  }));
}

// ── ⚑ POTENTIAL CONCERNS ─────────────────────────────────────────────────────

export function detectRapidIntensity(msgs: ParsedMessage[]): Signal[] {
  const patterns = [
    "you are unlike anyone", "i've never felt this way", "you're perfect",
    "soulmate", "meant to be", "i've been waiting my whole life", "you complete me",
  ];
  const hits = findAll(msgs, patterns);
  if (hits.length === 0) return [];

  const early = hits.filter((m) => m.index < 6);

  if (early.length >= 2) {
    return [{
      id: uid(),
      category: "relationship_pacing",
      level: "concern" as const,
      label: "Relationship Pacing: Very Rapid Early Intensity",
      description: `${early.length} high-intensity affection statements appeared in the opening messages — faster than relationships typically develop naturally.`,
      evidenceSnippet: early[0].text,
      messageIndex: early[0].index,
      whyItMatters: "Early intensity can be genuine — and it can also make it harder to evaluate compatibility clearly. It's worth discussing what pace feels sustainable for both people.",
      questionsToAsk: [
        "What does commitment look like to you in the early stages of getting to know someone?",
        "How do you typically show affection, and does your intensity level change over time?",
        "What pace of emotional investment feels right to you?",
      ],
    }];
  }
  return [];
}

export function detectIndirectConflictStyle(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "i guess i care more", "after everything i", "fine, forget it",
    "i thought you cared", "if you loved me", "obviously you don't",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "conflict_communication",
    level: "concern" as const,
    label: "Conflict Communication: Indirect Expression Style",
    description: "Partner expressed frustration or hurt through implication rather than direct communication.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Indirect conflict communication can lead to unresolved issues over time. This is very workable with the right conversations.",
    questionsToAsk: [
      "How do you usually express it when you're hurt or upset?",
      "What helps you feel safe enough to say what you're really feeling?",
      "What does healthy conflict look like to you in a relationship?",
    ],
  }));
}

export function detectPersistentPressure(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "but what if we just", "just this once", "come on, just",
    "i already said sorry", "can't you just", "why won't you just",
  ]);
  if (hits.length === 0) return [];

  if (hits.length >= 3) {
    return [{
      id: uid(),
      category: "limit_navigation",
      level: "concern" as const,
      label: "Limit Navigation: Persistent Approach — Needs Attention",
      description: `The same pressure pattern appeared ${hits.length} times after a limit was stated. This is worth discussing directly.`,
      evidenceSnippet: hits[0].text,
      messageIndex: hits[0].index,
      whyItMatters: "A pattern of re-asking after someone has said no can signal that limits aren't fully respected. This conversation is important to have.",
      questionsToAsk: [
        "How do you feel about respecting a partner's limit when they're not ready for something?",
        "What does 'no' mean to you in the context of a relationship?",
        "How important is it that both people feel comfortable with the pace of things?",
      ],
    }];
  }

  return [{
    id: uid(),
    category: "limit_navigation",
    level: "discuss" as const,
    label: "Limit Navigation: Pushback Noticed",
    description: "Partner pushed back when a preference was stated — worth paying attention to.",
    evidenceSnippet: hits[0].text,
    messageIndex: hits[0].index,
    whyItMatters: "Even occasional pushback on stated limits is worth noting as you learn more about this person.",
    questionsToAsk: [
      "How do you typically respond when a partner says they're not comfortable with something?",
      "What does respecting someone's pace look like to you?",
    ],
  }];
}

export function detectPrivacyOrControlLanguage(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "don't tell your friends", "keep this between us", "they don't understand us",
    "i want you all to myself", "we should keep this private",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "social_transparency",
    level: "concern" as const,
    label: "Social Boundaries: Privacy-Oriented Communication",
    description: "Partner suggested keeping aspects of the relationship from friends or family.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Healthy relationships can be openly shared with trusted people in your life. It's worth understanding why privacy is being requested.",
    questionsToAsk: [
      "How do you feel about your partner having close friendships they confide in?",
      "How open do you typically are about your relationships with people you trust?",
      "What role do friends and family play in your relationship life?",
    ],
  }));
}

export function detectDismissiveResponses(msgs: ParsedMessage[]): Signal[] {
  const hits = findAll(msgs, [
    "you're being dramatic", "you're too sensitive", "you're overreacting",
    "calm down", "relax, it's fine",
  ]);
  return hits.slice(0, 2).map((m) => ({
    id: uid(),
    category: "emotional_validation",
    level: "concern" as const,
    label: "Emotional Validation: Communication Gap Detected",
    description: "Partner minimized or redirected expressed feelings rather than acknowledging them.",
    evidenceSnippet: m.text,
    messageIndex: m.index,
    whyItMatters: "Feeling emotionally heard is foundational to relationship safety. This is very addressable with open conversation.",
    questionsToAsk: [
      "How do you prefer to be supported when you're going through something difficult?",
      "What does feeling truly heard look like in a relationship?",
      "How do you usually respond when your partner expresses strong emotion?",
    ],
  }));
}
