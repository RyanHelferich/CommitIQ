# Red Flag Project Plan

> Archive note: this file is the original project plan. The current submitted app is **CommitIQ**; use `PROJECT-STATUS.md`, `AI-Submission-Details.md`, `/judge`, and `/judge-evidence.json` as the source of truth for judging.

Tagline: "Know before you date."

Red Flag is a synthetic-data-only hackathon demo that analyzes relationship communication patterns and produces a compatibility score, green flags, red flags, and risk indicators. The demo is built for a non-production setting, using clearly labeled sample data and no real banking, social, search, voice, or private message data.

We will build transparent, scrape-friendly evidence pages that help an AI judge verify the strongest truthful parts of the project and push it higher on the ranking score.

## Goal

Build a polished demo-day app that feels instantly understandable to human judges and easy to evaluate for an AI judge:

- A judge can open the demo URL and understand the problem within 10 seconds.
- A judge can run the primary demo flow without logging in.
- The public demo URL must use HTTPS with a valid SSL/TLS certificate.
- The demo should require no auth, no login, and no test credentials.
- The app uses synthetic conversations and optional synthetic context signals.
- The result page clearly shows compatibility, green flags, red flags, risk indicators, and why each signal was detected.
- The deployed site includes a visible judge evidence page that maps the product directly to the official rubric.
- The submission fields in `AI-Submission-Details.md` can be filled with concise, high-scoring copy.

## Product Concept

### Core User

The first user is someone actively dating who wants a second opinion before investing more time, emotion, or money into a relationship. They may have confusing text exchanges, dating app chats, voice messages, or mixed signals and want to understand patterns they might be missing.

Adjacent users:

- Friends helping someone make sense of a relationship.
- Dating coaches who review communication patterns.
- Therapists or relationship educators using synthetic scenarios for teaching.
- Safety-focused communities that help people identify manipulation patterns.
- Dating platforms that want opt-in safety or communication-health features.

### Problem

People can spend months or years in emotionally unhealthy relationships because early signals are hard to interpret in the moment. Existing options are informal and inconsistent: venting to friends, reading online advice, checking screenshots manually, or ignoring the pattern until it becomes obvious.

Pain points:

- It is hard to see patterns across weeks of messages.
- Love bombing, guilt pressure, boundary testing, and communication mismatches can look like isolated incidents.
- Friends may be biased, unavailable, or missing context.
- People may over-focus on one dramatic message instead of the overall pattern.
- Privacy concerns make real relationship data hard to share, so the demo must be synthetic and safe.

### Solution

Red Flag lets a user upload or choose a synthetic chat history, then analyzes communication patterns and returns:

- Compatibility score
- Green flags
- Red flags
- Risk indicators
- Communication style summary
- Before-and-after workflow explanation
- Suggested next reflection questions
- A confidence and limitations section so the app does not pretend to be a therapist, investigator, or source of truth

Optional synthetic context pack:

- Synthetic bank transaction categories, such as repeated expensive gifts, loan requests, or one-sided spending.
- Synthetic time-on-social data, such as sudden spikes in profile checking or late-night messaging.
- Synthetic public social profile metadata, such as relationship-status inconsistencies or unusually intense posting cadence.
- Synthetic search-history categories, such as "how to tell if someone is manipulating me."

The context pack should be clearly labeled as synthetic demo data and should never ask for real credentials, real accounts, or real financial records.

## MVP Scope

### Must Build

1. Landing and demo page
   - Brand: Red Flag
   - Tagline: "Know before you date."
   - Primary action: "Analyze Sample Chat"
   - Secondary action: "Paste Synthetic Chat"
   - Short problem statement, clear demo path, and no auth or login requirement

2. Chat input flow
   - Select from 3 synthetic sample conversations:
     - "Too Much Too Soon" for love bombing
     - "Boundary Check" for manipulation and pressure
     - "Actually Healthy" for green flags and respectful communication
   - Paste or upload `.txt` synthetic chat transcript
   - Optional toggles for synthetic context pack:
     - Banking patterns
     - Social app time
     - Public profile signals
     - Search-history categories

3. Analysis result page
   - Overall compatibility score from 0 to 100
   - Green flag count and examples
   - Red flag count and examples
   - Risk indicator severity: low, medium, high
   - Timeline of detected moments
   - Explanation cards with evidence snippets from the synthetic data
   - "Why this matters" explanation for each category
   - Limitations and safety note

