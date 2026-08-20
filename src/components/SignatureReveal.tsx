"use client";

import { useEffect, useRef, useState } from "react";

/*
 * SignatureReveal — the hero's diagnostic moment.
 *
 * A bordered panel shows a plain business phrase ("We service all makes and
 * models.") on top. As the user scrolls, a clip-path mask peels from top to
 * bottom, revealing the sharper, diagnostic version beneath ("Premium &
 * performance vehicle specialist.", annotated with corner brackets, dashed
 * leaders, and a ruler-tick edge).
 *
 * prefers-reduced-motion: skip the scroll listener; render at a fixed ~55%
 * reveal so the "after" state is legible without motion.
 */

const SCROLL_SENSITIVITY = 280;
const REDUCED_MOTION_FIXED = 0.55;

export default function SignatureReveal() {
  const [progress, setProgress] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    if (mq.matches) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Start wipe when panel enters the viewport center-ish
      const entered = viewportH - rect.top;
      const raw = Math.max(0, entered / SCROLL_SENSITIVITY);
      setProgress(Math.min(1, raw));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reveal = prefersReduced ? REDUCED_MOTION_FIXED : progress;
  // clip-path: inset(top right bottom left) — wipe top-down
  const clipPath = `inset(${(1 - reveal) * 100}% 0 0 0)`;

  return (
    <div
      ref={sectionRef}
      aria-label="Example of diagnostic repositioning"
      style={{
        position: "relative",
        border: "1px solid var(--hairline)",
        borderRadius: "3px",
        overflow: "hidden",
        background: "var(--paper)",
        maxWidth: "480px",
        userSelect: "none",
      }}
    >
      {/* Ruler-tick left edge */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          background: "var(--diagnostic-blue)",
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "2px",
          top: 0,
          bottom: 0,
          width: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          paddingLeft: "2px",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i % 3 === 0 ? "8px" : "5px",
              height: "1px",
              background: "var(--diagnostic-blue)",
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Base layer — "AS WRITTEN ON THE SITE" */}
      <div style={{ padding: "2rem 1.75rem 2rem 2.25rem" }}>
        <p
          className="type-eyebrow"
          style={{ marginBottom: "0.75rem", opacity: 0.5 }}
        >
          As written on the site
        </p>
        <p
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontSize: "1.0625rem",
            color: "var(--ink)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          &ldquo;We service all makes and models.&rdquo;
        </p>
      </div>

      {/* Reveal layer — "AS DIAGNOSED" */}
      <div
        aria-hidden={reveal < 0.2}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--paper)",
          clipPath,
          transition: prefersReduced ? "none" : "clip-path 0.05s linear",
          padding: "2rem 1.75rem 2rem 2.25rem",
        }}
      >
        {/* Corner bracket — top left */}
        <CornerBracket position="top-left" />
        {/* Corner bracket — top right */}
        <CornerBracket position="top-right" />
        {/* Corner bracket — bottom right */}
        <CornerBracket position="bottom-right" />

        <p
          className="type-eyebrow"
          style={{ marginBottom: "0.75rem", color: "var(--diagnostic-blue)" }}
        >
          As diagnosed
        </p>
        <p
          style={{
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontStyle: "italic",
            fontSize: "1.0625rem",
            color: "var(--diagnostic-blue)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          &ldquo;Premium &amp; performance vehicle specialist.&rdquo;
        </p>

        {/* Dashed leader annotation */}
        <div
          aria-hidden="true"
          style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              flex: 1,
              borderTop: "1px dashed var(--diagnostic-blue)",
              opacity: 0.4,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.625rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--diagnostic-blue)",
              opacity: 0.6,
            }}
          >
            audience-first repositioning
          </span>
        </div>
      </div>
    </div>
  );
}

function CornerBracket({ position }: { position: "top-left" | "top-right" | "bottom-right" }) {
  const size = 10;
  const thickness = 1.5;
  const color = "var(--diagnostic-blue)";
  const opacity = 0.5;

  const styles: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
  };

  if (position === "top-left") {
    return (
      <div
        aria-hidden="true"
        style={{
          ...styles,
          top: 8,
          left: 20,
          borderTop: `${thickness}px solid ${color}`,
          borderLeft: `${thickness}px solid ${color}`,
          opacity,
        }}
      />
    );
  }
  if (position === "top-right") {
    return (
      <div
        aria-hidden="true"
        style={{
          ...styles,
          top: 8,
          right: 8,
          borderTop: `${thickness}px solid ${color}`,
          borderRight: `${thickness}px solid ${color}`,
          opacity,
        }}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      style={{
        ...styles,
        bottom: 8,
        right: 8,
        borderBottom: `${thickness}px solid ${color}`,
        borderRight: `${thickness}px solid ${color}`,
        opacity,
      }}
    />
  );
}
