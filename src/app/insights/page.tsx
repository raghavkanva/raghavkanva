import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights & Research — Raghav Kanva",
  description:
    "Writing on SEO, AI discoverability, and what it actually takes to be found by the right people.",
};

export default function Insights() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>Insights & Research</p>
          <h1 className="type-h1" style={{ maxWidth: "520px" }}>
            Writing on search, AI, and visibility.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>
            {sorted.map((article, i) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                style={{
                  display: "block",
                  padding: "1.5rem 0",
                  borderTop: i === 0 ? "1px solid var(--hairline)" : undefined,
                  borderBottom: "1px solid var(--hairline)",
                  textDecoration: "none",
                }}
              >
                <time
                  dateTime={article.date}
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    opacity: 0.45,
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {new Date(article.date + "T00:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2
                  style={{
                    fontFamily: "var(--font-instrument-serif), Georgia, serif",
                    fontSize: "1.125rem",
                    color: "var(--ink)",
                    marginBottom: "0.5rem",
                    fontWeight: 400,
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--ink)",
                    opacity: 0.65,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
