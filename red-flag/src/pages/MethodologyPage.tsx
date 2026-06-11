export function MethodologyPage() {
  return (
    <main className="content-page">
      <h1>How CommitIQ Works</h1>
      <div className="prose">

        <div className="ai-pipeline-strip">
          <div className="pipeline-step">
            <span className="pipeline-icon">📥</span>
            <span className="pipeline-label">Input</span>
            <span className="pipeline-desc">Conversation parsed into speaker turns and message sequence</span>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-step">
            <span className="pipeline-icon">🔍</span>
            <span className="pipeline-label">AI Detection</span>
            <span className="pipeline-desc">Pattern scan across 16 compatibility signal categories</span>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-step">
            <span className="pipeline-icon">⚖️</span>
            <span className="pipeline-label">Goal Tailoring</span>
            <span className="pipeline-desc">Analysis weighted by your selected relationship goal</span>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-step">
            <span className="pipeline-icon">📊</span>
            <span className="pipeline-label">Compatibility Report</span>
            <span className="pipeline-desc">Summary card, spectrum signals, and personalized conversation starters</span>
          </div>
        </div>

        <h2>The 4-Level Compatibility Spectrum</h2>
        <p>CommitIQ replaces binary red/green labels with a nuanced spectrum that reflects how relationships actually work:</p>
        <table className="method-table">
          <thead>
            <tr><th>Level</th><th>Icon</th><th>What It Means</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Relationship Strength</strong></td><td>♥</td><td>A consistent behavior that actively builds long-term relationship health</td></tr>
            <tr><td><strong>Strong Compatibility</strong></td><td>✓</td><td>Alignment on values, goals, or communication patterns</td></tr>
            <tr><td><strong>Needs Discussion</strong></td><td>●</td><td>A real difference or dynamic worth naming and exploring openly</td></tr>
            <tr><td><strong>Potential Concern</strong></td><td>⚑</td><td>A pattern worth paying attention to and discussing directly</td></tr>
          </tbody>
        </table>

        <h2>The 3×3×3 Framework</h2>
        <p>
          CommitIQ is designed around the 3×3×3 dating rule: after 3 months, 3 serious conversations, and 3 shared life moments, you have enough data to understand compatibility patterns. At this checkpoint, the signals are real — and CommitIQ helps you read them.
        </p>

        <h2>Relationship Goal Tailoring</h2>
        <p>Every analysis is prioritized around your stated relationship goal, then augmented by any self-assessment and synthetic context selections:</p>
        <table className="method-table">
          <thead><tr><th>Goal</th><th>What CommitIQ emphasizes</th></tr></thead>
          <tbody>
            <tr><td>Long-term relationship</td><td>Sustained compatibility, conflict resolution, shared vision</td></tr>
            <tr><td>Marriage-minded</td><td>Value alignment, family planning, financial transparency, life logistics</td></tr>
            <tr><td>Casual dating</td><td>Communication clarity, boundary honesty, mutual enjoyment</td></tr>
            <tr><td>Exploring compatibility</td><td>Connection quality, early signals, conversation ease</td></tr>
            <tr><td>Re-entering after a break</td><td>Emotional readiness, healthy patterns, sustainable pacing</td></tr>
          </tbody>
        </table>

        <h2>Personalization Inputs</h2>
        <p>
          The result includes a Personalization Applied panel that shows which source type, synthetic context signals, and readiness answers were used. These inputs add discussion prompts and reorder topic priorities; they do not claim to predict relationship outcomes.
        </p>

        <h2>Signal Categories Detected</h2>
        <p><strong>Relationship Strengths (♥)</strong></p>
        <ul>
          <li>Mutual respect — acknowledging limits without pushback</li>
          <li>Accountability — direct ownership of mistakes</li>
          <li>Conflict repair — active reconnection after disagreement</li>
          <li>Autonomy support — encouraging independence and friendships</li>
        </ul>
        <p><strong>Strong Compatibility (✓)</strong></p>
        <ul>
          <li>Intentional communication — checking in before assuming</li>
          <li>Value alignment — expressed shared values and priorities</li>
          <li>Future orientation — openness to discussing the relationship's future</li>
        </ul>
        <p><strong>Needs Discussion (●)</strong></p>
        <ul>
          <li>Communication style gaps — different processing approaches</li>
          <li>Lifestyle fit — social preference differences</li>
          <li>Financial transparency — money topics starting to surface</li>
          <li>Life logistics — geography, career, family proximity</li>
        </ul>
        <p><strong>Potential Concerns (⚑)</strong></p>
        <ul>
          <li>Relationship pacing — very rapid early intensity</li>
          <li>Indirect conflict style — frustration expressed through implication</li>
          <li>Persistent pressure — re-asking after a limit is stated</li>
          <li>Privacy-oriented communication — secrecy requests</li>
          <li>Emotional validation gaps — dismissive or minimizing responses</li>
        </ul>

        <h2>What CommitIQ does not do</h2>
        <p>
          CommitIQ reads patterns, not intent. It cannot determine relationship history, cultural context, tone, or full circumstances. Every signal comes with suggested conversation questions — because the goal is better conversations, not verdicts.
        </p>
        <p>All conversations in the demo are synthetic. CommitIQ is not connected to any messaging platform, dating app, bank, or social network.</p>
      </div>
    </main>
  );
}
