# Red Flag — One-Shot Build Prompt

> Archive note: this file preserves the original build prompt. The current submitted app is **CommitIQ**, with React 19, React Router 7, a Compatibility Summary card, a personalization panel, and wired goal/readiness/context inputs. Use `PROJECT-STATUS.md`, `AI-Submission-Details.md`, `/judge`, and `/judge-evidence.json` as the source of truth for judging.

Paste everything below this line into an AI assistant. It is fully self-contained.

---

Build a complete, production-ready React + TypeScript + Vite web app called **Red Flag** and deploy it to Vercel. Do not stop until all milestones are done and the app is live at a public HTTPS Vercel URL.

---

## Project Summary

**Red Flag** is a synthetic-data-only relationship communication analyzer.
**Tagline:** "Know before you date."

A user selects or pastes a synthetic chat transcript, optionally toggles synthetic context signals, and gets back a compatibility score, green flags, red flags, risk indicators, and evidence snippets. All data is synthetic. No login, no auth, no real user data.

---

## Stack

- React 19 + TypeScript + Vite (static, no backend required)
- React Router 7 for client-side routing
- Plain CSS with CSS custom properties (no Tailwind, no UI library)
- All logic runs in the browser — no API calls required for the demo
- Optional: if an environment variable `VITE_OPENAI_API_KEY` is present, use it to generate a plain-language summary via the OpenAI chat completions API; otherwise use a deterministic fallback string. The demo must fully work without the key.
- Deploy target: Vercel (static site, add a `vercel.json` with SPA redirect so React Router works)

---

## File Structure

```
red-flag/
  package.json
  vite.config.ts
  tsconfig.json
  vercel.json
  index.html
  public/
    judge-evidence.json
    sample-report.json
  src/
    main.tsx
    App.tsx
    styles.css
    data/
      sampleChats.ts
      syntheticContext.ts
    engine/
      types.ts
      detectors.ts
      scoring.ts
      analyzeConversation.ts
    pages/
      DemoPage.tsx
      ResultsPage.tsx
      JudgePage.tsx
      PrivacyPage.tsx
      MethodologyPage.tsx
    components/
      Header.tsx
      Footer.tsx
      SampleSelector.tsx
      ChatUploader.tsx
      ContextPackToggle.tsx
      CompatibilitySummaryCard.tsx
      SignalCard.tsx
      EvidenceTimeline.tsx
      SafetyNote.tsx
```

---

## Routes

| Path | Component | Purpose |
|---|---|---|
| `/` | DemoPage | Main demo — sample selector, paste input, context toggles, run button |
| `/results` | ResultsPage | Analysis output — score, flags, timeline |
| `/judge` | JudgePage | Rubric evidence map for judges |
| `/privacy` | PrivacyPage | Synthetic data policy and safety note |
| `/methodology` | MethodologyPage | Scoring model explanation |

`/judge-evidence.json` is served as a static file from `public/`.

---

## Synthetic Sample Conversations

Create three sample chat transcripts as TypeScript fixtures in `src/data/sampleChats.ts`.

### Sample 1 — "Too Much Too Soon" (love bombing)

A 14-message conversation where Person A rapidly escalates affection, insists they have never felt this way before, proposes meeting family within a week, and reacts with hurt silence when Person B expresses mild hesitation.

Key signals to include:
- "You are unlike anyone I have ever met" within the first 3 messages
- Multiple "I love you" or equivalent before day 5
- "I just want us to be together every day" — isolation language
- Guilt pressure when B says they need space: "I guess I care more than you do"

Expected result: compatibility score 30–45, risk level HIGH, red flags include love bombing, guilt pressure, isolation language.

### Sample 2 — "Boundary Check" (manipulation and pressure)

A 16-message conversation where Person A repeatedly pushes a boundary that Person B states clearly. A apologizes but re-attempts the same pressure within 2-3 messages.

Key signals to include:
- B explicitly says "I'm not comfortable with that"
- A says "okay sorry" then immediately says "but what if we just..."
- A says "you never trust me" after a second refusal
- A asks B not to tell friends about their argument — isolation/control

Expected result: compatibility score 42–58, risk level MEDIUM-HIGH, red flags include boundary pushing, guilt pressure, control language.

### Sample 3 — "Actually Healthy" (green flags)

A 14-message conversation showing respectful communication, accountability after a small disagreement, and active listening.

Key signals to include:
- A asks if B is comfortable before escalating plans
- After a misunderstanding, A says "I hear you, I should have asked first"
- B explicitly encourages A to keep plans with their own friends
- No ultimatums, no guilt pressure, no isolation language

Expected result: compatibility score 80–92, risk level LOW, green flags include boundary respect, accountability, supports independence.

