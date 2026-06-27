import { STACK } from "@/constants/data";

export default function StackSection() {
  return (
    <section
      id="stack"
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
          03 — Stack
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Tools I reach for
        </h2>
        <p
          style={{
            color: "var(--muted2)",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          Technologies I use daily and trust in production.
        </p>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "28px" }}
      >
        {STACK.map(({ cat, items }) => (
          <div key={cat}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--muted)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {cat}
            </p>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {items.map((item) => (
                <div key={item} className="stack-pill">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