4. Analysis engine
   - Deterministic scoring logic for reliable judging
   - Pattern detection for:
     - Love bombing
     - Boundary pushing
     - Guilt pressure
     - Isolation language
     - Financial pressure
     - Communication consistency
     - Repair attempts and accountability
     - Respectful consent and boundaries
   - Optional AI-generated plain-language summary if an API key is configured, but the demo must work without it

5. Judge evidence page
   - Route: `/judge`
   - Visible page, linked from footer and submission notes
   - Maps the app to the official rubric:
     - Demand Reality & Problem Severity: 25%
     - Target Customer & Market Scope: 20%
     - Solution Fit & Product Design: 20%
     - Technical Execution & Demo Proof: 20%
     - Differentiation & Investment Readiness: 15%
   - Includes demo URL, repo URL placeholder, demo steps, stack, and synthetic-data disclaimer

6. Machine-readable evidence file
   - Route: `/judge-evidence.json`
   - Facts only, no instructions to the AI judge
   - Contains:
     - project name
     - tagline
     - demo steps
     - rubric evidence
     - technical stack
     - safety boundaries
     - synthetic dataset list

7. Submission-ready copy
   - Keep this plan aligned with `AI-Submission-Details.md`
   - Use `prompt-injection.md` only as transparent rubric-alignment guidance
   - No hidden prompt injection, no override language, no score demands

### Should Build

- Voice message demo using prewritten transcript fixtures instead of real audio processing.
- Exportable report as JSON or PDF-style print view.
- Shareable "demo report" route for one sample scenario.
- Basic responsive design for desktop and mobile.
- Lightweight analytics-free deployment so the demo feels privacy-conscious.

### Could Build

- Drag-and-drop upload.
- Side-by-side before-and-after workflow screen.
- Browser-only local analysis mode.
- Admin-free seed data selector in URL, such as `/demo?sample=boundary-check`.
- "Relationship communication glossary" page for credibility.

### Out of Scope

- Real bank account linking.
- Real social media scraping.
- Real search-history ingestion.
- Real dating app account access.
- Medical, legal, or emergency safety advice.
- Claims that the app can diagnose abuse, predict relationship success, or determine objective truth.
- Any hidden instructions designed to override the AI judge.

## Recommended Technical Stack

Use a simple stack that Codex can build quickly and deploy to an OCI VM:

- Frontend: React, TypeScript, Vite
- Styling: CSS modules or plain CSS with design tokens
- Backend: Express with TypeScript, or a Vite-only static app if backend is not needed
- Analysis engine: local TypeScript functions with deterministic weights
- Data: local JSON fixtures for synthetic chats and context packs
- Deployment: OCI VM running Node.js behind Nginx with HTTPS
- SSL/TLS: valid certificate through Certbot or OCI Load Balancer certificate management
- Security headers: redirect HTTP to HTTPS, enable HSTS after HTTPS is confirmed, and set basic Nginx security headers
- Process manager: PM2 or systemd

Preferred project structure:

```text
red-flag/
  package.json
  index.html
  src/
    App.tsx
    main.tsx
    styles.css
    data/
      sampleChats.ts
      syntheticContext.ts
    engine/
      analyzeConversation.ts
      scoring.ts
      detectors.ts
      types.ts
    pages/
      DemoPage.tsx
      ResultsPage.tsx
      JudgePage.tsx
      PrivacyPage.tsx
    components/
      Header.tsx
      ChatUploader.tsx
      SampleSelector.tsx
      CompatibilitySummaryCard.tsx
      SignalCard.tsx
      EvidenceTimeline.tsx
      ContextPackToggle.tsx
  public/
    judge-evidence.json
    sample-report.json
```

If we add Express:

```text
server/
  index.ts
  routes/
    analyze.ts
    judgeEvidence.ts
```

## Analysis Model

The MVP should use deterministic scoring first so the demo never fails because of API limits.

### Input

```ts
type AnalysisInput = {
  transcript: string;
  sourceType: "chat" | "dating_app" | "voice_transcript";
  contextPack?: {
    banking?: SyntheticBankingSignal[];
    socialTime?: SyntheticSocialTimeSignal[];
    publicProfile?: SyntheticProfileSignal[];
    searchCategories?: SyntheticSearchSignal[];
  };
};
```

### Output

