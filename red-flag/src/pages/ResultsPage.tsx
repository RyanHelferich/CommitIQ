import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CompatibilitySummaryCard } from "../components/CompatibilitySummaryCard";
import { SignalCard } from "../components/SignalCard";
import { EvidenceTimeline } from "../components/EvidenceTimeline";
import { SafetyNote } from "../components/SafetyNote";
import type { AnalysisResult } from "../engine/types";

type LocationState = {
  result: AnalysisResult;
  sampleTitle: string;
  goal: string | null;
};

export function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  useEffect(() => {
    if (!state?.result) navigate("/");
  }, [state, navigate]);

  if (!state?.result) return null;

  const { result, sampleTitle } = state;
  const totalSignals =
    result.strengthSignals.length +
    result.compatibilitySignals.length +
    result.discussionSignals.length +
    result.concernSignals.length;

  return (
    <main className="results-page">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="results-header">
        <div className="results-meta">
          <span className="results-ai-badge">🤖 CommitIQ Analysis · {totalSignals} signals across {result.evidenceTimeline.length} moments</span>
          {result.goalContext && (
            <span className="results-goal-badge">{result.goalContext}</span>
          )}
        </div>
        <h1 className="results-title">Compatibility Report: {sampleTitle}</h1>
        <p className="results-summary">{result.communicationSummary}</p>
      </div>

      <section className="personalization-panel" data-testid="personalization-panel">
        <div className="personalization-header">
          <span className="personalization-kicker">Personalization applied</span>
          <p className="personalization-summary">{result.appliedPersonalization.join(" · ")}</p>
        </div>
        <div className="personalization-grid">
          <div className="personalization-item">
            <span className="personalization-label">{result.sourceContext.label}</span>
            <p>{result.sourceContext.detail}</p>
          </div>
          {result.contextInsights.map((insight) => (
            <div key={insight.label} className={`personalization-item insight-${insight.emphasis}`}>
              <span className="personalization-label">{insight.label}</span>
              <p>{insight.detail}</p>
            </div>
          ))}
          {result.readinessInsight && (
            <div className={`personalization-item readiness-${result.readinessInsight.status}`}>
              <span className="personalization-label">Dating readiness</span>
              <p><strong>{result.readinessInsight.headline}</strong> {result.readinessInsight.detail}</p>
              <ul className="personalization-questions">
                {result.readinessInsight.questions.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── Compatibility summary card ──────────────────────────────────── */}
      <section className="section" data-testid="compatibility-summary-section">
        <CompatibilitySummaryCard summary={result.compatibilitySummary} />
      </section>

      {/* ── Spectrum sections ───────────────────────────────────────────── */}
      <div className="spectrum-grid" data-testid="signal-spectrum">
        {result.strengthSignals.length > 0 && (
          <div className="spectrum-col">
            <h2 className="spectrum-heading strength-heading">
              ♥ Relationship Strengths
              <span className="count-badge">{result.strengthSignals.length}</span>
            </h2>
            {result.strengthSignals.map((s) => <SignalCard key={s.id} signal={s} />)}
          </div>
        )}

        {result.compatibilitySignals.length > 0 && (
          <div className="spectrum-col">
            <h2 className="spectrum-heading compat-heading">
              ✓ Strong Compatibility
              <span className="count-badge">{result.compatibilitySignals.length}</span>
            </h2>
            {result.compatibilitySignals.map((s) => <SignalCard key={s.id} signal={s} />)}
          </div>
        )}

        {result.discussionSignals.length > 0 && (
          <div className="spectrum-col">
            <h2 className="spectrum-heading discuss-heading">
              ● Needs Discussion
              <span className="count-badge">{result.discussionSignals.length}</span>
            </h2>
            {result.discussionSignals.map((s) => <SignalCard key={s.id} signal={s} />)}
          </div>
        )}

        {result.concernSignals.length > 0 && (
          <div className="spectrum-col">
            <h2 className="spectrum-heading concern-heading">
              ⚑ Potential Concerns
              <span className="count-badge">{result.concernSignals.length}</span>
            </h2>
            {result.concernSignals.map((s) => <SignalCard key={s.id} signal={s} />)}
          </div>
        )}
      </div>

      <EvidenceTimeline timeline={result.evidenceTimeline} />

      <section className="limitations-section" data-testid="limitations-section">
        <h3 className="section-title">AI Confidence &amp; Limitations</h3>
        <ul className="limitations-list">
          {result.limitations.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </section>

      <SafetyNote />

      <div className="results-footer-row">
        <button className="run-btn secondary" onClick={() => navigate("/")}>← Analyze Another Conversation</button>
      </div>
    </main>
  );
}
