import { PROJECTS } from "@/constants/data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ padding: "80px 0", scrollMarginTop: "60px" }}
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
          02 — Projects
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Things I have built
        </h2>
        <p
          style={{
            color: "var(--muted2)",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          A selection of personal and open-source work.
        </p>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        {PROJECTS.map(({ name, tag, desc, links, badge, color }) => (
          <div key={name} className="card">
            <div
              className="project-accent-bar"
              style={{
                background: `linear-gradient(90deg, ${color}, transparent)`,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "12px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {name}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontWeight: 500,
                      border: "1px solid var(--border)",
                      color: "var(--muted2)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  fontWeight: 600,
                  background: `${color}18`,
                  border: `1px solid ${color}40`,
                  color: color,
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "var(--muted2)",
                marginBottom: "16px",
              }}
            >
              {desc}
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {links.map((l) => (
                <a
                  key={l}
                  href={`https://${l}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  {l} ↗
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