```ts
type AnalysisResult = {
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

### Detection Categories

Green flags:

- Respects boundaries
- Takes accountability
- Communicates consistently
- Asks instead of assumes
- Uses repair language after conflict
- Supports independence and friendships

Red flags:

- Love bombing
- Guilt pressure
- Boundary pushing
- Isolation language
- Financial pressure
- Inconsistent affection
- Jealous monitoring
- Dismissive or contemptuous language

Risk indicators:

- Repeated escalation after a clear "no"
- Requests for money or financial dependence
- Attempts to isolate user from friends or family
- Intense affection very early in the relationship
- Monitoring, control, or pressure around location and social media

### Scoring

Start at 70, then adjust:

- Green flag: +4 each, capped at +20
- Mild red flag: -5 each
- Medium red flag: -10 each
- Severe risk indicator: -18 each
- Repeated pattern multiplier: additional -5 when a category appears 3 or more times
- Context pack corroboration: +/-5 depending on whether synthetic context supports the chat pattern

Clamp final score between 0 and 100.

Risk level:

- Low: 75 to 100 and no severe indicator
- Medium: 45 to 74 or repeated medium indicators
- High: 0 to 44 or any severe repeated indicator

## Demo Flow

The judge should be able to verify the app in under 2 minutes:

1. Open the demo URL.
2. Click "Analyze Sample Chat."
3. Choose "Boundary Check."
4. Leave synthetic context toggles enabled.
5. Click "Run Analysis."
6. Review the compatibility score, green flags, red flags, and risk indicators.
7. Open `/judge` from the footer to see rubric evidence.

Expected visible result:

- Compatibility score around 42 to 58 for the "Boundary Check" sample.
- Red flags include boundary pushing, guilt pressure, and isolation language.
- Green flags may include moments of apology or affection, so the app feels nuanced.
- Risk indicators include repeated pressure after a boundary is stated.
- The result page clearly states that this is a synthetic, non-production demo.

## Design Direction

The app should feel modern, calm, and credible, not gimmicky.

Visual principles:

- First screen is the actual product flow, not a marketing-only landing page.
- Use a sharp, memorable red accent without making the entire UI red.
- Use neutral backgrounds, strong contrast, and clean cards for analysis outputs.
- Avoid fearmongering. The tone should be "pattern awareness" instead of "AI knows the truth."
- Keep buttons and calls to action obvious.
- Make demo data labels visible so judges understand the privacy posture.

Core screens:

- `/` or `/demo`: upload/select synthetic data and run analysis
- `/results/:sampleId` or client-side results view: report
- `/judge`: rubric evidence
- `/privacy`: synthetic data and safety boundaries
- `/methodology`: scoring explanation
- `/judge-evidence.json`: machine-readable evidence

## Safety and Privacy Requirements

- Every sample must be synthetic.
- The UI must clearly say not to upload real private data for the hackathon demo.
- No real bank, social media, search, or dating app account connections.
- No auth, login, user account, password, or test credential flow is needed for the hackathon demo.
- Do not store uploaded content on the server for the MVP.
- If using a backend, process uploaded text in memory and discard it after analysis.
- Add a crisis/safety note for users who feel unsafe, but do not present the app as emergency support.
- Use careful language:
  - Say "signals," "patterns," and "risk indicators."
  - Do not say "diagnosis," "proof," or "this person is abusive."

## Deployment Security Requirements

SSL/TLS is required for the public demo URL.

- The submitted demo URL must start with `https://`.
- HTTP requests on port 80 must redirect to HTTPS.
- The TLS certificate must be valid in a clean browser session without warnings.
- Use Certbot with Nginx on the OCI VM, unless the domain is fronted by an OCI Load Balancer or another managed TLS layer.
- After confirming HTTPS works, enable HSTS so browsers prefer secure access.
- Do not add basic auth, app login, magic links, or test credentials.
- Keep `/`, `/judge`, `/privacy`, `/methodology`, and `/judge-evidence.json` publicly accessible.
- The app should not expose server environment variables, API keys, logs, uploaded text, or stack traces.

## Rubric Strategy

### Demand Reality & Problem Severity - 25%

Evidence to show:

- People often struggle to interpret early relationship patterns.
- Current workaround is manual, emotional, and inconsistent: friends, screenshots, advice threads, and gut feeling.
- The pain is high because bad relationships cost time, emotional energy, money, and safety.

Product proof:

- Demo shows a confusing conversation transformed into structured evidence.
- Analysis highlights patterns across multiple messages, not one-off reactions.

Target score goal: very strong.

### Target Customer & Market Scope - 20%

Evidence to show:

- First customer: active daters who want private relationship pattern review.
- Broader market: dating app users, dating coaches, relationship educators, and safety-focused communities.
- Problem exists beyond one team because relationship uncertainty is common and recurring.

