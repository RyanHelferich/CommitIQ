# CommitIQ — 8-Minute Stage Presentation Script

**Team:** LV Strip Scripts
**Event:** OCI Hackathon #282
**Product:** CommitIQ — Know Before You Commit™

---

> **Notes for presenter:**
>
> - Total target: 8 minutes. Pacing guide below.
> - Live demo is at https://commitiq-one.vercel.app — have it open on a second screen before you start.
> - Bold text = emphasis. Parenthetical = stage direction, do not read aloud.
> - Practice once through at your own pace before going live.
> - When you get to the demo: select "The 3-Month Check-In" sample, choose "Long-term relationship" as the goal, and click "Analyze Compatibility."

---

## MINUTE 0:00–0:45 — The Hook

_(Walk to center stage. Pause before speaking.)_

"Raise your hand if you've ever been three months into dating someone and thought — okay, is this actually going somewhere? Is this what I think it is? Or am I missing something?"

_(Pause, let the hands go up.)_

"Now keep it up if you've ever sent a screenshot to a friend asking 'does this seem weird to you?' — and you already knew, even as you hit send, that your friend was going to tell you exactly what you wanted to hear."

_(Pause again.)_

"That moment — that gap between what you're experiencing and what you can actually see clearly — that's what CommitIQ is built for."

---

## MINUTE 0:45–2:00 — The Problem

"Here's the reality. People spend **months, sometimes years** in relationships that weren't right for them because the early signals are almost impossible to read when you're inside the situation.

Love bombing looks like someone who really cares. Boundary pushing looks like someone who's passionate. Different communication styles look like interesting differences — until they become daily friction.

The problem is not that people are naive. The problem is that **patterns are invisible when you're looking at one message at a time**. You need the full picture.

So what do people do today? They screenshot conversations. They vent to friends who are biased and only have half the story. They search Reddit at midnight. Or they just — ignore the signals — until the relationship becomes painful.

There's no structured, private tool for this. Nothing that takes a real conversation, looks across the whole thing, and says: here is what I see. Here is what it means. Here's what to ask.

Until now."

---

## MINUTE 2:00–3:00 — The Product Reveal

"We built **CommitIQ**. Tagline: _Know Before You Commit™_.

CommitIQ is a relationship compatibility analyzer. You choose a conversation, set your relationship goal, and in seconds you get back a **Compatibility Summary** — not a score, not a verdict, but a clear picture. What's working. What needs a real conversation. And the exact questions to ask to have it.

Not 'this seems concerning.' **This specific pattern, at this specific moment, and here's how to bring it up.**

Let me show you."

