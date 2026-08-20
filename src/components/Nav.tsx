"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "How I Work", href: "/how-i-work" },
  { label: "Ways to Work Together", href: "/#ways-to-work" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "var(--paper)",
        borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
        transition: "border-color 0.2s ease",
      }}
    >
      <div className="container-editorial">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "3.75rem",
            gap: "2rem",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontSize: "1.125rem",
              color: "var(--ink)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              flexShrink: 0,
            }}
          >
            Raghav Kanva
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--ink)",
                  textDecoration: "none",
                  opacity: 0.75,
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "0.75")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
            <Link href="/contact" className="btn-primary">
              Discuss a Project
            </Link>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem",
                display: "none",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--ink)",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--ink)",
                  transition: "opacity 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--ink)",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: "3.75rem",
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--paper)",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "1.5rem",
          overflowY: "auto",
          zIndex: 49,
        }}
      >
        <nav aria-label="Mobile navigation" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <MobileLink href="/how-i-work" onClick={() => setMenuOpen(false)}>How I Work</MobileLink>
          <MobileLink href="/#ways-to-work" onClick={() => setMenuOpen(false)}>Ways to Work Together</MobileLink>
          <MobileLink href="/seo-ai-discoverability" onClick={() => setMenuOpen(false)}>SEO & AI Discoverability</MobileLink>
          <MobileLink href="/audit" onClick={() => setMenuOpen(false)}>Strategic Discoverability Audit</MobileLink>
          <MobileLink href="/advisory" onClick={() => setMenuOpen(false)}>Monthly Strategic Advisory</MobileLink>
          <MobileLink href="/for-agencies" onClick={() => setMenuOpen(false)}>For Agencies</MobileLink>
          <div style={{ height: "1px", background: "var(--hairline)", margin: "0.5rem 0" }} aria-hidden="true" />
          <MobileLink href="/supporting-channels" onClick={() => setMenuOpen(false)}>Supporting Channels</MobileLink>
          <div style={{ height: "1px", background: "var(--hairline)", margin: "0.5rem 0" }} aria-hidden="true" />
          <MobileLink href="/about" onClick={() => setMenuOpen(false)}>About</MobileLink>
          <MobileLink href="/insights" onClick={() => setMenuOpen(false)}>Insights & Research</MobileLink>
          <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</MobileLink>
        </nav>
        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "0.875rem 1.5rem",
              background: "var(--ink)",
              color: "var(--paper)",
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "0.9375rem",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Discuss a Project
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 899px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        .btn-primary {
          display: inline-block;
          padding: 0.5rem 1.125rem;
          background: var(--diagnostic-blue);
          color: var(--paper);
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 2px;
          white-space: nowrap;
          transition: background 0.15s ease;
        }
        .btn-primary:hover {
          background: #2e4558;
        }
      `}</style>
    </header>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        display: "block",
        padding: "0.875rem 0",
        fontSize: "1.0625rem",
        color: "var(--ink)",
        textDecoration: "none",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      {children}
    </Link>
  );
}
