import { SOCIALS } from "@/constants/data";

export default function SocialSidebar() {
  return (
    <aside
      className="social-sidebar"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: "56px",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          width: "1px",
          flex: 1,
          maxHeight: "80px",
          background:
            "linear-gradient(to bottom, transparent, var(--border))",
          marginBottom: "8px",
        }}
      />

      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          title={s.name}
          aria-label={s.name}
        >
          {s.icon}
        </a>
      ))}

      <div
        style={{
          width: "1px",
          flex: 1,
          maxHeight: "80px",
          background: "linear-gradient(to top, transparent, var(--border))",
          marginTop: "8px",
        }}
      />
    </aside>
  );
}
