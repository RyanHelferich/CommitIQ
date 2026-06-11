import { useEffect, useState } from "react";
import type { CompatibilitySummary } from "../engine/types";

type Props = { summary: CompatibilitySummary };

const LEVEL_CONFIG = {
  excellent: { color: "var(--signal-green)", bg: "var(--signal-green-bg)", icon: "✦" },
  strong: { color: "var(--teal)", bg: "var(--teal-bg)", icon: "✓" },
  promising: { color: "var(--gold)", bg: "var(--gold-bg)", icon: "◈" },
  challenging: { color: "var(--signal-red)", bg: "var(--signal-red-bg)", icon: "⚑" },
};

export function CompatibilitySummaryCard({ summary }: Props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);

  const cfg = LEVEL_CONFIG[summary.level];

  return (
    <div className={`compat-card ${visible ? "visible" : ""}`} style={{ borderColor: cfg.color }}>
      <div className="compat-badge" style={{ background: cfg.bg, color: cfg.color }}>
        <span className="compat-badge-icon">{cfg.icon}</span>
        {summary.headline}
      </div>

      <div className="compat-columns">
        <div className="compat-col">
          <h3 className="compat-col-title strengths-title">Strengths</h3>
          <ul className="compat-list">
            {summary.strengths.map((s, i) => (
              <li key={i} className="compat-list-item strengths-item">
                <span className="compat-bullet">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {summary.topicsToDiscuss.length > 0 && (
          <div className="compat-col">
            <h3 className="compat-col-title discuss-title">Topics to Discuss</h3>
            <ul className="compat-list">
              {summary.topicsToDiscuss.map((t, i) => (
                <li key={i} className="compat-list-item discuss-item">
                  <span className="compat-bullet">●</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
