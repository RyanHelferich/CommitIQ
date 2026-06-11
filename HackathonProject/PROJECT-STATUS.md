# CommitIQ — Project Status

**Tagline:** Know Before You Commit™
**Team:** LV Strip Scripts
**Event:** OCI Hackathon #282
**Live demo:** https://commitiq-one.vercel.app/
**Deployment platform:** Vercel (static SPA)

---

## What Is Built and Live

The app is fully built and deployed. All five pages are live and publicly accessible at the Vercel URL.

### Tech Stack

- React 19 + TypeScript + Vite 5
- React Router 7 (SPA, client-side routing)
- Plain CSS with Navy/Teal/Gold design system (light mode)
- Static site on Vercel with `vercel.json` SPA rewrites
- No backend, no auth, no login required

### Pages

| Route                  | Page                             | Status                   |
| ---------------------- | -------------------------------- | ------------------------ |
| `/`                    | Home / DemoPage                  | Live                     |
| `/results`             | Results                          | Live                     |
| `/methodology`         | Methodology                      | Live                     |
| `/privacy`             | Privacy                          | Live                     |
| `/judge`               | Judge evidence                   | Live (hidden, crawlable) |
| `/judge-evidence.json` | Machine-readable rubric evidence | Live                     |

### Analysis Engine

- 16-category behavioral signal detector
- 4-level output spectrum: Strengths / Compatibility Signals / Topics to Discuss / Concerns
- Goal-aware topic prioritization
- Dating Readiness Self-Assessment and synthetic context toggles are wired into the result
- Personalization panel shows source type, context signals, and readiness impact
- Replaced the original numeric 0–100 score and binary red/green flags with a Compatibility Summary card (headline + strengths + topics to discuss)
- Deterministic, fully client-side — no API dependency for the core demo

### Features Built

- **GoalSelector** — 5 relationship goals: Long-Term Relationship, Marriage-Minded, Casual Dating, Exploring Compatibility, Re-entering After a Break
- **Dating Readiness Self-Assessment** — built into the demo flow and reflected in results
- **Synthetic context toggles** — banking, social time, public profile, and search-category assumptions reflected in results
- **Personalization panel** — makes source/context/readiness effects visible to judges
- **3×3×3 Framework hero** — visible on the home page
- **Compatibility Summary card** — replaces the numeric score gauge
- **"Questions to Ask"** — appears on every detected signal card
- **3 synthetic sample conversations:**
  - The 3-Month Check-In
  - Aligned on the Big Things
  - Growing Through Differences

### Judge Infrastructure

- `/judge` page maps the build to all five rubric categories
- `/judge-evidence.json` provides machine-readable facts (no prompt injection)
- `sitemap.xml` and `robots.txt` included for crawlability
- `STAGE-SCRIPT.md` exists for the 8-minute stage presentation

---

## What Was Removed from the Original Spec

These features from the original `project-plan.md` were intentionally replaced or dropped:

| Original                                                                 | Replaced With                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Numeric compatibility score (0–100)                                      | Compatibility Summary card (headline + strengths + topics to discuss)          |
| Binary red/green flag labels                                             | 4-level spectrum (Strengths / Compatibility / Discuss / Concerns)              |
| "Boundary Check" / "Too Much Too Soon" / "Actually Healthy" sample names | The 3-Month Check-In / Aligned on the Big Things / Growing Through Differences |
| "Red Flag" brand throughout                                              | CommitIQ — Know Before You Commit™ throughout                                  |
| OCI VM / Nginx / Certbot deployment                                      | Vercel static deployment (simpler, HTTPS automatic)                            |

---

## Current Submission Status

- CSS class mismatches resolved.
- Demo URL in submission materials and `public/judge-evidence.json` points to `https://commitiq-one.vercel.app`.
- README replaced with CommitIQ-specific setup and verification instructions.
- Package name updated from `red-flag` to `commitiq`.

---

## What Would Come Next (Post-Hackathon Roadmap)

If this were a real product continuing after the hackathon, the next priorities would be:

### Validation (Next 30 Days)

- Recruit 50 beta users from dating communities (Reddit, Hinge/Bumble user groups)
- Measure: do users complete the full analysis flow? Do they return?
- Validate willingness to pay via a "pro report" gated feature
- Test whether the GoalSelector meaningfully changes which signals users care about

### Coach Mode (Next 60 Days)

- Allow a dating coach to save and compare analyses across multiple client conversations (all still synthetic or opt-in)
- Add annotation layer: coach can tag signals and add notes
- Exportable report (PDF-style print view or JSON export)

### Privacy-First Real-Data Architecture

- Design opt-in real conversation input with local-only processing (never leaves the device)
- No server storage for the free tier
- Privacy audit before any opt-in real data path ships

### Model Improvement

- Replace deterministic keyword matching with a lightweight fine-tuned classifier trained on labeled synthetic relationship communication patterns
- Build the labeled pattern dataset from beta user interactions (opt-in)
- Validate against relationship communication frameworks from behavioral psychology literature

### Platform Integrations

- Pilot conversation with one dating app (Hinge, Bumble, or Feeld) for an opt-in in-app safety feature
- Explore coach-facing API for third-party relationship coaching platforms

### Moat Hypothesis

The durable advantage is the labeled communication pattern dataset that accumulates with usage. Privacy-first local processing is a design choice cloud competitors cannot easily replicate. Coach-mode workflow lock-in and potential platform partnerships create distribution leverage.

---

## Submission Checklist

- [x] App built and deployed at HTTPS Vercel URL
- [x] No auth, login, or test credentials required
- [x] `/judge` page covers all five rubric categories
- [x] `/judge-evidence.json` is valid JSON and publicly accessible
- [x] sitemap.xml and robots.txt included
- [x] `AI-Submission-Details.md` updated with CommitIQ branding
- [x] `STAGE-SCRIPT.md` exists for 8-minute presentation
- [x] CSS class name mismatches resolved
- [x] `demoUrl` in `judge-evidence.json` updated to current demo domain
- [x] README and package metadata updated for CommitIQ
- [ ] Repo URL filled in `AI-Submission-Details.md`
- [ ] Verification JSON generated and pasted into submission form