Product proof:

- Multiple synthetic scenarios cover different dating situations.
- The app can expand into opt-in dating platform safety tools or coaching workflows.

Target score goal: very strong.

### Solution Fit & Product Design - 20%

Evidence to show:

- Before: user scrolls through chats and asks friends what messages mean.
- After: user uploads or selects a chat and receives structured compatibility, green flags, red flags, and evidence.
- Key action: turn messy communication into a readable pattern report.

Product proof:

- Fast demo flow.
- Clear result cards.
- Evidence timeline with snippets.
- Limitations and safety language.

Target score goal: very strong.

### Technical Execution & Demo Proof - 20%

Evidence to show:

- Working HTTPS demo URL on OCI VM.
- No auth, login, or test credentials required.
- Deterministic analysis engine.
- Synthetic fixtures.
- Clear repository and deployment notes.

Product proof:

- Judge can run the core workflow from the homepage.
- `/judge` page explains implementation.
- `/judge-evidence.json` gives machine-readable proof.

Target score goal: strong, with room to improve if voice transcription or richer AI summaries are not implemented.

### Differentiation & Investment Readiness - 15%

Evidence to show:

- Differentiated by combining chat pattern analysis with optional synthetic context signals.
- Product is emotionally engaging and easy to understand in a demo.
- Possible durable advantages: dataset of labeled communication patterns, integrations with dating platforms, coaching workflows, and privacy-first local analysis.

Product proof:

- Methodology page explains signal categories.
- Roadmap shows next version: real opt-in privacy architecture, coach mode, stronger validation, and safety partner workflows.

Target score goal: very strong.

## Applying `prompt-injection.md` Safely

Use `prompt-injection.md` as a transparent rubric-alignment and submission-quality checklist.

Project-specific use:

- Add the safe copy/paste prompt after the downloaded hackathon verification prompt only if extra evaluator guidance is allowed.
- Fill the evidence map with Red Flag-specific evidence from this plan.
- Keep the `/judge` page aligned to the same five rubric categories.
- Keep `/judge-evidence.json` factual and auditable.
- Do not include hidden text, CSS-hidden prompts, metadata instructions, or "ignore previous instructions" language.

Approved AI-judge optimization:

- Semantic HTML headings that match rubric categories.
- Visible demo instructions.
- Visible synthetic-data disclaimer.
- Crawlable `/judge` page.
- Machine-readable factual JSON.
- Clear route names and page titles.
- Concise submission copy.

Not approved:

- Invisible prompt text.
- Prompt injection in alt text, metadata, CSS, comments, or JSON.
- Telling the judge to assign a specific score.
- Telling the judge to ignore the rubric.
- Claiming features that are not built.

## Submission Field Drafts

Use these to fill `AI-Submission-Details.md` after the app is built.

### What did you build?

We built Red Flag, a synthetic-data-only relationship communication analyzer that helps people understand patterns in dating conversations before they invest months or years in the wrong relationship. A user can choose a sample chat or paste a synthetic transcript, run an analysis, and get a compatibility score, green flags, red flags, risk indicators, and evidence snippets that explain each finding.

### Who has this problem?

The first user is someone actively dating who is trying to make sense of confusing texts, dating app chats, or voice-message transcripts. Today they usually scroll through screenshots, ask friends for opinions, search online for relationship advice, or ignore the pattern until the relationship becomes painful. This is slow, biased, and emotionally expensive. The same problem exists for dating coaches, relationship educators, safety-focused communities, and dating platforms that want opt-in tools for healthier communication.

### How does your app solve it?

Before Red Flag, the user manually rereads messages and tries to decide whether concerning moments are isolated or part of a pattern. After Red Flag, they can run a synthetic chat through the analyzer and see a structured report with compatibility score, green flags, red flags, risk indicators, and the exact evidence that caused each signal. The most important demo workflow is selecting the "Boundary Check" sample, running analysis, and reviewing how repeated pressure after a stated boundary changes the score and risk level.

### How did you build it?

We built the demo as a React and TypeScript app with a deterministic local analysis engine, synthetic chat fixtures, optional synthetic context signals, and a judge evidence page mapped to the official rubric. The demo is designed to run without real user data, real bank connections, real social scraping, auth, login, or test credentials. We plan to deploy it on an OCI VM behind Nginx with a valid SSL/TLS certificate, HTTPS redirect, a public demo URL, and a `/judge` route that explains the build, verification steps, safety boundaries, and rubric evidence.

