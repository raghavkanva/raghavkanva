import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Raghav Kanva",
  description:
    "Independent SEO & AI Discoverability Consultant. Built for how search works now.",
};

export default function About() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>About</p>
          <h1 className="type-h1" style={{ maxWidth: "540px" }}>
            Raghav Kanva
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="about-grid"
          >
            <div style={{ maxWidth: "580px" }}>
              <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Who I am</h2>
              <p className="type-body" style={{ marginBottom: "1rem" }}>
                I&rsquo;m an independent SEO and AI Discoverability Consultant. I work with agencies and established organizations to diagnose why their real strengths aren&rsquo;t producing the right visibility online — and to build the strategy to correct it.
              </p>
              <p className="type-body" style={{ marginBottom: "2.5rem" }}>
                I work independently, which means I bring focused attention to a small number of engagements at a time. Not a large agency with rotating account managers. Just a clear line of accountability and thinking that stays consistent across the work.
              </p>

              <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Why this approach</h2>
              <p className="type-body" style={{ marginBottom: "1rem" }}>
                More traffic isn&rsquo;t more business. What matters is whether the right people are finding you, whether what they find matches what you actually do well, and whether that translates into qualified interest.
              </p>
              <p className="type-body" style={{ marginBottom: "2.5rem" }}>
                That answer almost always starts with understanding the business — the specialization, the audience, the positioning — before touching any tools or tactics. Most SEO work skips this step. I don&rsquo;t.
              </p>

              <div
                style={{
                  borderLeft: "2px solid var(--diagnostic-blue)",
                  paddingLeft: "1.25rem",
                  marginBottom: "2.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-instrument-serif), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "1.0625rem",
                    lineHeight: 1.65,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  &ldquo;I choose to work with legitimate, responsible, values-aligned organizations and individuals whose work I&rsquo;m glad to help more people discover.&rdquo;
                </p>
              </div>

              <p className="type-body" style={{ marginBottom: "1.25rem" }}>
                To understand how I approach an engagement in detail:{" "}
                <Link href="/how-i-work" style={{ color: "var(--diagnostic-blue)", textDecoration: "underline" }}>
                  read how I work
                </Link>
                .
              </p>

              <Link href="/contact" className="cta-link">Start a conversation &rarr;</Link>
            </div>

            {/* Portrait placeholder */}
            <div
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: "3px",
                aspectRatio: "4/5",
                maxWidth: "320px",
                background: "var(--mist)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Portrait of Raghav Kanva"
            >
              <p style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", opacity: 0.35 }}>
                Photo
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; }
        .cta-link:hover { background: var(--diagnostic-blue); }
        @media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </>
  );
}
