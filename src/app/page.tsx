import type { Metadata } from "next";
import Link from "next/link";
import SignatureReveal from "@/components/SignatureReveal";

export const metadata: Metadata = {
  title: "Raghav Kanva — Independent SEO & AI Discoverability Consultant",
  description:
    "I help agencies and established organizations diagnose why their real strengths aren't translating into qualified visibility across search and AI, then build the strategy to correct it.",
};

const familiarSituations = [
  "You're getting search traffic, but the leads aren't the right ones.",
  "Your business is well-regarded offline. Online, it reads like everyone else in the space.",
  "Competitors are showing up on Google — and now in AI answers — despite doing less rigorous work than you.",
  "You've been investing in marketing for a while, but you're not sure what's actually working.",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "var(--paper)",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container-editorial">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div style={{ maxWidth: "640px" }}>
              <h1
                className="type-h1"
                style={{
                  color: "var(--ink)",
                  marginBottom: "1.5rem",
                }}
              >
                Your business may be stronger than it looks online.
              </h1>
              <p
                className="type-body"
                style={{
                  color: "var(--ink)",
                  opacity: 0.75,
                  maxWidth: "560px",
                  marginBottom: "2.25rem",
                }}
              >
                I help agencies and established organizations diagnose why their real strengths aren&rsquo;t translating into qualified visibility across search and AI. Then I fix it, so it actually turns into sales.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
                <Link href="/contact" className="cta-primary">
                  Discuss a Project
                </Link>
                <Link href="/how-i-work" className="cta-secondary">
                  See How I Work
                </Link>
              </div>
            </div>

            {/* Signature reveal panel */}
            <div>
              <SignatureReveal />
            </div>
          </div>
        </div>
      </section>

      {/* TWO KINDS OF CLIENTS */}
      <section
        style={{
          background: "var(--mist)",
          padding: "4.5rem 0",
        }}
      >
        <div className="container-editorial">
          <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
            <p className="type-pull" style={{ color: "var(--ink)" }}>
              &ldquo;I work with two kinds of clients. Some want their SEO built from the ground up. Others have already tried different things and aren&rsquo;t getting the right results — I step in to find out why, and take it from there.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* FAMILIAR SITUATIONS */}
      <section
        style={{
          background: "var(--paper)",
          padding: "4.5rem 0",
        }}
      >
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "2rem" }}>
            Familiar situations
          </p>
          <div style={{ maxWidth: "640px" }}>
            {familiarSituations.map((quote, i) => (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? "1px solid var(--hairline)" : undefined,
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--hairline)",
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
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE METHOD */}
      <section
        style={{
          background: "var(--paper)",
          padding: "4.5rem 0",
          borderTop: "1px solid var(--hairline)",
        }}
      >
        <div className="container-editorial">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="method-grid"
          >
            {/* Left: passage */}
            <div style={{ maxWidth: "480px" }}>
              <p className="type-eyebrow" style={{ marginBottom: "1.25rem" }}>
                The Method
              </p>
              <p className="type-body" style={{ marginBottom: "1.25rem", color: "var(--ink)" }}>
                Before touching a keyword tool, I want to understand what the business is actually strong at. Who they serve best. Where they&rsquo;re genuinely different. That understanding drives everything else — the strategy, the content, the targeting.
              </p>
              <p className="type-body" style={{ marginBottom: "1.5rem", color: "var(--ink)" }}>
                What shows up on the site and in search results is often a generic version of the business. The specific version — the one that attracts the right clients — takes some digging to find.
              </p>
              <Link
                href="/how-i-work"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--diagnostic-blue)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--diagnostic-blue)",
                  paddingBottom: "1px",
                }}
              >
                Read the full method &rarr;
              </Link>
            </div>

            {/* Right: case finding card */}
            <div
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: "3px",
                padding: "1.75rem",
                background: "var(--paper)",
                maxWidth: "440px",
              }}
            >
              <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>
                Case Finding
              </p>
              <p className="type-body-sm" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
                A car service company says: <em style={{ fontStyle: "italic" }}>&ldquo;We service all makes and models.&rdquo;</em>
              </p>
              <p className="type-body-sm" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
                After the intake conversation: they have specialist tools, certifications, and a decade of experience with premium and performance vehicles. Their general positioning was accurate — but it was hiding what actually made them different.
              </p>
              <p className="type-body-sm" style={{ color: "var(--diagnostic-blue)", fontStyle: "italic" }}>
                The keywords change. The content changes. The positioning changes. The right clients start to find them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}
      <section
        id="ways-to-work"
        style={{
          background: "var(--mist)",
          padding: "4.5rem 0",
        }}
      >
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "2rem" }}>
            Ways to Work Together
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "var(--hairline)",
              border: "1px solid var(--hairline)",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <OfferCard
              title="Strategic Discoverability Audit"
              href="/audit"
              description="A structured review of why your business isn't being found by the right people — and a clear document of what to do about it."
            />
            <OfferCard
              title="Monthly Strategic Advisory"
              href="/advisory"
              description="Ongoing strategic guidance: what changed, what it means, and where to focus next."
            />
            <OfferCard
              title="For Agencies"
              href="/for-agencies"
              description="An independent second opinion on a plateaued account, an AI-visibility question, or a positioning problem — working behind your brand."
            />
          </div>
        </div>
      </section>

      {/* WHAT I DON'T PROMISE */}
      <section
        style={{
          background: "var(--ink)",
          padding: "4.5rem 0",
        }}
      >
        <div className="container-editorial">
          <p
            className="type-eyebrow"
            style={{ color: "var(--paper)", opacity: 0.5, marginBottom: "1.25rem" }}
          >
            What I don&rsquo;t promise
          </p>
          <p
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.9375rem",
              color: "var(--paper)",
              opacity: 0.65,
              lineHeight: 1.7,
              maxWidth: "560px",
              marginBottom: "2.5rem",
            }}
          >
            The goal is always the same: more of the right business finding you and buying. I can&rsquo;t promise a specific number, because every market, starting point, and competitor set is different. What I can tell you is where attention goes.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
            className="promise-grid"
          >
            {/* Not Promised */}
            <div>
              <p
                className="type-eyebrow"
                style={{ color: "var(--paper)", opacity: 0.5, marginBottom: "1.25rem" }}
              >
                Not in scope to promise
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {[
                  "Guaranteed rankings on any specific keyword.",
                  "Guaranteed citations in AI-generated answers.",
                  "A fixed timeline to results.",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--paper)",
                      opacity: 0.7,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guaranteed */}
            <div>
              <p
                className="type-eyebrow"
                style={{ color: "var(--ochre)", marginBottom: "1.25rem" }}
              >
                Guaranteed
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {[
                  "Quality of research and diagnosis.",
                  "Clarity about what I find — including what isn't working.",
                  "Honest prioritization: what to focus on first, and what to skip for now.",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--paper)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          background: "var(--paper)",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-editorial">
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <h2
              className="type-h2"
              style={{ color: "var(--ink)", marginBottom: "1.75rem" }}
            >
              Have a visibility problem worth understanding properly?
            </h2>
            <Link href="/contact" className="cta-primary">
              Discuss Your Situation
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cta-primary {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: var(--ink);
          color: var(--paper);
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.15s ease;
        }
        .cta-primary:hover {
          background: var(--diagnostic-blue);
        }
        .cta-secondary {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: transparent;
          color: var(--ink);
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.9375rem;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid var(--hairline);
          border-radius: 2px;
          transition: border-color 0.15s ease;
        }
        .cta-secondary:hover {
          border-color: var(--ink);
        }
        .offer-card:hover {
          background: var(--mist) !important;
        }
        @media (min-width: 768px) {
          .method-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .promise-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

function OfferCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="offer-card"
      style={{
        display: "block",
        background: "var(--paper)",
        padding: "2rem 1.75rem",
        textDecoration: "none",
        transition: "background 0.15s ease",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-instrument-serif), Georgia, serif",
          fontSize: "1.125rem",
          color: "var(--ink)",
          marginBottom: "0.75rem",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontSize: "0.9375rem",
          color: "var(--ink)",
          opacity: 0.7,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {description}
      </p>
      <p
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontSize: "0.875rem",
          color: "var(--diagnostic-blue)",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        Learn more &rarr;
      </p>
    </Link>
  );
}
