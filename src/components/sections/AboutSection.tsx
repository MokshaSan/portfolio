export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ padding: "96px 0 80px", scrollMarginTop: "60px" }}
    >
      <div style={{ marginBottom: "40px" }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          01 — About
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          A bit about me
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        <div className="card" style={{ gridColumn: "1 / -1" }}>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.85,
              color: "var(--muted2)",
              marginBottom: "14px",
            }}
          >
            Hey — I&apos;m{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
              Moksha Sandavirage
            </strong>
            . I&apos;m a software engineer who cares deeply about the
            craft of building things. Not just that they work, but that
            they work{" "}
            <em
              style={{
                color: "var(--fg)",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              well
            </em>{" "}
            — fast, accessible, maintainable, and clear.
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.85,
              color: "var(--muted2)",
            }}
          >
            I spend most of my time at the intersection of systems design
            and product thinking. I&apos;ve shipped features at scale for
            fintech and developer tools companies, and I believe the best
            software is born from genuine curiosity about the problem.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {[
          { label: "Location", value: "Colombo, Sri Lanka", icon: "📍" },
          { label: "Experience", value: "5+ years", icon: "⚡" },
          { label: "Focus", value: "Full-stack & Systems", icon: "🔧" },
        ].map(({ label, value, icon }) => (
          <div
            key={label}
            className="stat-box"
            style={{ minWidth: "140px" }}
          >
            <div style={{ fontSize: "18px", marginBottom: "6px" }}>
              {icon}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--muted)",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--fg)",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
