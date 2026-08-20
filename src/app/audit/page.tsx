import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategic Discoverability Audit — Raghav Kanva",
  description:
    "A decision document, not a spreadsheet of errors. Find out why your business isn't being found by the right people.",
};

export default function Audit() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>Strategic Discoverability Audit</p>
          <h1 className="type-h1" style={{ maxWidth: "600px" }}>
            A decision document, not a spreadsheet of errors.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>When an audit makes sense</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Before you start investing in SEO in any serious way — you want to understand where you actually stand, and what to prioritize before committing budget.
            </p>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Or you&rsquo;ve already put effort into SEO and it hasn&rsquo;t worked the way you expected — and you want an honest, independent read of why.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              Also: if your target audience is unclear, your AI visibility is weak, or your traffic doesn&rsquo;t match your leads, an audit is where we start.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1.25rem" }}>What&rsquo;s investigated</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {[
                { label: "Business", desc: "Positioning, specialization, audience, differentiation from alternatives." },
                { label: "Audience", desc: "Who you&rsquo;re targeting vs. who you should be targeting, and whether the gap is causing the lead problem." },
                { label: "Search", desc: "Keyword landscape, competitor visibility, content gaps, ranking signals." },
                { label: "AI", desc: "How your business is referenced (or not referenced) in AI-generated answers, and what&rsquo;s influencing that." },
                { label: "Content & Conversion", desc: "What you have, what it&rsquo;s doing, and whether it&rsquo;s reaching the right people with the right message." },
                { label: "Measurement", desc: "Whether you can currently tell what&rsquo;s working and what isn&rsquo;t." },
              ].map(({ label, desc }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", paddingBottom: "1rem", borderBottom: "1px solid var(--hairline)" }}>
                  <p style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--diagnostic-blue)", minWidth: "120px", paddingTop: "0.2rem" }}>{label}</p>
                  <p className="type-body-sm" style={{ color: "var(--ink)", opacity: 0.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>The discovery interview</h2>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              A conversation with the founder or relevant team member is part of the process, not optional. Data tells me what&rsquo;s happening. The interview tells me why — and often surfaces positioning details that don&rsquo;t appear anywhere in the existing content.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>What you receive</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              A written document structured around decisions, not data dumps. It covers:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                "What&rsquo;s already working (and worth protecting).",
                "What&rsquo;s weak and why.",
                "What&rsquo;s genuinely missing.",
                "What&rsquo;s not worth focusing on right now.",
                "What to do first — a clear, honest priority order.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                  <span style={{ color: "var(--diagnostic-blue)", fontSize: "0.75rem", flexShrink: 0 }}>—</span>
                  <p className="type-body-sm" style={{ margin: 0, color: "var(--ink)" }} dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              There&rsquo;s also a briefing call to walk through the findings.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>What this is not</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Not an automated tool export. Not 200 unprioritized errors with a traffic-light color code. No guaranteed rankings or AI citations.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              The value is in the judgment about what actually matters for your specific situation.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Process & timeline</h2>
            <p className="type-body" style={{ marginBottom: "1rem" }}>
              Kickoff &rarr; discovery interview &rarr; data collection &rarr; research &rarr; interim check-in &rarr; final report and briefing call.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              Typically 2–4 weeks depending on the complexity of the business and what&rsquo;s being investigated.
            </p>

            <Link href="/contact" className="cta-link">Request an Audit &rarr;</Link>
          </div>
        </div>
      </section>

      <style>{`.cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; } .cta-link:hover { background: var(--diagnostic-blue); }`}</style>
    </>
  );
}
