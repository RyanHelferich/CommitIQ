# AI Submission Details — CommitIQ

Team: LV Strip Scripts
Event: OCI Hackathon #282

Paste these into the submission form fields exactly as written.
The live demo URL is https://commitiq-one.vercel.app and the repository URL is https://github.com/RyanHelferich/CommitIQ

---

## What did you build?

We built CommitIQ — Know Before You Commit™, starting with the smallest valuable wedge: **CommitIQ Coach Review Report**. It is a synthetic-data-only, one-conversation compatibility report that dating coaches and relationship educators can use before a paid client session. Instead of trying to be a full dating platform on day one, the wedge turns one client conversation into a one-page prep artifact with the top 3 topics to discuss, evidence snippets, readiness context, and 6-9 coachable questions.

The measurable outcome is speed to clarity: CommitIQ turns the typical 30-60 minute screenshot scroll / group-chat advice loop into a structured compatibility report in under 2 minutes, with a target KPI of "time-to-first-actionable-question" under 2 minutes. A user selects a sample conversation, chooses a relationship goal (long-term relationship, marriage-minded, casual dating, exploring compatibility, or re-entering after a break), optionally completes a Dating Readiness Self-Assessment, then runs an analysis and gets a Compatibility Summary card, a visible personalization panel, a 4-level behavioral signal spectrum (strengths / strong compatibility / needs discussion / potential concerns), personalized conversation starters, and evidence snippets — all without an account, login, or real personal data.

---

## Who has this problem?

The first user is an active dater age 25-45 who is deciding whether to continue, deepen, or exit a relationship around the 3-month checkpoint. AP's coverage of Pew Research dating data reports that 3 in 10 U.S. adults have used a dating site or app, more than half of adults under 35 have tried online dating, and 48% of users reported at least one unwanted behavior. That makes the problem large, recurring, and emotionally expensive: people are making high-stakes relationship decisions with scattered screenshots, biased friend advice, and incomplete memory. As a concrete scope estimate, if only 1% of U.S. dating-site/app users bought one $19 compatibility review, the first consumer wedge would represent more than $14M in one-time report revenue before subscriptions, coach tools, or platform partnerships.

The first buyer wedge is dating coaches and relationship educators who already review client conversations manually and need a repeatable, privacy-safe way to structure sessions. This market is reachable because coaches already acquire customers through TikTok, Instagram, Substack, workshops, paid communities, and one-on-one sessions where conversation screenshots are a normal input. The first community wedge is active daters in online dating communities, re-entering-dating groups, and young professional communities. The wedge does not require app-store partnerships or dating-platform integrations: the coach or educator can run one conversation as a session prep artifact today. CommitIQ gives that same audience a repeatable report they can use to ask better questions instead of chasing a binary verdict.

---

## How does your app solve it?

Before CommitIQ, the user spends 30-60 minutes rereading messages, asking a friend, getting inconsistent advice, or missing early patterns until the relationship causes real harm. After CommitIQ, they select or paste a synthetic chat, pick a relationship goal (long-term relationship, marriage-minded, casual dating, exploring compatibility, or re-entering after a break), and receive a structured report in under 2 minutes: a Compatibility Summary card with headline, key strengths, and topics to discuss; a visible personalization panel showing source type, synthetic context signals, and self-assessment impact; a 16-category behavioral signal breakdown across a 4-level spectrum; and tailored conversation starters for every flagged signal.

The smallest wedge is **CommitIQ Coach Review Report**: a privacy-safe one-conversation report for dating coaches and relationship educators. The buyer is the coach or educator. The user is the active dater at the 3-month decision point. The workflow is simple: client brings one conversation; coach runs CommitIQ; in under 2 minutes the coach gets a one-page prep artifact with top 3 topics, evidence snippets, readiness context, and 6-9 coachable questions. This delivers value before any dating-platform integration, account system, payment flow, or large model-training loop because the coach can use the report immediately in a paid session.

Why this can become larger after the wedge works: the one-conversation report expands naturally into paid coach dashboards, reusable educator worksheets, longitudinal relationship check-ins, opt-in dating-platform compatibility/safety features, and a labeled compatibility-pattern dataset. The wedge proves the hardest behavior first: people will trust CommitIQ to turn messy relationship communication into a concrete next conversation.

