import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--hairline)",
        background: "var(--paper)",
        padding: "3rem 0 2rem",
        marginTop: "auto",
      }}
    >
      <div className="container-editorial">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              justifyContent: "space-between",
            }}
          >
            {/* Identity */}
            <div style={{ minWidth: "200px", maxWidth: "260px" }}>
              <p
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontSize: "1rem",
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                Raghav Kanva
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--ink)", opacity: 0.6, lineHeight: 1.5 }}>
                Independent SEO &amp; AI Discoverability Consultant
              </p>
            </div>

            {/* Work */}
            <FooterCol
              heading="Work"
              links={[
                { label: "SEO & AI Discoverability", href: "/seo-ai-discoverability" },
                { label: "Strategic Discoverability Audit", href: "/audit" },
                { label: "Monthly Strategic Advisory", href: "/advisory" },
                { label: "For Agencies", href: "/for-agencies" },
              ]}
            />

            {/* Explore */}
            <FooterCol
              heading="Explore"
              links={[
                { label: "About", href: "/about" },
                { label: "How I Work", href: "/how-i-work" },
                { label: "Insights & Research", href: "/insights" },
                { label: "Supporting Channels", href: "/supporting-channels" },
              ]}
            />

            {/* Contact */}
            <FooterCol
              heading="Get in touch"
              links={[
                { label: "Contact", href: "/contact" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/raghavkanva",
                  external: true,
                },
              ]}
            />
          </div>

          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--ink)",
              opacity: 0.4,
              borderTop: "1px solid var(--hairline)",
              paddingTop: "1.5rem",
            }}
          >
            © {new Date().getFullYear()} Raghav Kanva
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="type-eyebrow" style={{ marginBottom: "1rem" }}>
        {heading}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.9rem",
                  color: "var(--ink)",
                  textDecoration: "none",
                  opacity: 0.7,
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                style={{
                  fontSize: "0.9rem",
                  color: "var(--ink)",
                  textDecoration: "none",
                  opacity: 0.7,
                }}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
