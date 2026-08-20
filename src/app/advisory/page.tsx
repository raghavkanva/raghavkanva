import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Monthly Strategic Advisory — Raghav Kanva",
  description:
    "Ongoing strategic guidance: what changed, what it means, and where to focus next. Not a monthly metrics PDF.",
};

const monthlyQuestions = [
  "What changed?",
  "What did we learn?",
  "What matters now?",
  "What should we do next?",
];

export default function Advisory() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>Monthly Strategic Advisory</p>
          <h1 className="type-h1" style={{ maxWidth: "560px" }}>
            Not a monthly metrics PDF.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--mist)", padding: "3.5rem 0" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1.5rem" }}>The monthly question</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {monthlyQuestions.map((q) => (
              <div
                key={q}
                style={{
                  border: "1px solid var(--hairline)",
                  borderRadius: "2px",
                  padding: "1.25rem 1.5rem",
                  background: "var(--paper)",
                  flex: "1 1 180px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-instrument-serif), Georgia, serif",
                    fontSize: "1.125rem",
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3.5rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>What&rsquo;s included</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
              {[
                "Performance review: what moved and what didn't, and why it matters.",
                "SEO and AI-visibility review: changes in how you're being found, referenced, and represented.",
                "Landing page input: feedback on pages that are underperforming or misaligned with targeting.",
                "Content direction: what to publish next and why, based on current gaps and opportunities.",
                "Implementation review: what was done since last month, and whether it's having the intended effect.",
                "New opportunity investigation: anything worth exploring that's appeared in the data or the market.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", paddingBottom: "0.875rem", borderBottom: "1px solid var(--hairline)" }}>
                  <span style={{ color: "var(--diagnostic-blue)", fontSize: "0.75rem", flexShrink: 0, paddingTop: "0.35rem" }}>—</span>
                  <p className="type-body-sm" style={{ margin: 0, color: "var(--ink)" }}>{item}</p>
                </div>
              ))}
            </div>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>What&rsquo;s not included (by default)</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Hands-on execution — writing, building, publishing — normally sits with the client&rsquo;s team. The advisory relationship is strategic: I tell you what to do and why; your team does it.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              If you need someone to build the SEO from the ground up rather than guide it, that&rsquo;s a different engagement — closer to the first kind of client I described on the{" "}
              <Link href="/how-i-work" style={{ color: "var(--diagnostic-blue)", textDecoration: "underline" }}>How I Work</Link>
              {" "}page.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>On-site</h2>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              For suitable engagements, periodic on-site sessions are available — planned in advance, not ad hoc.
            </p>

            <Link href="/contact" className="cta-link">Discuss a Monthly Advisory &rarr;</Link>
          </div>
        </div>
      </section>

      <style>{`.cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; } .cta-link:hover { background: var(--diagnostic-blue); }`}</style>
    </>
  );
}
