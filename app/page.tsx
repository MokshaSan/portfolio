"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    name: "DevDash",
    tag: "Hackathon Website",
    desc: "I made the DevDash website for annual campus hackathion.",
    links: ["devdash-ucl.vercel.app"],
    badge: "Next.js · Tailwind CSS",
    color: "#3B82F6",
  },
 ];

const STACK = [
  { cat: "Languages", items: ["TypeScript", "JavaScript", "C++", "Python"] },
  { cat: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { cat: "Backend", items: ["Node.js", "Postgres", "Redis", "Express"] },
  { cat: "Infra", items: ["Vercel", "Docker", "Kubernetes", "AWS"] },
];

const ROLES = [
  "Software Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Systems Thinker",
];

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/MokshaSan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/MoksaSan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:sandavirage@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "RSS",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M6.18 15.64a2.18 2.18 0 012.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 012.18-2.18M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44m0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z" />
      </svg>
    ),
  },
];

function useTypingEffect(words: readonly string[], speed = 75, pause = 2000) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const display = words[wordIdx]?.slice(0, charIdx) ?? "";

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }, speed);
    }
    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function DotGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.35 }}
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#3B82F6" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="mask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" mask="url(#mask)" />
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const role = useTypingEffect(ROLES);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      style={
        {
          "--bg": "#070B14",
          "--surface": "#0D1526",
          "--surface2": "#131E35",
          "--border": "#1E2D4A",
          "--fg": "#E8EDF5",
          "--muted": "#5A7099",
          "--muted2": "#8BA0C0",
          "--accent": "#3B82F6",
          "--accent2": "#06B6D4",
          "--accent-subtle": "rgba(59,130,246,0.08)",
          "--accent-border": "rgba(59,130,246,0.2)",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          background: "var(--bg)",
          color: "var(--fg)",
          minHeight: "100vh",
        } as React.CSSProperties
      }
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #070B14; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #070B14; }
        ::-webkit-scrollbar-thumb { background: #1E2D4A; border-radius: 3px; }
        a { color: inherit; text-decoration: none; }

        .nav-link {
          position: relative;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          color: var(--muted2);
          padding: 6px 2px;
          transition: color 0.15s;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s ease;
          border-radius: 1px;
        }
        .nav-link:hover { color: var(--fg); }
        .nav-link.active { color: var(--fg); }
        .nav-link.active::after { transform: scaleX(1); }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          color: var(--muted2);
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          transition: color 0.15s, background 0.15s, border-color 0.15s, transform 0.15s;
          text-decoration: none;
        }
        .social-btn:hover {
          color: var(--fg);
          background: var(--surface2);
          border-color: var(--border);
          transform: translateX(2px);
        }

        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px 24px;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .card:hover {
          border-color: rgba(59,130,246,0.3);
          background: #0F1B30;
          transform: translateY(-1px);
        }

        .btn-primary {
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          letter-spacing: 0.01em;
        }
        .btn-primary:hover { background: #2563EB; transform: translateY(-1px); }

        .btn-ghost {
          background: transparent;
          color: var(--muted2);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.15s;
        }
        .btn-ghost:hover {
          color: var(--fg);
          border-color: rgba(59,130,246,0.3);
          background: var(--accent-subtle);
        }

        .btn-link {
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 12px;
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: var(--muted2);
          cursor: pointer;
          transition: all 0.15s;
        }
        .btn-link:hover {
          color: var(--accent2);
          border-color: rgba(6,182,212,0.3);
        }

        .stack-pill {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 6px 14px;
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: var(--muted2);
          cursor: default;
          transition: all 0.15s;
        }
        .stack-pill:hover {
          color: var(--fg);
          border-color: rgba(59,130,246,0.3);
          background: var(--accent-subtle);
        }

        .info-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }
        .info-row:last-child { border-bottom: none; }

        .stat-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px 18px;
          flex: 1;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 60px; left: 0; right: 0;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 16px 24px;
          flex-direction: column;
          gap: 4px;
          z-index: 90;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu-item {
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--muted2);
          cursor: pointer;
          transition: all 0.15s;
        }
        .mobile-menu-item:hover, .mobile-menu-item.active {
          color: var(--fg);
          background: var(--surface);
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } }
        @keyframes pulse-dot { 0%,100%{ opacity:0.5; transform:scale(1); } 50%{ opacity:1; transform:scale(1.5); } }

        .hero-animate { animation: fadeInUp 0.6s ease both; }
        .hero-animate-2 { animation: fadeInUp 0.6s 0.1s ease both; }
        .hero-animate-3 { animation: fadeInUp 0.6s 0.2s ease both; }
        .hero-animate-4 { animation: fadeInUp 0.6s 0.3s ease both; }

        .project-accent-bar {
          height: 3px;
          border-radius: 2px;
          margin-bottom: 18px;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .social-sidebar { display: none !important; }
          .main-wrap { padding-left: 0 !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ── TOP NAVBAR ─────────────────────────────────────────── */}
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
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            M
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "-0.01em",
              color: "var(--fg)",
            }}
          >
            moksha<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
        </div>

        {/* Desktop nav links */}
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

        {/* Right CTA */}
        <div
          className="desktop-nav"
          style={{ display: "flex", marginLeft: "32px" }}
        >
          <button
            className="btn-primary"
            style={{ padding: "7px 16px", fontSize: "12px" }}
            onClick={() => scrollTo("contact")}
          >
            Hire me →
          </button>
        </div>

        {/* Hamburger */}
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
      </header>

      {/* Mobile menu */}
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

      {/* ── SOCIAL SIDEBAR ─────────────────────────────────────── */}
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
        {/* Top line */}
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

        {/* Bottom line */}
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

      {/* ── MAIN CONTENT ───────────────────────────────────────── */}
      <div className="main-wrap" style={{ paddingLeft: "56px" }}>
        <main
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          {/* ── HOME ─────────────────────────────────────────────── */}
          <section
            id="home"
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              position: "relative",
              scrollMarginTop: "60px",
            }}
          >
            <DotGrid />
            <div
              style={{ position: "relative", zIndex: 1, paddingTop: "20px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    className="hero-animate"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "rgba(59,130,246,0.08)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      borderRadius: "20px",
                      padding: "5px 14px 5px 8px",
                      marginBottom: "28px",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#10B981",
                        display: "inline-block",
                        animation: "pulse-dot 2s ease-in-out infinite",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--accent)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      Available for work
                    </span>
                  </div>
                  <h1
                    className="hero-animate-2"
                    style={{
                      fontSize: "clamp(38px, 7vw, 62px)",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      lineHeight: 1.04,
                      marginBottom: "22px",
                    }}
                  >
                    Building software
                    <br />
                    <span style={{ color: "var(--muted)" }}>that matters.</span>
                  </h1>
                  {/* Typing terminal */}
                  <div
                    className="hero-animate-3"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "11px 18px",
                      marginBottom: "28px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ color: "#10B981" }}>$</span>
                    <span style={{ color: "var(--muted2)" }}>whoami</span>
                    <span style={{ color: "var(--border)", margin: "0 2px" }}>
                      —
                    </span>
                    <span style={{ color: "var(--fg)", minWidth: "210px" }}>
                      {role}
                      <span
                        style={{
                          display: "inline-block",
                          width: "2px",
                          height: "13px",
                          background: "var(--accent2)",
                          verticalAlign: "middle",
                          animation: "blink 1s step-end infinite",
                          marginLeft: "2px",
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/download.jpg"
                    alt="face"
                    width={400}
                    height={400}
                    className="rounded-2xl"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <p
                className="hero-animate-3"
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--muted2)",
                  maxWidth: "500px",
                  marginBottom: "36px",
                }}
              >
                I craft performant, accessible interfaces and thoughtful backend
                systems. Five years shipping products people actually use.
              </p>

              <div
                className="hero-animate-4"
                style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <button
                  className="btn-primary"
                  onClick={() => scrollTo("projects")}
                >
                  View projects →
                </button>
                <button
                  className="btn-ghost"
                  onClick={() => scrollTo("contact")}
                >
                  Get in touch
                </button>
              </div>
            </div>
          </section>

          {/* ── ABOUT ────────────────────────────────────────────── */}
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

            {/* Stats row */}
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

          {/* ── PROJECTS ─────────────────────────────────────────── */}
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

            {/* <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {PROJECTS.map(({ name, tag, desc, links, badge, color }) => (
                <div key={name} className="card">
                  <div className="project-accent-bar" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                  <div style={{
                    display: "flex", alignItems: "flex-start",
                    justifyContent: "space-between", gap: "12px",
                    marginBottom: "12px", flexWrap: "wrap",
                  }}>
                    <div>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px",
                      }}>
                        <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                          {name}
                        </span>
                        <span style={{
                          fontSize: "11px", padding: "2px 8px",
                          borderRadius: "4px", fontWeight: 500,
                          border: "1px solid var(--border)",
                          color: "var(--muted2)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}>{tag}</span>
                      </div>
                    </div>
                    <span style={{
                      fontSize: "11px", padding: "3px 10px",
                      borderRadius: "4px", fontWeight: 600,
                      background: `${color}18`,
                      border: `1px solid ${color}40`,
                      color: color,
                      fontFamily: "'JetBrains Mono', monospace",
                      whiteSpace: "nowrap",
                    }}>{badge}</span>
                  </div>
                  <p style={{
                    fontSize: "13px", lineHeight: 1.7,
                    color: "var(--muted2)", marginBottom: "16px",
                  }}>{desc}</p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {links.map((l) => (
                      <button key={l} className="btn-link">{l} ↗</button>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}
          </section>

          {/* ── STACK ────────────────────────────────────────────── */}
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

          {/* ── CONTACT ──────────────────────────────────────────── */}
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
                },
                {
                  label: "GitHub",
                  value: "github.com/MokshaSan",
                  hint: "See my code",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/MoksaSan",
                  hint: "Professional profile",
                },
              ].map(({ label, value, hint }) => (
                <div key={label} className="info-row">
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
                  <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              style={{ width: "100%", padding: "13px", fontSize: "14px" }}
            >
              Send me a message →
            </button>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "20px 40px",
          paddingLeft: "96px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "var(--muted)",
          }}
        >
          © Moksha Sandavirage
        </span>
        <span style={{ fontSize: "12px", color: "var(--muted)" }}>
          Designed & developed with ♥
        </span>
      </footer>
    </div>
  );
}
