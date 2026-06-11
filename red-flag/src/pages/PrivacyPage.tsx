export function PrivacyPage() {
  return (
    <main className="content-page">
      <h1>Privacy &amp; Data Policy</h1>
      <div className="prose">
        <h2>This is a synthetic-data demo</h2>
        <p>
          CommitIQ is a hackathon demonstration. All conversations used in the demo are synthetic — written specifically for this demo and do not represent any real person or relationship.
        </p>

        <h2>What we never collect</h2>
        <ul>
          <li>Real private messages or conversations</li>
          <li>Bank account or financial data</li>
          <li>Social media account access or credentials</li>
          <li>Dating app account access</li>
          <li>Personal identifying information</li>
          <li>Uploaded text — the demo runs entirely in your browser</li>
        </ul>

        <h2>What happens to pasted text</h2>
        <p>
          If you paste a transcript, it is analyzed entirely in your browser using local JavaScript. It is never transmitted, stored, or logged anywhere. Nothing leaves your device.
        </p>

        <h2>Synthetic context signals</h2>
        <p>
          The context pack toggles (banking patterns, social app time, public profile signals, search categories) represent pre-written demo assumptions. When enabled, they add synthetic discussion prompts to the report. They are not connected to any real account, service, or data source.
        </p>

        <h2>Self-Assessment data</h2>
        <p>
          The Dating Readiness Self-Assessment answers are kept only in app memory for the current analysis and are used solely to personalize your CommitIQ results. They are not written to local storage or sent anywhere.
        </p>

        <h2>This is not a crisis service</h2>
        <p>
          CommitIQ does not diagnose abuse, predict relationship outcomes, or provide emergency support. If you feel unsafe, please contact{" "}
          <a href="https://www.thehotline.org" target="_blank" rel="noopener noreferrer">The National Domestic Violence Hotline</a> or a trusted person in your life.
        </p>
      </div>
    </main>
  );
}