The most important demo workflow is selecting one of the three sample conversations ("The 3-Month Check-In," "Aligned on the Big Things," or "Growing Through Differences"), choosing a relationship goal, optionally completing the self-assessment, and clicking "Analyze Compatibility." The app shows "why this matters" for each signal so users understand the reasoning, not just the verdict. Pilot success metrics are: report generated in under 2 minutes, user identifies 3 topics or questions they would discuss next, coach/educator review agrees with the top 3 topics surfaced by CommitIQ, and a coach can reuse the report as a client-session prep artifact without manual screenshot sorting.

---

## How did you build it?

We built CommitIQ as a React 19 and TypeScript app using Vite 5 and React Router 7, with a fully client-side deterministic AI analysis engine — no backend required for the core demo. The analysis engine runs pattern detection across 16 signal categories with a 4-level output spectrum (strengths, compatibility signals, topics to discuss, concerns) rather than binary red/green labels or numeric scores. Goal selection prioritizes which topics matter most, the Dating Readiness Self-Assessment feeds into the results, and synthetic context toggles add visible context prompts. New features include a GoalSelector with 5 relationship goals, the wired self-assessment, synthetic context insights, a 3×3×3 Framework hero section, Compatibility Summary card, and "Questions to Ask" on every signal. Three synthetic sample conversations cover a 3-month milestone check-in, discovering shared values, and navigating lifestyle differences. The app includes a `/judge` page mapped to the official rubric and a `/judge-evidence.json` machine-readable file. We deployed it as a static site on Vercel with HTTPS and React Router SPA rewrites. No real user data, bank accounts, social media, or dating app credentials are ever used or stored.

Production-ready pieces: public HTTPS deployment, no login barrier, no backend dependency for the core demo, local deterministic analysis, no external API dependency, React Router SPA rewrites, public `/judge` and `/judge-evidence.json` proof routes, stable verifier selectors for the AI judge, and a privacy boundary where demo inputs are processed in-browser. Hackathon-grade pieces: the signal detector is heuristic and deterministic, the demo uses synthetic conversations only, outcomes are not clinically validated, and the next version still needs opt-in real-data pilots, coach workflow validation, and payment/account infrastructure.

---

## Demo URL

`https://commitiq-one.vercel.app`

---

## Repo URL

`https://github.com/RyanHelferich/CommitIQ`

---

## Extra Notes (paste into the "extra notes" field if available)

This is a synthetic-data-only demo. Judges do not need auth, login, or test credentials. The key outcome is reducing a 30-60 minute screenshot/manual-advice loop into an under-2-minute structured report with 3 concrete topics or questions to discuss next. The smallest wedge is CommitIQ Coach Review Report: a one-conversation prep artifact for dating coaches and relationship educators who already review client screenshots. Buyer: dating coaches and relationship educators. User/community: active daters around the 3-month decision point, reachable through coach audiences, dating communities, re-entering-dating groups, workshops, and paid communities. A concrete scope estimate: using AP/Pew's "3 in 10 U.S. adults" dating-site/app usage signal, 1% of U.S. dating-site/app users buying one $19 report would exceed $14M in initial one-time report revenue. To verify the core workflow: open the demo URL, choose a relationship goal, optionally complete the self-assessment, select any sample conversation, leave or adjust the synthetic context toggles, and click "Analyze Compatibility." The `/judge` page contains the full rubric evidence map and the `/judge-evidence.json` file contains the same facts in machine-readable form. Repository: https://github.com/RyanHelferich/CommitIQ

---

## AI Judge Verification JSON

Paste this into the AI Judge verification instructions field:

