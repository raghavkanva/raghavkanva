import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Raghav Kanva",
  description: "Tell me what you're trying to solve. Let's talk.",
};

export default function Contact() {
  return (
    <>
      <section style={{ background: "var(--paper)", padding: "4rem 0 3rem" }}>
        <div className="container-editorial">
          <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>Get in touch</p>
          <h1 className="type-h1" style={{ maxWidth: "520px", marginBottom: "1rem" }}>
            Tell me what you&rsquo;re trying to solve.
          </h1>
          <p className="type-body" style={{ maxWidth: "480px", color: "var(--ink)", opacity: 0.75 }}>
            No brief required. Just tell me where you are and what&rsquo;s not working.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--paper)", padding: "3rem 0 4rem", borderTop: "1px solid var(--hairline)" }}>
        <div className="container-editorial">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Form */}
            <div style={{ maxWidth: "540px" }}>
              <form
                action="mailto:raghavkanva@gmail.com"
                method="get"
                encType="text/plain"
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <div>
                  <label htmlFor="name" className="field-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="field-label">Company or organization</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="field-label">
                    Tell me a bit about where you are today — whether you&rsquo;re starting from scratch or already have SEO running, and what&rsquo;s not working.
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    className="field-input"
                    style={{ resize: "vertical", minHeight: "140px" }}
                  />
                </div>
                <div>
                  <button type="submit" className="submit-btn">
                    Send Project Details
                  </button>
                </div>
              </form>
            </div>

            {/* Direct contact */}
            <div>
              <p className="type-eyebrow" style={{ marginBottom: "1.25rem" }}>Direct contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-archivo), sans-serif", fontSize: "0.875rem", color: "var(--ink)", opacity: 0.55, marginBottom: "0.25rem" }}>Email</p>
                  <a
                    href="mailto:raghavkanva@gmail.com"
                    style={{ fontFamily: "var(--font-archivo), sans-serif", fontSize: "0.9375rem", color: "var(--diagnostic-blue)", textDecoration: "none" }}
                  >
                    raghavkanva@gmail.com
                  </a>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-archivo), sans-serif", fontSize: "0.875rem", color: "var(--ink)", opacity: 0.55, marginBottom: "0.25rem" }}>LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/raghavkanva"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-archivo), sans-serif", fontSize: "0.9375rem", color: "var(--diagnostic-blue)", textDecoration: "none" }}
                  >
                    linkedin.com/in/raghavkanva
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .field-label {
          display: block;
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.875rem;
          color: var(--ink);
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        .field-input {
          display: block;
          width: 100%;
          padding: 0.75rem 0.875rem;
          border: 1px solid var(--hairline);
          border-radius: 2px;
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.9375rem;
          transition: border-color 0.15s ease;
          box-sizing: border-box;
        }
        .field-input:focus {
          border-color: var(--diagnostic-blue);
          outline: none;
        }
        .submit-btn {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          background: var(--ink);
          color: var(--paper);
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .submit-btn:hover {
          background: var(--diagnostic-blue);
        }
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 3fr 2fr !important; }
        }
      `}</style>
    </>
  );
}
