import type { EvidenceItem } from "../engine/types";

type Props = { timeline: EvidenceItem[] };

export function EvidenceTimeline({ timeline }: Props) {
  if (timeline.length === 0) return null;

  return (
    <div className="timeline" data-testid="evidence-timeline">
      <h3 className="section-title">Evidence Timeline</h3>
      <div className="timeline-list">
        {timeline.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-speaker">{item.speaker}</span>
              <p className="timeline-text">"{item.text}"</p>
              <div className="timeline-signals">
                {item.signals.map((s) => (
                  <span key={s} className="timeline-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
