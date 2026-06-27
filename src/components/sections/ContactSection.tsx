export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{ padding: "80px 0 120px", scrollMarginTop: "60px" }}
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
          04 — Contact
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Let&apos;s talk
        </h2>
        <p
          style={{
            color: "var(--muted2)",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          Open to new opportunities, collaborations, or just a good
          conversation.
        </p>
      </div>

      <div className="card" style={{ marginBottom: "20px" }}>
        {[
          {
            label: "Email",
            value: "sandavirage@gmail.com",
            hint: "Best way to reach me",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=sandavirage@gmail.com",
          },
          {
            label: "GitHub",
            value: "github.com/MokshaSan",
            hint: "See my code",
            href: "https://github.com/MokshaSan",
          },
          {
            label: "LinkedIn",
            value: "linkedin.com/in/moksha-san",
            hint: "Professional profile",
            href: "https://www.linkedin.com/in/moksha-san",
          },
        ].map(({ label, value, hint, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="info-row"
            style={{ textDecoration: "none", display: "flex" }}
          >
            <div style={{ minWidth: "80px" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--accent2)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  marginTop: "1px",
                }}
              >
                {hint}
              </div>
            </div>
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>↗</span>
          </a>
        ))}
      </div>

    </section>
  );
}
