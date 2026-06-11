# CommitIQ

Know Before You Commit.

CommitIQ is a synthetic-data-only relationship compatibility analyzer for the OCI Hackathon. It helps active daters review a conversation at the 3-month decision point, understand strengths and topics to discuss, and leave with concrete questions rather than a vague verdict.

## Demo Path

1. Open the deployed app.
2. Select a relationship goal.
3. Optionally complete the Dating Readiness Self-Assessment.
4. Choose a synthetic sample conversation.
5. Leave or adjust the synthetic context toggles.
6. Click **Analyze Compatibility**.
7. Review the Compatibility Summary, personalization panel, spectrum signals, questions to ask, and evidence timeline.

No login, account, backend, or credentials are required.

## What Is Built

- React 19, TypeScript, Vite 5, React Router 7
- Static SPA deployed on Vercel with route rewrites
- Local deterministic AI-style pattern analysis with 16 signal categories
- 4-level compatibility spectrum: strengths, compatibility, discuss, concerns
- Goal-aware topic prioritization
- Dating Readiness Self-Assessment that affects the result
- Synthetic context toggles that affect the result
- `/judge` rubric evidence page and `/judge-evidence.json` machine-readable proof

## Privacy Boundary

The demo uses synthetic conversations. Pasted transcripts are processed in-browser by local JavaScript and are not transmitted or stored by the app. CommitIQ does not connect to bank accounts, social platforms, dating apps, or external data sources.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run verify
```