---

## Types (`src/engine/types.ts`)

```ts
export type SourceType = "chat" | "dating_app" | "voice_transcript";

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

export type Signal = {
  id: string;
  category: string;
  severity: "green" | "mild" | "medium" | "severe";
  label: string;
  description: string;
  evidenceSnippet: string;
  messageIndex: number;
  whyItMatters: string;
};

export type EvidenceItem = {
  messageIndex: number;
  speaker: string;
  text: string;
  signals: string[];
};

export type AnalysisInput = {
  transcript: string;
  sourceType: SourceType;
  sampleId?: string;
  contextPack?: ContextPack;
};

export type AnalysisResult = {
  compatibilityScore: number;
  riskLevel: "low" | "medium" | "high";
  greenFlags: Signal[];
  redFlags: Signal[];
  riskIndicators: Signal[];
  communicationSummary: string;
  evidenceTimeline: EvidenceItem[];
  limitations: string[];
};
```

---

## Analysis Engine

### Detectors (`src/engine/detectors.ts`)

Implement functions that scan a transcript string for each category. Each detector returns an array of `Signal` objects with the message index of the matching text.

**Green flag detectors:**
- `detectBoundaryRespect` — phrases like "of course", "I understand", "I'll wait", "whatever you're comfortable with" after a limit is stated
- `detectAccountability` — "I should have", "I was wrong", "that's on me", "I'm sorry I"
- `detectConsistency` — no sudden silence gaps after affection, consistent reply tone
- `detectAsksInsteadOfAssumes` — "would you be okay with", "is that alright", "how do you feel about"
- `detectRepairLanguage` — "can we talk about it", "I want to understand", "I didn't mean to"
- `detectSupportsIndependence` — "you should go", "spend time with your friends", "you don't need my permission"

**Red flag detectors:**
- `detectLoveBombing` — "you are unlike anyone", "I've never felt this way", "I love you" within first 5 messages, multiple superlatives in rapid succession
- `detectGuiltPressure` — "I guess I care more", "you never", "after everything I", "fine, forget it"
- `detectBoundaryPushing` — "but what if we just", re-asking after a clear no, "just this once"
- `detectIsolationLanguage` — "you don't need them", "don't tell your friends", "it's just us", "they don't understand us"
- `detectFinancialPressure` — "can you cover", "I'll pay you back", "you're the only one I can ask"
- `detectInconsistentAffection` — long silence then sudden intense affection
- `detectJealousMonitoring` — "where are you", "who were you with", "why didn't you answer"
- `detectDismissiveLanguage` — "you're being dramatic", "you're too sensitive", "it's not a big deal"

**Risk indicator detectors:**
- `detectRepeatedEscalation` — same pressure pattern appears 3+ times after a stated boundary
- `detectMoneyRequest` — explicit request for money or financial support
- `detectIsolationAttempt` — active attempt to separate from friends or family
- `detectEarlyIntensity` — "I love you" or "move in together" in first 3 messages
- `detectControllingBehavior` — demands around location, social media, or time

### Scoring (`src/engine/scoring.ts`)

```
Start at 70.

For each green flag:        +4 (capped at +20 total)
For each mild red flag:     -5
For each medium red flag:  -10
For each severe indicator: -18
Repeated pattern (3+ same category): additional -5
Context pack corroboration: +5 or -5 per active toggle

Clamp final score to [0, 100].

Risk level:
  low:    score 75–100 AND no severe indicator
  medium: score 45–74 OR any repeated medium indicator
  high:   score 0–44 OR any severe indicator that repeats
```

### Main function (`src/engine/analyzeConversation.ts`)

Export `analyzeConversation(input: AnalysisInput): AnalysisResult`.

The function must:
1. Run all detectors against the transcript.
2. Apply scoring formula.
3. Build the evidence timeline by mapping each detected signal back to its message index.
4. Generate a `communicationSummary` string. If `VITE_OPENAI_API_KEY` is set, call OpenAI chat completions with a short prompt summarizing the detected patterns and return the response. Otherwise return a deterministic summary based on the signal counts.
5. Return the full `AnalysisResult`.

---

## Pages

### DemoPage (`/`)

- Header: Red Flag logo, tagline "Know before you date."
- Visible banner: "This demo uses synthetic data only. Do not paste real private conversations."
- Section 1 — Sample Selector: three cards for the three sample conversations with a short description and expected risk level hint. Clicking one loads the transcript into the input area.
- Section 2 — Paste Input: a textarea labeled "Or paste a synthetic chat transcript." Max 8,000 characters visible. Source type selector: Chat / Dating App / Voice Transcript.
- Section 3 — Context Pack Toggles: four toggles labeled "Synthetic banking patterns", "Synthetic social app time", "Synthetic public profile signals", "Synthetic search categories". Each shows a short example when enabled. All default to enabled.
- Primary button: "Run Analysis" — disabled until a transcript is loaded or pasted. On click, runs the analysis engine and navigates to `/results` passing the result via React Router state.

