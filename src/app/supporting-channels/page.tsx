import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supporting Channels — Raghav Kanva",
  description:
    "Google Ads and Meta Ads as tools reached for based on your situation — not standalone services, but sometimes the right call.",
};

export default function SupportingChannels() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>Supporting Channels</p>
          <h1 className="type-h1" style={{ maxWidth: "540px", marginBottom: "1rem" }}>
            I don&rsquo;t force every problem into SEO.
          </h1>
          <p className="type-body" style={{ maxWidth: "520px", color: "var(--ink)", opacity: 0.75 }}>
            Depending on the urgency, the audience, the existing demand, and the budget, the right approach may involve paid channels — not as a primary offering, but as tools I reach for when the situation calls for it.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>

            <div style={{ marginBottom: "3rem" }}>
              <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Google Ads</h2>
              <p className="type-body" style={{ marginBottom: "1rem" }}>
                When there&rsquo;s active search demand for what you offer and you need results faster than organic SEO can deliver, Google Ads can fill the gap.
              </p>
              <p className="type-body" style={{ marginBottom: "1rem" }}>
                It&rsquo;s also useful as a diagnostic tool: running targeted ads while the organic strategy matures tells you quickly whether your audience and messaging are right — before you&rsquo;ve committed months to content.
              </p>
              <p className="type-body">
                I use Google Ads when the situation calls for it — not as a default, and not as a standalone service.
              </p>
            </div>

            <div
              style={{
                height: "1px",
                background: "var(--hairline)",
                margin: "0 0 3rem",
              }}
            />

            <div style={{ marginBottom: "3rem" }}>
              <h2 className="type-h2" style={{ marginBottom: "1rem" }}>Meta Ads</h2>
              <p className="type-body" style={{ marginBottom: "1rem" }}>
                When the goal is to reach a specific audience rather than capture existing search intent, Meta&rsquo;s targeting can be the right tool — particularly for awareness, positioning, or reaching a demographic that isn&rsquo;t actively searching yet.
              </p>
              <p className="type-body">
                Creative messaging and audience definition matter more here than on search. I treat Meta Ads as a brand and positioning channel, not just a lead-generation switch.
              </p>
            </div>

            <div
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: "3px",
                padding: "1.5rem 1.75rem",
                background: "var(--mist)",
                marginBottom: "2.5rem",
              }}
            >
              <p className="type-body-sm" style={{ color: "var(--ink)", margin: 0 }}>
                These channels work best when they&rsquo;re part of a coherent strategy — not isolated experiments. If a paid channel is relevant to your situation, that decision comes out of the diagnostic work, not the other way around.
              </p>
            </div>

            <Link href="/contact" className="cta-link">Discuss your situation &rarr;</Link>
          </div>
        </div>
      </section>

      <style>{`.cta-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--ink); color: var(--paper); font-family: var(--font-archivo), sans-serif; font-size: 0.9375rem; font-weight: 500; text-decoration: none; border-radius: 2px; } .cta-link:hover { background: var(--diagnostic-blue); }`}</style>
    </>
  );
}
