import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/insights";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — Raghav Kanva`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <Link
            href="/insights"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink)",
              opacity: 0.5,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}
          >
            ← Insights & Research
          </Link>
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
              marginBottom: "1rem",
            }}
          >
            {new Date(article.date + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="type-h1" style={{ maxWidth: "600px" }}>
            {article.title}
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>
            {/* Article scaffold — content to be filled in */}
            <p
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "var(--ink)",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              {article.description}
            </p>

            <div
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: "3px",
                padding: "1.25rem 1.5rem",
                background: "var(--mist)",
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  opacity: 0.5,
                  margin: 0,
                }}
              >
                Full article coming soon
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--hairline)", paddingTop: "2rem" }}>
              <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>Related</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {articles
                  .filter((a) => a.slug !== slug)
                  .slice(0, 2)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      href={`/insights/${related.slug}`}
                      style={{
                        fontFamily: "var(--font-archivo), sans-serif",
                        fontSize: "0.9375rem",
                        color: "var(--diagnostic-blue)",
                        textDecoration: "none",
                      }}
                    >
                      {related.title} &rarr;
                    </Link>
                  ))}
              </div>
              <Link href="/audit" className="cta-link">
                Request a Discoverability Audit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`.cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; } .cta-link:hover { background: var(--diagnostic-blue); }`}</style>
    </>
  );
}
