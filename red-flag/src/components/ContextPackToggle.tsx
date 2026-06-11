import type { ContextPackToggles } from "../engine/types";

type Props = {
  toggles: ContextPackToggles;
  onChange: (t: ContextPackToggles) => void;
};

const LABELS: { key: keyof ContextPackToggles; label: string; example: string }[] = [
  { key: "banking", label: "Synthetic banking patterns", example: "e.g. repeated gift purchases, loan requests" },
  { key: "socialTime", label: "Synthetic social app time", example: "e.g. late-night message spikes, profile check frequency" },
  { key: "publicProfile", label: "Synthetic public profile signals", example: "e.g. relationship status inconsistency" },
  { key: "searchCategories", label: "Synthetic search categories", example: "e.g. 'how to tell if someone is manipulating me'" },
];

export function ContextPackToggle({ toggles, onChange }: Props) {
  const toggle = (key: keyof ContextPackToggles) => {
    onChange({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div className="context-pack">
      <p className="context-label">Synthetic context signals <span className="muted">(all synthetic demo data)</span></p>
      {LABELS.map(({ key, label, example }) => (
        <label key={key} className="toggle-row">
          <span className={`toggle-switch ${toggles[key] ? "on" : "off"}`} onClick={() => toggle(key)} role="checkbox" aria-checked={toggles[key]} tabIndex={0} onKeyDown={(e) => e.key === " " && toggle(key)}>
            <span className="toggle-knob" />
          </span>
          <span className="toggle-text">
            <span className="toggle-label">{label}</span>
            <span className="toggle-example muted">{example}</span>
          </span>
        </label>
      ))}
    </div>
  );
}