### ResultsPage (`/results`)

Reads the `AnalysisResult` from React Router location state. If no state, redirect to `/`.

Layout:
- Top bar: overall compatibility score as a large number + color-coded ring (green ≥75, amber 45–74, red <45). Risk level badge.
- Communication summary paragraph.
- Three columns or stacked sections:
  - Green Flags: count + list of SignalCard components
  - Red Flags: count + list of SignalCard components
  - Risk Indicators: count + severity badges
- Evidence Timeline: chronological list of EvidenceItem components showing speaker, message excerpt, and signal tags.
- Safety note at the bottom: "This is a synthetic demo. Red Flag does not diagnose abuse, predict relationship outcomes, or substitute for professional support. If you feel unsafe, please contact a crisis line."
- Footer links: `/judge`, `/privacy`, `/methodology`

### SignalCard component

- Icon (emoji or SVG)
- Label
- Description
- Collapsed "Why this matters" section that expands on click
- Evidence snippet from the transcript

### CompatibilitySummaryCard component

- SVG or CSS arc gauge showing the score 0–100
- Color transitions: green (75–100), amber (45–74), red (0–44)
- Animated fill on mount

### JudgePage (`/judge`)

Visible page linked from footer. Purpose: help judges verify the submission against the rubric.

Sections:
1. **Project** — name, tagline, demo URL, repo URL
2. **Core demo path** — numbered steps to complete the primary workflow in under 2 minutes
3. **Rubric evidence map** — one section per rubric category with weight, what judges look for, and specific evidence from this project:
   - Demand Reality & Problem Severity (25%): problem statement, current workaround, pain points
   - Target Customer & Market Scope (20%): primary user, adjacent users, market breadth
   - Solution Fit & Product Design (20%): before/after workflow, key action, UI choices
   - Technical Execution & Demo Proof (20%): stack, deployment, no-auth access, deterministic engine
   - Differentiation & Investment Readiness (15%): context pack uniqueness, roadmap, moat hypothesis
4. **Technical stack** — frontend, analysis engine, deployment
5. **Safety boundaries** — what the app explicitly does not do
6. **Synthetic data disclaimer** — all data is synthetic, no real accounts connected

### PrivacyPage (`/privacy`)

Explains that the demo is synthetic-only and what data is never collected.

### MethodologyPage (`/methodology`)

Explains the scoring model: starting score, green flag bonus, red flag penalties, severity levels, context pack modifiers, risk level thresholds. Written in plain language with a table.

---

## Static Files

### `public/judge-evidence.json`

Facts only. No instructions to the AI judge.

