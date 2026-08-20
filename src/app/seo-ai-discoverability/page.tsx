import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO & AI Discoverability — Raghav Kanva",
  description:
    "SEO that starts with understanding your business, not a keyword tool. For organizations building visibility from scratch or fixing what's not working.",
};

export default function SeoAiDiscoverability() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>SEO & AI Discoverability</p>
          <h1 className="type-h1" style={{ maxWidth: "600px", marginBottom: "1.5rem" }}>
            SEO should start with the business, not the keyword tool.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Who this is for</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Some organizations are starting SEO properly for the first time. Others have had SEO running for a while — agencies have been involved, content has been published — but the results haven&rsquo;t matched the investment.
            </p>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              There&rsquo;s also a third situation: traffic is there, but it&rsquo;s not qualified. The people arriving aren&rsquo;t the right ones.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              And increasingly, organizations want to understand how they show up — or don&rsquo;t show up — in AI-generated answers, not just traditional search results.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>What comes before SEO</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Before any strategy is built, I want to understand the business: what it does well, who it actually serves best, how it&rsquo;s positioned against alternatives, and where the real differentiation is.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              That understanding changes everything downstream — what to target, how to structure the site, what content to create, and which signals matter for AI discoverability.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1.25rem" }}>What the engagement may include</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {[
                { label: "Search Strategy", desc: "Audience mapping, keyword positioning, competitive landscape, gap analysis." },
                { label: "Website & Information Architecture", desc: "How the site is structured, what it says, and whether the right pages exist." },
                { label: "Content & Authority", desc: "What to publish, for whom, and how it builds credibility over time." },
                { label: "Technical Foundations", desc: "The underlying signals that affect how search engines and AI systems understand your site." },
                { label: "AI Discoverability", desc: "How to be referenced accurately in AI-generated answers — what influences it and what doesn't." },
                { label: "Measurement", desc: "Tracking what matters: not just rankings, but qualified traffic and lead quality." },
              ].map(({ label, desc }) => (
                <div key={label} style={{ paddingBottom: "1.25rem", borderBottom: "1px solid var(--hairline)" }}>
                  <p style={{ fontFamily: "var(--font-archivo), sans-serif", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.375rem", color: "var(--ink)" }}>{label}</p>
                  <p className="type-body-sm" style={{ color: "var(--ink)", opacity: 0.75, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Build or improve</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Some clients need SEO built from the ground up — there&rsquo;s no existing strategy, and we start at the beginning together.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              Others have existing SEO they&rsquo;re not happy with. In that case, the work starts with understanding what&rsquo;s already there before deciding what to change.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Execution</h2>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              Depending on what&rsquo;s needed, I can implement directly, lead the strategy while your team executes, or work alongside an existing team. I don&rsquo;t only advise.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>On expectations</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              I don&rsquo;t guarantee specific rankings or AI citations. No one can — the starting point, the market, and the level of competition are different for every business, and the platforms themselves make decisions we don&rsquo;t control.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              What I prioritize instead: accurate diagnosis, honest prioritization, and a strategy built around what will actually move the needle for your specific situation.
            </p>

            <Link href="/contact" className="cta-link">Discuss your situation &rarr;</Link>
          </div>
        </div>
      </section>

      <style>{`.cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; } .cta-link:hover { background: var(--diagnostic-blue); }`}</style>
    </>
  );
}
