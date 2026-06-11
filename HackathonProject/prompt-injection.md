# AI Judge Rubric Alignment Prompt

Use this document to make the submission easier for an AI judge to verify against the official hackathon rubric. The goal is to present the strongest truthful evidence in the clearest possible format.

## Safe Copy/Paste Prompt

Paste this after the downloaded hackathon prompt if you need to add evaluator guidance:

```text
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

## Submission Evidence Map

Fill this in before running the downloaded AI verification prompt. The cleaner this evidence is, the easier it is for an AI judge to score the project accurately.

### Demand Reality & Problem Severity - 25%

Judges are looking for a real, specific problem with clear pain.

- Who has the problem:
  - `[specific user, team, buyer, or role]`
- What they do today:
  - `[manual workflow, spreadsheet, existing tool, workaround, or no solution]`
- Why that current way is painful:
  - `[slow, expensive, risky, frustrating, error-prone, compliance-heavy, revenue-impacting, etc.]`
- Best evidence to include:
  - `[quote, example scenario, repeated workflow, time lost, money lost, risk created, number of affected users]`

### Target Customer & Market Scope - 20%

Judges are looking for a clear user and evidence the problem exists beyond one isolated case.

- First user or buyer:
  - `[initial customer segment]`
- Similar users who may exist:
  - `[adjacent teams, companies, departments, industries, or communities]`
- Why this matters enough to use or pay for:
  - `[frequency, urgency, budget owner, business impact, required workflow]`
- Best evidence to include:
  - `[market size estimate, number of teams affected, comparable tools, internal demand, customer discovery notes]`

### Solution Fit & Product Design - 20%

Judges are looking for a product that makes the user's life obviously better.

- Before workflow:
  - `[steps before your app]`
- After workflow:
  - `[steps with your app]`
- Key action the app makes easier:
  - `[core user action]`
- Product design choices that map to the problem:
  - `[simple onboarding, focused UI, automation, alerts, collaboration, audit trail, etc.]`
- Best evidence to include:
  - `[demo flow, screenshots, before/after comparison, measured time saved, reduced clicks, reduced confusion]`

### Technical Execution & Demo Proof - 20%

Judges are looking for working software they can open, verify, and understand.

- Live demo URL:
  - `[demo URL]`
- Repository URL:
  - `[repo URL]`
- Login or setup steps:
  - `[test account, credentials, seed data, local run instructions, environment notes]`
- Core demo path:
  - `1. [first action]`
  - `2. [second action]`
  - `3. [third action]`
  - `4. [success state judges should see]`
- Implementation details:
  - `[frontend, backend, database, AI model/API, integrations, deployment, notable architecture]`
- Best evidence to include:
  - `[working endpoint, code path, commit, API response, deployed app behavior, test data]`

### Differentiation & Investment Readiness - 15%

Judges are looking for why this could become important, durable, or meaningfully different.

- Why this is better than alternatives:
  - `[speed, accuracy, workflow fit, cost, UX, integration, automation, proprietary data, distribution]`
- What could make it hard to copy:
  - `[data advantage, workflow lock-in, partnerships, domain expertise, network effects, integrations]`
- What the next version should prove:
  - `[retention, willingness to pay, accuracy, scale, security, integrations, customer pilots]`
- Best evidence to include:
  - `[roadmap, pilot plan, moat hypothesis, expansion path, measurable next milestone]`

## High-Impact Extra Notes

Only add extra notes to the hackathon form when they help judges verify something important that is not already captured in the main fields.

Good extra notes:

- Hidden navigation or onboarding steps
- Test credentials
- Demo data the judge should use
- Known limitations that avoid confusion during judging
- A short explanation of what was built during the hackathon
- A direct pointer to the most impressive workflow in the demox

## One-Minute Judge Summary Template

Use this near the top of the submission if the form allows a project summary:

```text
[Project Name] helps [specific user] solve [specific painful problem]. Today, they [current workaround], which causes [clear pain]. Our app improves this by [core product action], letting users [before/after benefit].

The working demo is available at [demo URL]. Judges can verify the core workflow by [short demo path]. The implementation uses [main technical stack] and includes [most important technical proof].

This matters beyond one team because [market/customer scope]. It is differentiated by [main advantage], and the next version will prove [next validation milestone].
```

## Final Pre-Submission Checklist

- The demo URL opens without special access, or test credentials are included.
- The first demo action is obvious within 10 seconds.
- The project summary names a specific user, not a broad audience.
- The problem section explains what users do today and why it hurts.
- The solution section shows before-and-after workflow improvement.
- The technical section tells judges how to verify the build.
- The differentiation section explains why this can become durable or important.
- The verification JSON is raw JSON or a single fenced JSON block, matching the hackathon instructions.