_(Open demo on screen at https://commitiq-one.vercel.app)_

---

## MINUTE 3:00–5:00 — Live Demo

_(Walk through the demo. Narrate as you click.)_

"I'm on the CommitIQ homepage. No login. No account. The app runs entirely in your browser — nothing goes anywhere.

You'll notice the first question it asks is: **what are you looking for?** Long-term relationship, marriage-minded, casual dating, re-entering after a break. The entire analysis adjusts to that goal. That's a fundamental design choice — compatibility looks different depending on what you're building toward.

I'm going to select **'Long-term relationship'** — and then I'll pick the sample conversation called **'The 3-Month Check-In.'** This is a realistic scenario: Jordan and Alex, three months in, having their first real conversation about finances, family, and the future.

_(Select the goal, click the sample card.)_

I'll leave the synthetic context signals enabled — these add layered signals like spending patterns, social app time, profile signals — all synthetic demo data.

And I click **Analyze Compatibility.**

_(Click the button. Pause through the analysis animation.)_

Here's what we get.

The Compatibility Summary says: **'Strong Foundation With Real Conversations Ahead.'** Not a number. A headline that actually means something.

On the left — Relationship Strengths. Boundary respect. Accountability. Repair language. These are the behaviors that hold a relationship together over time.

On the right — Topics to Discuss. Financial transparency is starting to surface. Life logistics — where they'll live. These aren't red flags. They're the conversations they need to have.

And here's what I love most — every signal has a **'Questions to Ask'** section. Not 'beware of this.' **The actual conversation starter you can use this week.**

_(Click a signal card to expand it, show the questions.)_

And the Evidence Timeline maps every signal back to the exact message that triggered it. Not a vague summary. **The receipt.**

No login. No signup. A judge — or anyone — can run this in under two minutes."

---

## MINUTE 5:00–6:00 — Who It's For & Why It Matters

"The first person who uses this is someone actively dating — in that three-month window where you have real data and you're trying to figure out if this is worth committing to.

We call it the **3×3×3 rule**: after three months of dating, three serious conversations, and three shared life moments, patterns emerge. CommitIQ is built for exactly that moment.

But it doesn't stop there.

Dating coaches use it to review client conversations. Relationship educators use synthetic scenarios for teaching. Safety-focused communities use it to help people recognize manipulation patterns before they escalate. And dating platforms — think Hinge, Bumble — this is a natural opt-in compatibility feature.

Relationship uncertainty affects hundreds of millions of people. The tools today are biased friends, Reddit threads, and Instagram advice. There's nothing structured, private, or evidence-based.

**This is a real problem. It is large. It is recurring. And it is unserved.**"

---

## MINUTE 6:00–7:00 — How We Built It

"Under the hood: React 19, TypeScript, Vite. Fully client-side. The analysis engine runs in your browser — **no data leaves your device**. No backend. No AI API call required for the core demo.

We built a deterministic pattern detection engine across **sixteen signal categories** — organized into four levels: relationship strengths, strong compatibility signals, topics that need discussion, and potential concerns. That's a fundamental difference from other tools — we don't just tell you what's wrong. We show you the full picture.

The GoalSelector prioritizes the analysis for your relationship goal. The Dating Readiness Self-Assessment lets you check in with yourself before you evaluate someone else, and it appears in the final report. The synthetic context toggles are also visible in the results, so judges can see exactly what changed. Every signal card has tailored conversation starters.

It's deployed on Vercel behind HTTPS. Every route is public — no credentials needed.

There's a `/judge` page that maps this product directly to the rubric. And a `/judge-evidence.json` file with machine-readable facts about everything we built.

Deterministic. Auditable. Transparent."

---

## MINUTE 7:00–7:45 — Vision & Differentiation

"What makes this different from anything else out there?

First: **privacy**. Your conversation never leaves your browser. Fundamental design choice, not an afterthought.

Second: **nuance over verdicts**. We replaced binary red/green labels with a four-level compatibility spectrum. Relationships aren't pass/fail — and neither is our analysis.

Third: **goal-aware analysis**. Compatibility means something different if you're looking for a life partner versus keeping things casual. CommitIQ adapts.

Fourth: **the data moat**. As this product grows, it generates labeled relationship compatibility pattern data. That dataset is the foundation for a model that gets better over time.

The next version validates willingness to pay with fifty beta users, launches a coach mode for professionals, and explores partnerships with dating platforms as an opt-in compatibility layer.

This is not just a hackathon demo. This is a starting point for something real."

---

## MINUTE 7:45–8:00 — Close

"Everyone in this room has been in a relationship — or helped a friend through one. Everyone here has had that moment of 'is this okay? Should I keep going? Am I missing something?'

CommitIQ gives people a clear-eyed second opinion. Private. Fast. Built on patterns, not feelings. Focused on better conversations — not verdicts.

We are **LV Strip Scripts**. This is **CommitIQ**. Know Before You Commit.

Thank you."

_(Hold for applause. Smile. Stay on stage for any Q&A.)_

---

## Q&A Prep — Common Questions

**"How do you handle real data privacy?"**

> The demo runs entirely in the browser. Nothing is transmitted. In a production version, we'd design for local processing first, opt-in consent, and zero server storage as the default. Privacy-first local analysis is actually a key differentiator against cloud-based competitors.

**"How accurate is the detection engine?"**

> The demo engine is deterministic pattern matching — designed to be reliable and auditable for a hackathon. A production system would validate against real behavioral psychology frameworks and professional review, and we'd measure accuracy against relationship outcome data with consenting beta users.

**"There's no numeric score — isn't that less useful?"**

> Actually, we found the opposite. A score of 67 out of 100 tells you almost nothing actionable. "Strong foundation, three conversations to have" tells you exactly where to focus. The summary plus conversation starters is more useful than a number.

**"Who would pay for this?"**

> Dating coaches pay for client tools today. Dating platforms pay for safety and retention features. Individual users have shown willingness to pay for privacy tools and structured self-improvement apps. We'd validate all three with fifty beta users in the next phase.

**"What's the moat?"**

> The labeled compatibility pattern dataset. Privacy-first local architecture that cloud competitors can't easily replicate. And potential platform partnerships that create distribution lock-in.

**"What's next?"**

> Fifty beta users, opt-in real data with a privacy-first architecture, coach mode, and a partnership pilot with one dating platform.
