import { SAMPLE_CHATS } from "../data/sampleChats";
import type { SampleChat } from "../data/sampleChats";

type Props = {
  selectedId: string | null;
  onSelect: (sample: SampleChat) => void;
};

const levelColors: Record<string, string> = {
  excellent: "level-excellent",
  strong: "level-strong",
  promising: "level-promising",
  challenging: "level-challenging",
};

const levelLabels: Record<string, string> = {
  excellent: "Excellent Match",
  strong: "Strong Connection",
  promising: "Promising Start",
  challenging: "Worth Exploring",
};

export function SampleSelector({ selectedId, onSelect }: Props) {
  return (
    <div className="sample-grid">
      {SAMPLE_CHATS.map((s) => (
        <button
          key={s.id}
          className={`sample-card ${selectedId === s.id ? "selected" : ""}`}
          data-testid={`sample-${s.id}`}
          onClick={() => onSelect(s)}
        >
          <div className="sample-card-top">
            <span className="sample-title">{s.title}</span>
            <span className={`level-badge ${levelColors[s.expectedLevel]}`}>
              {levelLabels[s.expectedLevel]}
            </span>
          </div>
          <p className="sample-subtitle">{s.subtitle}</p>
          <p className="sample-hint muted">{s.goalSuggestion}</p>
        </button>
      ))}
    </div>
  );
}
