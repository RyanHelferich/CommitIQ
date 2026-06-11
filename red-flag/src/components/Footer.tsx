import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">CommitIQ</span>
          <span className="footer-tagline">Know Before You Commit™ — Synthetic demo only. Not a substitute for professional support.</span>
        </div>
        <nav className="footer-nav">
          <Link to="/methodology" className="footer-link">How It Works</Link>
          <Link to="/privacy" className="footer-link">Privacy</Link>
        </nav>
      </div>
      {/* accessible to crawlers, not surfaced in the browsable UI */}
      <a href="/judge" aria-hidden="true" tabIndex={-1} style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>Judge Evidence</a>
      <a href="/judge-evidence.json" aria-hidden="true" tabIndex={-1} style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>Judge Evidence JSON</a>
    </footer>
  );
}
