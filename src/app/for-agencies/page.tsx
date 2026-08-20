import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Agencies — Raghav Kanva",
  description:
    "An independent second opinion on a plateaued account, an AI-visibility question, or a positioning problem — behind your brand.",
};

export default function ForAgencies() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>For Agencies</p>
          <h1 className="type-h1" style={{ maxWidth: "540px", marginBottom: "1rem" }}>
            When routine SEO isn&rsquo;t enough.
          </h1>
          <p className="type-body" style={{ maxWidth: "520px", color: "var(--ink)", opacity: 0.75 }}>
            An independent second opinion for plateaued accounts, AI-visibility questions, or positioning problems your team has been circling for a while.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Situations this addresses</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "2.5rem" }}>
              {[
                "Results have stalled on an account despite consistent work.",
                "A client is asking questions about AI visibility your team isn't sure how to answer.",
                "The positioning feels off, but it's hard to articulate exactly why.",
                "A competitor is pulling ahead and you want an independent read on what they're doing differently.",
                "An account is at risk and you need a fresh set of eyes before the next client conversation.",
              ].map((item, i, arr) => (
                <div
                  key={item}
                  style={{
                    padding: "1.125rem 0",
                    borderBottom: "1px solid var(--hairline)",
                    borderTop: i === 0 ? "1px solid var(--hairline)" : undefined,
                  }}
                >
                  <p className="type-body-sm" style={{ margin: 0, color: "var(--ink)" }}>{item}</p>
                </div>
              ))}
            </div>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Working with your team, not around it</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              I work behind the agency&rsquo;s brand. I never contact your client directly, and there&rsquo;s no implication that the existing team failed — the framing is a specialist brought in for a specific question.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              An NDA is available. The relationship stays confidential.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>What you get</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                "An independent diagnosis of what's happening and why.",
                "A written decision document with clear next steps.",
                "An optional discovery interview with the founder or client team (if appropriate and sanctioned).",
                "A clear, honest read on what to do first.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "var(--diagnostic-blue)", fontSize: "0.75rem", flexShrink: 0, paddingTop: "0.375rem" }}>—</span>
                  <p className="type-body-sm" style={{ margin: 0, color: "var(--ink)" }}>{item}</p>
                </li>
              ))}
            </ul>

            <div
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: "3px",
                padding: "1.75rem",
                marginBottom: "2.5rem",
              }}
            >
              <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>A typical scenario</p>
              <p className="type-body-sm" style={{ color: "var(--ink)", marginBottom: "0.875rem" }}>
                An agency has been running SEO for a retail client. Traffic is growing, but qualified leads haven&rsquo;t moved. The team has done everything right by the standard playbook.
              </p>
              <p className="type-body-sm" style={{ color: "var(--ink)", marginBottom: "0.875rem" }}>
                After an intake conversation, it turns out the client&rsquo;s real strength is in a narrower product category than the site suggests. The current content is accurate — but it&rsquo;s attracting browsers, not buyers.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "var(--diagnostic-blue)",
                  margin: 0,
                }}
              >
                The repositioning changes the targeting, the content priority, and the conversion story.
              </p>
            </div>

            <Link href="/contact" className="cta-link">Discuss an Account &rarr;</Link>
          </div>
        </div>
      </section>

      <style>{`.cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; } .cta-link:hover { background: var(--diagnostic-blue); }`}</style>
    </>
  );
}