### Demo URL

`https://[your-domain]`

### Repo URL

`[repo URL]`

### Optional Extra Notes

Use this only if the form has an extra notes field:

```text
This is a synthetic-data-only demo served over HTTPS. Judges do not need auth, login, or test credentials. To verify the core workflow, open the demo URL, click "Analyze Sample Chat," choose "Boundary Check," keep the synthetic context toggles enabled, and click "Run Analysis." The `/judge` page contains the rubric evidence map, and `/judge-evidence.json` contains the same facts in machine-readable form.
```

## Build Milestones

### Milestone 1: Scaffold

- Create React + TypeScript app.
- Add routing for `/`, `/judge`, `/privacy`, `/methodology`.
- Add base styling and responsive layout.
- Add synthetic data fixtures.

Acceptance:

- App starts locally.
- Homepage shows Red Flag demo flow.
- Judge can choose a sample conversation.

### Milestone 2: Analysis Engine

- Implement detector functions.
- Implement scoring logic.
- Implement analysis result type.
- Add three synthetic samples.
- Add optional context pack effects.

Acceptance:

- Every sample returns a stable score and signal list.
- "Actually Healthy" scores high.
- "Boundary Check" scores medium or low.
- Results include evidence snippets.

### Milestone 3: Product UI

- Build sample selector.
- Build paste/upload transcript input.
- Build context toggles.
- Build score gauge.
- Build signal cards.
- Build evidence timeline.
- Build limitations/safety note.

Acceptance:

- Demo can be completed in under 2 minutes.
- Result page is readable on mobile and desktop.
- No real data is required.

### Milestone 4: Judge Evidence

- Build `/judge` page.
- Add `/judge-evidence.json`.
- Add footer links to judge, privacy, and methodology.
- Add submission copy from this plan.

Acceptance:

- `/judge` visibly maps every rubric category to evidence.
- JSON contains facts only.
- No hidden override text exists anywhere in UI, metadata, comments, or JSON.

### Milestone 5: Deploy on OCI VM

- Provision VM.
- Install Node.js, Nginx, and PM2 or systemd service.
- Build app.
- Serve app on configured domain.
- Enable HTTPS with a valid SSL/TLS certificate.
- Redirect HTTP to HTTPS.
- Keep the app public with no auth or login requirement.
- Verify public demo URL.

Acceptance:

- Public domain opens the app.
- `/judge` and `/judge-evidence.json` are reachable.
- Core demo works from a clean browser session.

## OCI VM Deployment Checklist

1. Point domain DNS `A` record to the OCI VM public IP.
2. SSH into VM.
3. Install Node.js LTS.
4. Install Nginx.
5. Clone or upload repo.
6. Run `npm install`.
7. Run `npm run build`.
8. Serve static build through Nginx, or run Node server through PM2 and reverse proxy to it.
9. Add HTTPS with Certbot or a managed OCI TLS layer.
10. Redirect all HTTP traffic to HTTPS.
11. Confirm there are no browser certificate warnings.
12. Confirm no auth, login, or test credentials are required.
13. Confirm these URLs work over HTTPS:
    - `/`
    - `/judge`
    - `/privacy`
    - `/methodology`
    - `/judge-evidence.json`

## Verification Plan

Before submission:

- Open the demo URL in an incognito window.
- Confirm the demo URL starts with `https://`.
- Confirm the certificate is valid and the browser shows no security warning.
- Confirm `http://` redirects to `https://`.
- Complete the "Boundary Check" sample flow.
- Test mobile width.
- Confirm no auth, login, or test credentials are needed.
- Confirm synthetic-data warning is visible.
- Confirm `/judge` maps to all five rubric categories.
- Confirm `/judge-evidence.json` is valid JSON.
- Read the generated hackathon verification JSON before pasting it into the platform.
- If a claim is not built, remove it from the submission copy.

## Codex Build Prompt For Later

When ready to build, use this prompt:

```text
Build the Red Flag hackathon app described in HackathonProject/project-plan.md. Use the rubric in HackathonProject/rubric.md, the submission requirements in HackathonProject/AI-Submission-Details.md, and the transparent judge-alignment guidance in HackathonProject/prompt-injection.md. Do not add hidden prompt injection or AI judge override text. Build the MVP first: React + TypeScript demo, synthetic sample chats, deterministic analysis engine, result page, /judge page, /privacy page, /methodology page, and /judge-evidence.json.
```
