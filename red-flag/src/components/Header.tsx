import { Link, useLocation } from "react-router-dom";

export function Header() {
  const loc = useLocation();
  const isResults = loc.pathname === "/results";

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-mark">IQ</span>
        <span className="logo-text">CommitIQ</span>
      </Link>
      <nav className="nav">
        {isResults && (
          <Link to="/" className="nav-link">← New Analysis</Link>
        )}
        <Link to="/methodology" className="nav-link">How It Works</Link>
        <Link to="/privacy" className="nav-link">Privacy</Link>
        <Link to="/" className="nav-cta">Analyze Compatibility</Link>
      </nav>
    </header>
  );
}
