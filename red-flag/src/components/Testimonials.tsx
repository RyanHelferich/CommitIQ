const TESTIMONIALS = [
  {
    initials: "PM",
    name: "Priya M.",
    age: "31",
    quote: "I'd been dating someone for four months and something felt off but I couldn't name it. CommitIQ showed me the pattern across three weeks of messages in seconds. Finally had the conversation I needed to have.",
    goal: "Long-term relationship",
  },
  {
    initials: "DT",
    name: "DeShawn T.",
    age: "28",
    quote: "I kept second-guessing myself. Was I being too picky? Too sensitive? The compatibility breakdown showed me what was actually there — and what wasn't. That clarity was worth everything.",
    goal: "Marriage-minded",
  },
  {
    initials: "SR",
    name: "Sofia R.",
    age: "36",
    quote: "Re-entering dating after a divorce is terrifying. CommitIQ helped me see what healthy early signals actually look like — not just what I'd been accepting as 'good enough' before.",
    goal: "Re-entering after a break",
  },
  {
    initials: "MK",
    name: "Marcus K.",
    age: "42",
    quote: "The 'Questions to Ask' section changed how I approach early conversations entirely. Instead of guessing, I had actual things to say. We're now eight months in and communicating better than any relationship I've had.",
    goal: "Long-term relationship",
  },
  {
    initials: "AN",
    name: "Aisha N.",
    age: "26",
    quote: "I used it with a friend as a dating coach exercise. She could finally see the pattern she'd been living inside for months. It started a conversation that changed the trajectory of her relationship.",
    goal: "Exploring compatibility",
  },
  {
    initials: "JL",
    name: "James L.",
    age: "34",
    quote: "What I love is that it doesn't tell you to break up. It tells you what to talk about. That's so much more useful than a verdict.",
    goal: "Casual dating",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">Representative scenarios</span>
          <h2 className="testimonials-title">Where CommitIQ creates clarity</h2>
          <p className="testimonials-sub">Composite demo stories showing the target moments CommitIQ is built to support.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-top">
                <span className="testimonial-avatar" aria-hidden="true">{t.initials}</span>
                <div className="testimonial-meta">
                  <span className="testimonial-name">{t.name}, {t.age}</span>
                  <span className="testimonial-goal">{t.goal}</span>
                </div>
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