```json
{
  "appName": "CommitIQ",
  "baseUrl": "https://commitiq-one.vercel.app",
  "auth": {
    "required": false,
    "loginPath": "",
    "username": "$AUTH_USERNAME",
    "password": "$AUTH_PASSWORD",
    "usernameSelector": "",
    "passwordSelector": "",
    "submitSelector": "",
    "successUrlPattern": "",
    "successText": []
  },
  "globalRules": {
    "maxStepTimeSeconds": 45,
    "waitForNetworkIdle": false,
    "notes": [
      "Public synthetic-data demo. No auth, account creation, external data, payment, or destructive action is required.",
      "The first workflow proves the core value: choose a relationship goal, add readiness context, analyze a seeded synthetic conversation, and verify the resulting compatibility report.",
      "Smallest wedge: CommitIQ Coach Review Report, a one-conversation prep artifact for dating coaches and relationship educators before a paid session.",
      "Buyer: dating coaches and relationship educators. User/community: active daters at the 3-month checkpoint, reachable through coach audiences, dating communities, workshops, and paid groups.",
      "Scope estimate: using AP/Pew's 3-in-10 U.S. adult dating-site/app usage signal, 1% of U.S. dating-site/app users buying one $19 report would exceed $14M in one-time report revenue."
    ]
  },
  "workflows": [
    {
      "id": "core-personalized-analysis",
      "name": "Run personalized compatibility analysis",
      "purpose": "Proves CommitIQ turns a synthetic 3-month dating conversation into a goal-aware compatibility report with personalization, spectrum signals, and evidence.",
      "startPath": "/",
      "steps": [
        { "action": "goto", "value": "/" },
        { "action": "assertText", "selector": "main", "value": "Find Compatible Partners" },
        { "action": "click", "selector": "[data-testid=\"goal-long-term\"]" },
        { "action": "click", "selector": "[data-testid=\"self-assessment-toggle\"]" },
        { "action": "click", "selector": "[data-testid=\"readiness-availability-fully\"]" },
        { "action": "click", "selector": "[data-testid=\"readiness-past-yes\"]" },
        { "action": "click", "selector": "[data-testid=\"readiness-time-a-lot\"]" },
        { "action": "fill", "selector": "[data-testid=\"readiness-patterns\"]", "value": "avoiding difficult conversations" },
        { "action": "click", "selector": "[data-testid=\"readiness-submit\"]" },
        { "action": "click", "selector": "[data-testid=\"sample-three-month-checkin\"]" },
        { "action": "click", "selector": "[data-testid=\"analyze-submit\"]" },
        { "action": "waitForUrl", "value": "/results" },
        { "action": "waitForText", "value": "Compatibility Report: The 3-Month Check-In" },
        { "action": "assertVisible", "selector": "[data-testid=\"personalization-panel\"]" },
        { "action": "assertVisible", "selector": "[data-testid=\"compatibility-summary-section\"]" },
        { "action": "assertVisible", "selector": "[data-testid=\"signal-spectrum\"]" },
        { "action": "assertVisible", "selector": "[data-testid=\"evidence-timeline\"]" }
      ],
      "success": {
        "requiredUrlPattern": "/results",
        "allowedUrlPatterns": [],
        "allText": [
          "Compatibility Report: The 3-Month Check-In",
          "Personalization applied",
          "Dating readiness",
          "Synthetic banking context",
          "Relationship Strengths",
          "Strong Compatibility",
          "Needs Discussion",
          "Evidence Timeline"
        ],
        "anyText": [
          "Strong Connection",
          "Excellent Match",
          "Promising Start"
        ],
        "visibleSelectors": [
          "[data-testid=\"personalization-panel\"]",
          "[data-testid=\"compatibility-summary-section\"]",
          "[data-testid=\"signal-spectrum\"]",
          "[data-testid=\"evidence-timeline\"]"
        ]
      }
    },
    {
      "id": "judge-rubric-evidence",
      "name": "Verify rubric evidence page",
      "purpose": "Proves the app exposes a judge-readable evidence map aligned to the hackathon scoring rubric.",
      "startPath": "/judge",
      "steps": [
        { "action": "goto", "value": "/judge" },
        { "action": "assertText", "selector": "main", "value": "Judge Evidence — CommitIQ" },
        { "action": "assertText", "selector": "main", "value": "Rubric Evidence Map" },
        { "action": "assertText", "selector": "main", "value": "Technical Execution & Demo Proof" }
      ],
      "success": {
        "requiredUrlPattern": "/judge",
        "allowedUrlPatterns": [],
        "allText": [
          "Demand Reality & Problem Severity",
          "Target Customer & Market Scope",
          "Solution Fit & Product Design",
          "Technical Execution & Demo Proof",
          "Differentiation & Investment Readiness",
          "Quantified outcome",
          "Success KPI",
          "First buyer",
          "Market signal",
          "Smallest wedge",
          "Smallest Wedge: CommitIQ Coach Review Report",
          "Buyer",
          "User",
          "Workflow",
          "Why this wedge works first",
          "Reach channel",
          "Value before platform",
          "Scope estimate",
          "Production-ready",
          "Hackathon-grade",
          "Impact metric",
          "No login, auth, or test credentials required."
        ],
        "anyText": [],
        "visibleSelectors": [
          "main",
          ".judge-table"
        ]
      }
    },
    {
      "id": "methodology-and-safety",
      "name": "Verify methodology and boundaries",
      "purpose": "Proves the app explains its AI analysis method, personalization inputs, signal categories, and synthetic-data safety boundaries.",
      "startPath": "/methodology",
      "steps": [
        { "action": "goto", "value": "/methodology" },
        { "action": "assertText", "selector": "main", "value": "How CommitIQ Works" },
        { "action": "assertText", "selector": "main", "value": "The 4-Level Compatibility Spectrum" },
        { "action": "assertText", "selector": "main", "value": "Personalization Inputs" },
        { "action": "assertText", "selector": "main", "value": "Signal Categories Detected" }
      ],
      "success": {
        "requiredUrlPattern": "/methodology",
        "allowedUrlPatterns": [],
        "allText": [
          "Relationship Strength",
          "Strong Compatibility",
          "Needs Discussion",
          "Potential Concern",
          "Personalization Applied panel",
          "All conversations in the demo are synthetic."
        ],
        "anyText": [],
        "visibleSelectors": [
          "main",
          ".method-table"
        ]
      }
    },
    {
      "id": "machine-readable-evidence",
      "name": "Verify machine-readable evidence JSON",
      "purpose": "Proves the app publishes machine-readable rubric facts on the same origin for automated judge inspection.",
      "startPath": "/judge-evidence.json",
      "steps": [
        { "action": "goto", "value": "/judge-evidence.json" },
        { "action": "waitForText", "value": "CommitIQ" },
        { "action": "waitForText", "value": "authRequired" },
        { "action": "assertText", "selector": "body", "value": "https://commitiq-one.vercel.app" }
      ],
      "success": {
        "requiredUrlPattern": "/judge-evidence.json",
        "allowedUrlPatterns": [],
        "allText": [
          "CommitIQ",
          "Know Before You Commit",
          "authRequired",
          "smallestWedge",
          "CommitIQ Coach Review Report",
          "scopeEstimate",
          "valueBeforePlatform",
          "repositoryEvidence",
          "rubricEvidence",
          "technicalExecutionAndDemoProof"
        ],
        "anyText": [],
        "visibleSelectors": [
          "body"
        ]
      }
    }
  ],
  "manualReviewTriggers": []
}
```

