import { useState } from "react";
import type { Signal } from "../engine/types";

type Props = { signal: Signal };

const SPECTRUM = {
  strength:      { icon: "♥", label: "Relationship Strength", cls: "sig-strength" },
  compatibility: { icon: "✓", label: "Strong Compatibility",  cls: "sig-compat"   },
  discuss:       { icon: "●", label: "Needs Discussion",      cls: "sig-discuss"  },
  concern:       { icon: "⚑", label: "Potential Concern",     cls: "sig-concern"  },
};

export function SignalCard({ signal }: Props) {
  const [open, setOpen] = useState(false);
  const spec = SPECTRUM[signal.level];

  return (
    <div className={`signal-card ${spec.cls}`}>
      <div className="signal-header" onClick={() => setOpen((o) => !o)}>
        <span className="signal-icon">{spec.icon}</span>
        <div className="signal-header-text">
          <span className="signal-level-label">{spec.label}</span>
          <span className="signal-label">{signal.label}</span>
        </div>
        <span className="signal-chevron">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="signal-body">
          <p className="signal-description">{signal.description}</p>
          {signal.evidenceSnippet && (
            <blockquote className="signal-quote">"{signal.evidenceSnippet}"</blockquote>
          )}
          <p className="signal-why"><strong>Why it matters:</strong> {signal.whyItMatters}</p>

          {signal.questionsToAsk.length > 0 && (
            <div className="signal-questions">
              <p className="questions-label">💬 Questions to ask</p>
              <ul className="questions-list">
                {signal.questionsToAsk.map((q, i) => (
                  <li key={i}>"{q}"</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
