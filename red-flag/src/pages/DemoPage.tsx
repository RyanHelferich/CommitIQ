import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SampleSelector } from "../components/SampleSelector";
import { ContextPackToggle } from "../components/ContextPackToggle";
import { SafetyNote } from "../components/SafetyNote";
import { GoalSelector } from "../components/GoalSelector";
import { SelfAssessment } from "../components/SelfAssessment";
import { Testimonials } from "../components/Testimonials";
import type { SampleChat } from "../data/sampleChats";
import { analyzeConversation } from "../engine/analyzeConversation";
import type { ContextPackToggles, RelationshipGoal, SelfAssessmentAnswers, SourceType } from "../engine/types";

const DEFAULT_TOGGLES: ContextPackToggles = {
  banking: true,
  socialTime: true,
  publicProfile: true,
  searchCategories: true,
};

const AI_STEPS = [
  "Parsing conversation structure…",
  "Running compatibility pattern analysis…",
  "Classifying relationship signals…",
  "Tailoring to your relationship goal…",
  "Generating personalized insights…",
];

export function DemoPage() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState<RelationshipGoal | null>(null);
  const [selectedSample, setSelectedSample] = useState<SampleChat | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [sourceType, setSourceType] = useState<SourceType>("chat");
  const [toggles, setToggles] = useState<ContextPackToggles>(DEFAULT_TOGGLES);
  const [selfAssessment, setSelfAssessment] = useState<SelfAssessmentAnswers | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const transcript = selectedSample?.transcript ?? pastedText;
  const canRun = transcript.trim().length > 0;

  function handleSelectSample(s: SampleChat) {
    setSelectedSample(s);
    setPastedText("");
  }

  function handlePaste(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPastedText(e.target.value);
    setSelectedSample(null);
  }

  function handleRun() {
    if (!canRun) return;
    setLoading(true);
    setLoadingStep(0);
    let step = 0;
    const iv = setInterval(() => {
      step += 1;
      if (step < AI_STEPS.length) setLoadingStep(step);
      else clearInterval(iv);
    }, 130);
    setTimeout(() => {
      clearInterval(iv);
      const result = analyzeConversation({
        transcript,
        sourceType,
        sampleId: selectedSample?.id,
        contextToggles: toggles,
        relationshipGoal: goal ?? undefined,
        selfAssessment: selfAssessment ?? undefined,
      });
      navigate("/results", { state: { result, sampleTitle: selectedSample?.title ?? "Custom", goal } });
    }, 750);
  }

  return (
    <main className="demo-page">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-eyebrow">
          <span className="framework-badge">3×3×3 Framework</span>
          <span className="hero-eyebrow-text">After 3 months, you have enough data. CommitIQ helps you make sense of it.</span>
        </div>
        <h1 className="hero-title">Find Compatible Partners,<br />Not Perfect People</h1>
        <p className="hero-sub">
          Understand relationship strengths, identify areas that need discussion, and get personalized questions that help you build meaningful connections.
        </p>
        <div className="hero-ctas">
          <button className="cta-primary" onClick={() => document.getElementById("analyze-section")?.scrollIntoView({ behavior: "smooth" })}>
            Analyze Compatibility
          </button>
          <button className="cta-secondary" onClick={() => document.getElementById("strengths-section")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Green Flags
          </button>
        </div>
        <div className="synthetic-banner">
          ⚑ This demo uses synthetic data only. Do not paste real private conversations.
        </div>
      </div>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── Trust strip ───────────────────────────────────────────────────── */}
      <div className="trust-strip">
        <div className="trust-item"><span className="trust-icon">🔒</span> Runs in your browser — nothing is sent anywhere</div>
        <div className="trust-item"><span className="trust-icon">🧪</span> Synthetic demo data only</div>
        <div className="trust-item"><span className="trust-icon">🤖</span> AI-powered pattern analysis</div>
        <div className="trust-item"><span className="trust-icon">💬</span> Personalized conversation starters</div>
      </div>

      {/* ── 3x3x3 Framework section ───────────────────────────────────────── */}
      <section className="section framework-section" id="strengths-section">
        <div className="framework-card">
          <div className="framework-header">
            <span className="framework-label">The 3×3×3 Dating Rule</span>
          </div>
          <div className="framework-body">
            <div className="framework-col">
              <span className="framework-num">3</span>
              <span className="framework-item">months of dating</span>
            </div>
            <span className="framework-plus">+</span>
            <div className="framework-col">
              <span className="framework-num">3</span>
              <span className="framework-item">serious conversations</span>
            </div>
            <span className="framework-plus">+</span>
            <div className="framework-col">
              <span className="framework-num">3</span>
              <span className="framework-item">shared life moments</span>
            </div>
          </div>
          <p className="framework-desc">
            At this point, patterns emerge. CommitIQ is built for this moment — when you have real data and want to understand what it means.
          </p>
        </div>
      </section>

      {/* ── Goal selector ─────────────────────────────────────────────────── */}
      <section className="section" id="analyze-section">
        <h2 className="section-title">What kind of relationship are you trying to build?</h2>
        <GoalSelector selected={goal} onSelect={setGoal} />
      </section>

      {/* ── Self assessment ───────────────────────────────────────────────── */}
      <section className="section">
        <SelfAssessment onComplete={setSelfAssessment} />
      </section>

      {/* ── Sample selector ───────────────────────────────────────────────── */}
      <section className="section">
        <h2 className="section-title">Choose a sample conversation to analyze</h2>
        <p className="section-sub muted">These are synthetic conversations written for this demo — each illustrates a different compatibility scenario.</p>
        <SampleSelector selectedId={selectedSample?.id ?? null} onSelect={handleSelectSample} />
      </section>

      {/* ── Paste input ───────────────────────────────────────────────────── */}
      <section className="section">
        <h2 className="section-title">Or paste a synthetic transcript</h2>
        <p className="muted" style={{ marginBottom: "0.75rem", fontSize: "0.85rem" }}>
          Format: <code>Name: message text</code> — one message per line. CommitIQ reads speaker turns and conversation dynamics.
        </p>
        <textarea
          className="transcript-input"
          placeholder={"Jordan: So I wanted to talk about where things are going...\nAlex: I'm glad you brought it up — I've been thinking about that too.\nJordan: ..."}
          value={pastedText}
          onChange={handlePaste}
          rows={8}
        />
        <div className="source-row">
          <label className="source-label">Source type:</label>
          {(["chat", "dating_app", "voice_transcript"] as SourceType[]).map((t) => (
            <button
              key={t}
              className={`source-btn ${sourceType === t ? "active" : ""}`}
              onClick={() => setSourceType(t)}
            >
              {t === "chat" ? "Chat" : t === "dating_app" ? "Dating App" : "Voice Transcript"}
            </button>
          ))}
        </div>
      </section>

      {/* ── Context toggles ───────────────────────────────────────────────── */}
      <section className="section">
        <ContextPackToggle toggles={toggles} onChange={setToggles} />
      </section>

      {/* ── Run button ────────────────────────────────────────────────────── */}
      <section className="section run-section">
        {loading ? (
          <div className="ai-loading">
            <div className="ai-spinner" />
            <span className="ai-loading-step">{AI_STEPS[loadingStep]}</span>
          </div>
        ) : (
          <>
            <button className="run-btn" data-testid="analyze-submit" disabled={!canRun} onClick={handleRun}>
              Analyze Compatibility
            </button>
            {!canRun && (
              <p className="muted" style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
                Select a sample or paste a transcript to continue.
              </p>
            )}
          </>
        )}
      </section>

      <section className="section">
        <SafetyNote />
      </section>
    </main>
  );
}
