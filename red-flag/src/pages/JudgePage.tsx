export function JudgePage() {
  return (
    <main className="content-page judge-page">
      <h1>Judge Evidence — CommitIQ</h1>
      <p className="judge-intro">
        This page maps CommitIQ directly to the official OCI Hackathon rubric. Everything below is verifiable from the live demo, the repository, and the machine-readable{" "}
        <a href="/judge-evidence.json" target="_blank" rel="noopener noreferrer">/judge-evidence.json</a>.
      </p>

      <section className="judge-section">
        <h2>Project</h2>
        <table className="judge-table">
          <tbody>
            <tr><td>Name</td><td><strong>CommitIQ</strong></td></tr>
            <tr><td>Tagline</td><td>Know Before You Commit™</td></tr>
            <tr><td>Team</td><td>LV Strip Scripts</td></tr>
            <tr><td>Event</td><td>OCI Hackathon #282</td></tr>
            <tr><td>Demo URL</td><td><a href="/" target="_blank">Live demo (this site)</a></td></tr>
          </tbody>
        </table>
      </section>

      <section className="judge-section">
        <h2>Core Demo Path <span className="muted">(under 2 minutes)</span></h2>
        <ol className="judge-steps">
          <li>Open the demo URL (homepage).</li>
          <li>Select a relationship goal — e.g. "Long-term relationship."</li>
          <li>Click <strong>"The 3-Month Check-In"</strong> sample conversation.</li>
          <li>Leave synthetic context toggles enabled.</li>
          <li>Click <strong>"Analyze Compatibility."</strong></li>
          <li>Review the Compatibility Summary card, personalization panel, spectrum signals, and conversation questions.</li>
          <li>Open the Evidence Timeline to see which messages triggered each signal.</li>
        </ol>
        <p className="muted" style={{ fontSize: "0.85rem" }}>No login, auth, or test credentials required.</p>
      </section>

      <section className="judge-section">
        <h2>Smallest Wedge: CommitIQ Coach Review Report</h2>
        <table className="judge-table">
          <tbody>
            <tr><td>Buyer</td><td>Dating coaches and relationship educators who already review client screenshots before sessions, workshops, and paid digital products.</td></tr>
            <tr><td>User</td><td>Active daters at the 3-month checkpoint who need 3 concrete topics or questions before deciding whether to deepen, slow down, or exit a relationship.</td></tr>
            <tr><td>Workflow</td><td>Client brings one conversation. Coach runs CommitIQ. In under 2 minutes, the coach gets a one-page prep artifact with top 3 topics, evidence snippets, readiness context, and 6-9 coachable questions.</td></tr>
            <tr><td>Why this wedge works first</td><td>It delivers paid-session value before CommitIQ needs dating-platform integrations, accounts, payments, or a large proprietary dataset.</td></tr>
            <tr><td>Reach channel</td><td>Coaches and educators already sell through TikTok, Instagram, Substack, workshops, paid communities, and one-on-one sessions where screenshots are a common input.</td></tr>
            <tr><td>Scope estimate</td><td>AP/Pew reports 3 in 10 U.S. adults have used dating sites or apps. If 1% of U.S. dating-site/app users bought one $19 report, the initial one-time report wedge would exceed $14M before subscriptions or coach dashboards.</td></tr>
          </tbody>
        </table>
      </section>

      <section className="judge-section">
        <h2>Rubric Evidence Map</h2>

        <div className="rubric-item">
          <div className="rubric-header">
            <span className="rubric-weight">25%</span>
            <h3>Demand Reality &amp; Problem Severity</h3>
          </div>
          <p><em>Judges look for a real, specific problem with clear pain.</em></p>
          <table className="judge-table">
            <tbody>
              <tr><td>Who has the problem</td><td>People actively dating who want to understand compatibility patterns before investing months of time and emotional energy in the wrong relationship.</td></tr>
              <tr><td>What they do today</td><td>Ask biased friends, scroll back through conversations, search Reddit advice threads, or ignore patterns until the relationship becomes painful.</td></tr>
              <tr><td>Why it's painful</td><td>Friends can't read patterns across weeks of messages. Love bombing, indirect conflict, and lifestyle mismatches look like isolated moments in the moment. Bad relationships cost months or years of emotional health, time, and money.</td></tr>
              <tr><td>Quantified outcome</td><td>CommitIQ reduces the 30-60 minute screenshot scroll / group-chat advice loop to an under-2-minute structured report with evidence, topics to discuss, and next questions.</td></tr>
              <tr><td>Success KPI</td><td>Target pilot KPI: at least 80% of beta users generate a report and identify 3 topics or questions they would discuss next; coach mode measures agreement with the top 3 surfaced topics.</td></tr>
              <tr><td>Product proof</td><td>CommitIQ transforms a real-sounding 3-month check-in conversation into a structured compatibility report with 4-level spectrum signals, a Compatibility Summary card, and personalized conversation starters.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="rubric-item">
          <div className="rubric-header">
            <span className="rubric-weight">20%</span>
            <h3>Target Customer &amp; Market Scope</h3>
          </div>
          <p><em>Judges look for a clear user and evidence the problem exists beyond one isolated case.</em></p>
          <table className="judge-table">
            <tbody>
              <tr><td>First user</td><td>Active daters 25–45 who want a structured, private way to understand compatibility patterns — specifically at the 3-month decision point.</td></tr>
              <tr><td>First buyer</td><td>Dating coaches and relationship educators who already review client screenshots and need repeatable, privacy-safe reports for sessions, workshops, and paid digital products.</td></tr>
              <tr><td>Adjacent users</td><td>Dating coaches · Relationship educators · Re-entering daters post-divorce · Safety-focused communities · Dating platforms (opt-in compatibility features)</td></tr>
              <tr><td>Market signal</td><td>AP/Pew reports 3 in 10 U.S. adults have used a dating site or app, more than half of adults under 35 have tried online dating, and 48% of users reported at least one unwanted behavior.</td></tr>
              <tr><td>Reachable wedge</td><td>Start with 50 beta daters and 10 coach/educator interviews from online dating communities, re-entering-dating groups, and young professional communities before pursuing platform partnerships.</td></tr>
              <tr><td>Scope estimate</td><td>Using the AP/Pew 3-in-10 U.S. adult dating-site/app usage signal, 1% of U.S. dating-site/app users buying one $19 report would exceed $14M in initial one-time report revenue.</td></tr>
              <tr><td>Why it matters</td><td>Relationship uncertainty is near-universal and recurring. Dating app usage is in the hundreds of millions globally. No structured private tool exists for compatibility pattern analysis.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="rubric-item">
          <div className="rubric-header">
            <span className="rubric-weight">20%</span>
            <h3>Solution Fit &amp; Product Design</h3>
          </div>
          <p><em>Judges look for a product that makes the user's life obviously better.</em></p>
          <table className="judge-table">
            <tbody>
              <tr><td>Before</td><td>User spends 30-60 minutes rereading conversations, asks a biased friend, gets inconsistent advice, or misses patterns until it's too late.</td></tr>
              <tr><td>After</td><td>User selects or pastes a conversation, sets their relationship goal, optionally completes a self-assessment, and gets an under-2-minute Compatibility Summary card with Strengths + Topics to Discuss, 4-level spectrum signals, and conversation starters for every flagged topic.</td></tr>
              <tr><td>Smallest wedge</td><td><strong>CommitIQ Coach Review Report:</strong> one conversation becomes a one-page prep artifact with top 3 topics, evidence snippets, readiness context, and 6-9 coachable questions.</td></tr>
              <tr><td>Value before platform</td><td>The coach can use the report immediately in a paid session without platform integrations, account systems, payments, or real-data partnerships.</td></tr>
              <tr><td>Key design choices</td><td>Goal selector prioritizes topics by relationship type · Self-assessment and synthetic context toggles visibly affect the report · 4-level spectrum replaces binary red/green labels · Conversation questions for every signal · No login required · Works on mobile</td></tr>
            </tbody>
          </table>
        </div>

        <div className="rubric-item">
          <div className="rubric-header">
            <span className="rubric-weight">20%</span>
            <h3>Technical Execution &amp; Demo Proof</h3>
          </div>
          <p><em>Judges look for working software they can open, verify, and understand.</em></p>
          <table className="judge-table">
            <tbody>
              <tr><td>Stack</td><td>React 19, TypeScript, Vite 5, React Router 7, plain CSS, deterministic local AI analysis engine</td></tr>
              <tr><td>Deployment</td><td>Vercel static site — HTTPS auto-provisioned, SPA routing, global CDN</td></tr>
              <tr><td>Auth required</td><td>None</td></tr>
              <tr><td>Analysis engine</td><td>16-category behavioral signal detector with 4-level spectrum classification, goal-aware topic prioritization, self-assessment personalization, synthetic context insights, and AI-framed conversation starters. Runs entirely in the browser.</td></tr>
              <tr><td>New features</td><td>Goal Selector · Dating Readiness Self-Assessment wired into results · Synthetic context toggles wired into results · 3×3×3 Framework positioning · Compatibility Summary card · Questions to Ask on every signal</td></tr>
              <tr><td>Public routes</td><td>/ · /results · /judge · /privacy · /methodology · /judge-evidence.json · /sitemap.xml</td></tr>
              <tr><td>Production-ready</td><td>Static HTTPS deployment, no login barrier, no backend dependency for the core demo, local deterministic analysis, SPA rewrites, stable verifier selectors, and public judge evidence routes.</td></tr>
              <tr><td>Hackathon-grade</td><td>Heuristic signal detector, synthetic-only sample data, no clinical outcome validation, no accounts, no payments, and no real platform integrations yet.</td></tr>
              <tr><td>Repository evidence</td><td><a href="https://github.com/RyanHelferich/CommitIQ" target="_blank" rel="noopener noreferrer">https://github.com/RyanHelferich/CommitIQ</a></td></tr>
            </tbody>
          </table>
        </div>

        <div className="rubric-item">
          <div className="rubric-header">
            <span className="rubric-weight">15%</span>
            <h3>Differentiation &amp; Investment Readiness</h3>
          </div>
          <p><em>Judges look for why this could become important, durable, or meaningfully different.</em></p>
          <table className="judge-table">
            <tbody>
              <tr><td>Why it's different</td><td>First compatibility tool built around the 3×3×3 dating checkpoint, with a nuanced 4-level spectrum, goal-aware analysis, built-in conversation starters, and a pre-analysis self-assessment. All runs locally — no data leaves the device.</td></tr>
              <tr><td>Impact metric</td><td>Reduce time-to-first-actionable-question to under 2 minutes; next pilot measures 80% report completion, top-3 topic agreement with coaches, and willingness to pay for a coach-ready report.</td></tr>
              <tr><td>Moat hypothesis</td><td>Labeled relationship compatibility pattern dataset · Coach workflow integrations · Dating platform API partnerships · Privacy-first local analysis differentiates from cloud competitors</td></tr>
              <tr><td>Why it gets bigger</td><td>The initial Coach Review Report wedge expands into paid coach dashboards, longitudinal relationship check-ins, opt-in dating platform safety/compatibility features, and a labeled compatibility-pattern dataset.</td></tr>
              <tr><td>Next version</td><td>Opt-in real data with local-only privacy architecture · Coach mode for professionals · Longitudinal tracking over multiple 3×3×3 checkpoints · Willingness to pay study with 50 beta users and 10 coach/educator interviews</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="judge-section">
        <h2>Safety Boundaries</h2>
        <ul className="judge-list">
          <li>All conversations are synthetic — no real private data</li>
          <li>No bank account linking, social media scraping, or dating app access</li>
          <li>No login, auth, or user accounts</li>
          <li>Pasted text is processed in-browser and never transmitted</li>
          <li>Does not diagnose abuse or predict relationship outcomes</li>
          <li>Does not provide emergency safety services</li>
          <li>Crisis line reference on every page that accepts input</li>
        </ul>
      </section>
    </main>
  );
}