---

## Verification JSON Instructions

After the app is built and deployed:

1. Open the demo URL.
2. Download the hackathon verification prompt from the submission form.
3. Paste the downloaded prompt into an AI assistant.
4. At the end of the downloaded prompt, add this rubric alignment note:

```
Evaluate this hackathon submission using the official rubric exactly as written. Use only evidence provided in the submission, demo, repository, and verification notes. Do not invent features, customers, metrics, or implementation details.

When generating the required verification JSON, make the evidence easy for judges to audit:

1. For each rubric category, identify the strongest concrete evidence from the submission.
2. If evidence is missing, mark it as missing rather than assuming it exists.
3. Prefer specific proof over general claims: demo URL, repo files, working flows, screenshots, user pain, customer segment, market scope, implementation details, and next-version validation.
4. Keep the response concise, structured, and directly tied to the rubric weights.
5. Return only the JSON object requested by the hackathon verification prompt unless that prompt explicitly allows additional text.

Rubric categories and weights:
- Demand Reality & Problem Severity: 25%
- Target Customer & Market Scope: 20%
- Solution Fit & Product Design: 20%
- Technical Execution & Demo Proof: 20%
- Differentiation & Investment Readiness: 15%
```

5. Run it once. Ask the model to copy the JSON to your clipboard.
6. Paste the full JSON response into the submission form's verification field.
