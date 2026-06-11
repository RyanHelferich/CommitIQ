import { useState } from "react";
import type { SelfAssessmentAnswers } from "../engine/types";

type Props = {
  onComplete: (answers: SelfAssessmentAnswers) => void;
};

const AVAILABILITY_OPTIONS = [
  { value: "fully", label: "Fully available", desc: "I'm emotionally ready and excited to invest in someone" },
  { value: "mostly", label: "Mostly available", desc: "A few things to work through, but genuinely ready" },
  { value: "somewhat", label: "Somewhat available", desc: "Still navigating some things, but open" },
  { value: "not-yet", label: "Not quite yet", desc: "I want to be honest with myself — I need more time" },
] as const;

const PAST_OPTIONS = [
  { value: "yes", label: "Yes, fully", desc: "Past relationships feel resolved" },
  { value: "mostly", label: "Mostly", desc: "I've processed most of it" },
  { value: "still-processing", label: "Still processing", desc: "I'm working through it" },
] as const;

const TIME_OPTIONS = [
  { value: "a-lot", label: "A lot", desc: "I'm ready to fully invest" },
  { value: "moderate", label: "Moderate", desc: "Balanced with other priorities" },
  { value: "limited", label: "Limited right now", desc: "Life is busy — being honest about that" },
] as const;

export function SelfAssessment({ onComplete }: Props) {
  const [open, setOpen] = useState(false);
  const [availability, setAvailability] = useState<SelfAssessmentAnswers["emotionalAvailability"] | null>(null);
  const [pastRelationships, setPastRelationships] = useState<SelfAssessmentAnswers["overPastRelationships"] | null>(null);
  const [time, setTime] = useState<SelfAssessmentAnswers["timeInvestment"] | null>(null);
  const [patterns, setPatterns] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!availability || !pastRelationships || !time) return;
    const answers: SelfAssessmentAnswers = {
      emotionalAvailability: availability,
      overPastRelationships: pastRelationships,
      timeInvestment: time,
      patternsToBreak: patterns,
    };
    onComplete(answers);
    setSubmitted(true);
    setOpen(false);
  }

  const canSubmit = availability && pastRelationships && time;

  return (
    <div className="self-assess-wrap">
      <button className="self-assess-toggle" data-testid="self-assessment-toggle" onClick={() => setOpen((o) => !o)}>
        <span className="self-assess-icon">🪞</span>
        <span className="self-assess-title">
          {submitted ? "Self-Assessment Complete ✓" : "Dating Readiness Self-Assessment"}
          <span className="self-assess-sub">
            {submitted ? "Your answers have been factored in" : "Optional — helps tailor your results"}
          </span>
        </span>
        <span className="self-assess-chevron">{open ? "▲" : "▼"}</span>
      </button>

      {open && !submitted && (
        <div className="self-assess-body">
          <p className="self-assess-intro">
            Before evaluating a partner, it helps to evaluate yourself. These answers are private and only used to personalize your CommitIQ results.
          </p>

          <div className="assess-section">
            <h4 className="assess-q">How emotionally available are you right now?</h4>
            <div className="assess-options">
              {AVAILABILITY_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  className={`assess-btn ${availability === o.value ? "selected" : ""}`}
                  data-testid={`readiness-availability-${o.value}`}
                  onClick={() => setAvailability(o.value)}
                >
                  <span className="assess-opt-label">{o.label}</span>
                  <span className="assess-opt-desc">{o.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="assess-section">
            <h4 className="assess-q">Have you moved on from past relationships?</h4>
            <div className="assess-options">
              {PAST_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  className={`assess-btn ${pastRelationships === o.value ? "selected" : ""}`}
                  data-testid={`readiness-past-${o.value}`}
                  onClick={() => setPastRelationships(o.value)}
                >
                  <span className="assess-opt-label">{o.label}</span>
                  <span className="assess-opt-desc">{o.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="assess-section">
            <h4 className="assess-q">How much time can you invest in a relationship right now?</h4>
            <div className="assess-options">
              {TIME_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  className={`assess-btn ${time === o.value ? "selected" : ""}`}
                  data-testid={`readiness-time-${o.value}`}
                  onClick={() => setTime(o.value)}
                >
                  <span className="assess-opt-label">{o.label}</span>
                  <span className="assess-opt-desc">{o.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="assess-section">
            <h4 className="assess-q">Is there a pattern from past relationships you're working to break? <span className="muted">(optional)</span></h4>
            <textarea
              className="assess-textarea"
              data-testid="readiness-patterns"
              placeholder="e.g. choosing partners who aren't emotionally available, avoiding difficult conversations..."
              value={patterns}
              onChange={(e) => setPatterns(e.target.value)}
              rows={3}
            />
          </div>

          <button className="assess-submit" data-testid="readiness-submit" disabled={!canSubmit} onClick={handleSubmit}>
            Save My Assessment
          </button>
        </div>
      )}
    </div>
  );
}