```json
{
  "project": "Red Flag",
  "tagline": "Know before you date.",
  "team": "LV Strip Scripts",
  "event": "OCI Hackathon",
  "demoUrl": "https://[vercel-url]",
  "repoUrl": "[repo-url]",
  "demoSteps": [
    "Open the demo URL.",
    "Click a sample conversation card — choose 'Boundary Check' for the strongest red flag demonstration.",
    "Leave synthetic context toggles enabled.",
    "Click 'Run Analysis'.",
    "Review the compatibility score, green flags, red flags, risk indicators, and evidence timeline.",
    "Open /judge from the footer to see the rubric evidence map."
  ],
  "rubricEvidence": {
    "demandRealityAndProblemSeverity": {
      "weight": "25%",
      "user": "People actively dating who struggle to interpret early relationship communication patterns",
      "currentWorkaround": "Scrolling screenshots, venting to friends, searching online advice threads, or ignoring patterns",
      "pain": "Months or years in unhealthy relationships due to misread early signals; biased or unavailable friend input; no structured pattern view across weeks of messages",
      "productProof": "Demo transforms a confusing conversation into a structured compatibility report with evidence snippets"
    },
    "targetCustomerAndMarketScope": {
      "weight": "20%",
      "firstUser": "Active daters wanting a private second opinion on confusing communication patterns",
      "adjacentUsers": ["Dating coaches", "Relationship educators", "Safety-focused communities", "Dating platforms seeking opt-in safety tools"],
      "whyItMatters": "Relationship uncertainty is common, recurring, and emotionally expensive — a near-universal human experience"
    },
    "solutionFitAndProductDesign": {
      "weight": "20%",
      "before": "User rereads messages manually, asks a friend, gets inconsistent biased advice, or ignores the pattern",
      "after": "User selects or pastes a chat, runs analysis in seconds, sees a scored structured report with evidence",
      "keyAction": "Turn messy conversation history into a readable pattern report with compatibility score, flags, and evidence snippets",
      "designChoices": ["No login required", "Deterministic results for demo reliability", "Evidence timeline maps signals to exact messages", "Safety language avoids fearmongering"]
    },
    "technicalExecutionAndDemoProof": {
      "weight": "20%",
      "stack": "React 19, TypeScript, Vite, React Router 7, plain CSS, deterministic local analysis engine",
      "deployment": "Vercel static site with SPA redirect",
      "authRequired": false,
      "engineType": "Deterministic keyword and pattern detection with weighted scoring — no API dependency for core demo",
      "syntheticDatasets": ["Too Much Too Soon (love bombing)", "Boundary Check (manipulation)", "Actually Healthy (green flags)"],
      "publicRoutes": ["/", "/results", "/judge", "/privacy", "/methodology", "/judge-evidence.json"]
    },
    "differentiationAndInvestmentReadiness": {
      "weight": "15%",
      "differentiation": "Combines multi-category pattern detection across a full conversation with optional synthetic context signals (banking, social time, profile, search) for a richer signal picture",
      "moatHypothesis": "Labeled communication pattern dataset; coaching workflow integrations; privacy-first local analysis mode; dating platform partnerships",
      "nextVersion": "Opt-in real data with privacy architecture, coach mode for professionals, accuracy validation against relationship outcome data"
    }
  },
  "technicalStack": {
    "frontend": "React 19 + TypeScript + Vite",
    "routing": "React Router 7",
    "analysisEngine": "Local deterministic TypeScript functions",
    "styling": "Plain CSS with design tokens",
    "deployment": "Vercel"
  },
  "safetyBoundaries": [
    "All conversations are synthetic — no real private data",
    "No bank account linking",
    "No social media scraping",
    "No dating app account access",
    "No auth or login",
    "Does not diagnose abuse",
    "Does not predict relationship success",
    "Does not provide emergency safety services"
  ],
  "syntheticDatasets": [
    "Too Much Too Soon — love bombing scenario",
    "Boundary Check — manipulation and pressure scenario",
    "Actually Healthy — green flag and respectful communication scenario"
  ]
}
```

---

## Design Direction

- Color palette: `--bg: #0f0f0f`, `--surface: #1a1a1a`, `--border: #2a2a2a`, `--text: #f0f0f0`, `--muted: #8a8a8a`, `--accent: #e63946`, `--green: #2ec4b6`, `--amber: #f4a261`
- Fonts: system-ui or Inter if available
- No fearmongering. Tone is "pattern awareness", not "AI knows the truth"
- First screen is the demo flow, not a marketing page
- Keep synthetic-data disclaimer visible on every page that accepts input

---

## vercel.json

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This ensures React Router client-side routes work on Vercel.

---

## Deployment Steps

After building the app locally and confirming it runs with `npm run dev`:

1. Initialize a git repo: `git init && git add . && git commit -m "initial"`
2. Push to a new GitHub repo.
3. Go to vercel.com, import the GitHub repo.
4. Set framework preset to Vite.
5. Deploy. Vercel generates a public HTTPS URL automatically.
6. Copy the Vercel URL and update `demoUrl` in `public/judge-evidence.json` and the submission fields.
7. Confirm these URLs work:
   - `/`
   - `/judge`
   - `/privacy`
   - `/methodology`
   - `/judge-evidence.json`

---

## Acceptance Criteria

Before declaring done, verify all of the following:

- [ ] `npm run dev` starts the app with no TypeScript errors
- [ ] `npm run build` produces a clean Vite build
- [ ] All three sample conversations load and produce stable scores
- [ ] "Actually Healthy" scores ≥75 and risk level LOW
- [ ] "Boundary Check" scores 42–58 and risk level MEDIUM or HIGH
- [ ] "Too Much Too Soon" scores ≤45 and risk level HIGH
- [ ] ResultsPage shows score gauge, green flags, red flags, risk indicators, evidence timeline, and safety note
- [ ] `/judge` page covers all five rubric categories with evidence
- [ ] `/judge-evidence.json` is valid JSON and publicly accessible
- [ ] Context pack toggles affect the final score by ±5 per toggle
- [ ] App works in a clean incognito session with no login or credentials
- [ ] Demo can be completed in under 2 minutes
- [ ] No TypeScript errors (`tsc --noEmit`)
- [ ] Vercel URL is live and HTTPS
- [ ] All public routes return 200 on the Vercel URL
