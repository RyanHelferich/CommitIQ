import type { RelationshipGoal } from "../engine/types";

type Props = {
  selected: RelationshipGoal | null;
  onSelect: (g: RelationshipGoal) => void;
};

const GOALS: { value: RelationshipGoal; icon: string; label: string; desc: string }[] = [
  { value: "long-term", icon: "🏡", label: "Long-term relationship", desc: "Building something lasting" },
  { value: "marriage-minded", icon: "💍", label: "Marriage-minded", desc: "Exploring lifelong partnership" },
  { value: "casual", icon: "☀️", label: "Casual dating", desc: "Getting to know people" },
  { value: "exploring", icon: "🔍", label: "Exploring compatibility", desc: "No expectations yet" },
  { value: "re-entering", icon: "🌱", label: "Re-entering after a break", desc: "Starting fresh" },
];

export function GoalSelector({ selected, onSelect }: Props) {
  return (
    <div className="goal-selector">
      <p className="goal-intro">This helps CommitIQ tailor the analysis to what matters most for your situation.</p>
      <div className="goal-grid">
        {GOALS.map((g) => (
          <button
            key={g.value}
            className={`goal-btn ${selected === g.value ? "selected" : ""}`}
            data-testid={`goal-${g.value}`}
            onClick={() => onSelect(g.value)}
          >
            <span className="goal-icon">{g.icon}</span>
            <span className="goal-label">{g.label}</span>
            <span className="goal-desc">{g.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
