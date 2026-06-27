"use client";

import { NAV } from "@/constants/data";

interface NavbarProps {
  active: string;
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  scrollTo: (id: string) => void;
}

export default function Navbar({
  active,
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
}: NavbarProps) {
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          background: scrolled ? "rgba(7,11,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transition:
            "background 0.25s, border-color 0.25s, backdrop-filter 0.25s",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "-0.01em",
              color: "var(--fg)",
            }}
          >
            Moksha Sandavirage
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <nav
            className="desktop-nav"
            style={{ display: "flex", gap: "32px", alignItems: "center" }}
          >
            {NAV.map(({ id, label }) => (
              <span
                key={id}
                className={`nav-link${active === id ? " active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </span>
            ))}
          </nav>

          <div className="desktop-nav" style={{ display: "flex" }}>
            <button
              className="btn-primary"
              style={{ padding: "7px 16px", fontSize: "12px" }}
              onClick={() => scrollTo("contact")}
            >
              Hire me →
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen((o) => !o)}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "7px 10px",
              color: "var(--fg)",
              fontSize: "16px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
        {NAV.map(({ id, label }) => (
          <div
            key={id}
            className={`mobile-menu-item${active === id ? " active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </div>
        ))}
      </div>
    </>
  );
}
