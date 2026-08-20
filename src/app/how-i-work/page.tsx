import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Work — Raghav Kanva",
  description:
    "Before starting SEO, I want to understand the business properly. The method, explained.",
};

export default function HowIWork() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>
            How I Work
          </p>
          <h1 className="type-h1" style={{ maxWidth: "600px", marginBottom: "0" }}>
            Understanding the business before touching a keyword.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div style={{ maxWidth: "640px" }}>

            <p className="type-body" style={{ marginBottom: "1.5rem" }}>
              I work with two kinds of clients.
            </p>
            <p className="type-body" style={{ marginBottom: "1.5rem" }}>
              One kind wants me to do their SEO fully, right from the beginning.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              The other kind has already tried different methods, but they are still not getting good leads, the right leads, or the results they expected. I work with them too.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>
              I understand the business first
            </h2>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              Before starting SEO, I want to understand the business properly.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              What kind of business it is. What services they provide. Who their audience segments are. What their unique selling points are. What their pricing is. What their expectations are. How they want to work.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>
              I dig deeper through interviews
            </h2>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              I also like to dig deeper through interviews.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              For example, a car service company may say they service all types of cars. But when I ask more questions, they may say they are actually very strong in premium cars, with the tools and expertise for repairing them.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              In the same way, an interior design company may say they do interior design for everyone. But when I dig deeper, I may find they are actually more experienced with apartments, IT parks, offices, or a particular type of project.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              When I find something like this, the whole approach should change.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              The keywords should change. The content should change. The targeting should change. The positioning should change. The way we approach the whole online strategy should change, based on what the business is actually strong at.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>
              When leads aren&rsquo;t working, I check the audience first
            </h2>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              If a client is getting traffic but not getting the right leads or the right results, I first check whether they are targeting the right audience.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              Without targeting the right audience, we cannot expect the correct leads.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              I also check how they are currently getting leads, whether through blogs, organic search, ads, referrals, or some other source.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              Then I choose the method based on the requirement.
            </p>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              For example, if there is an urgent requirement for leads, blogs alone may not help immediately. In that case, ads may be more suitable.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              Referrals can also work well if the business already has a good network.
            </p>

            <h2 className="type-h2" style={{ marginBottom: "1rem" }}>
              My approach, in short
            </h2>
            <p className="type-body" style={{ marginBottom: "1.25rem" }}>
              I start by understanding the business, the audience, the specialization, the urgency, and where the leads are already coming from.
            </p>
            <p className="type-body" style={{ marginBottom: "2.5rem" }}>
              After that, I decide what should be done through SEO, content, ads, referrals, or other methods.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--hairline)",
                paddingTop: "2rem",
              }}
            >
              <p className="type-body" style={{ marginBottom: "1.25rem" }}>
                If this sounds like the kind of thinking your situation needs, the next step is a conversation. We&rsquo;ll talk about where you are, what you&rsquo;ve tried, and whether a{" "}
                <Link
                  href="/audit"
                  style={{ color: "var(--diagnostic-blue)", textDecoration: "underline" }}
                >
                  Strategic Discoverability Audit
                </Link>{" "}
                makes sense for you.
              </p>
              <Link href="/contact" className="cta-inline">
                Start that conversation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cta-inline {
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
        .cta-inline:hover {
          background: var(--diagnostic-blue);
        }
      `}</style>
    </>
  );
}
