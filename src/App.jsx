import { useState, useEffect, useRef } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    name: "Orbit UI",
    tag: "Design System",
    desc: "A component library built on Radix primitives with a custom token system. Ships with dark mode, accessibility baked in, and zero runtime overhead.",
    links: ["GitHub", "Docs"],
    badge: "TypeScript",
  },
  {
    name: "Relay",
    tag: "Real-time App",
    desc: "Collaborative whiteboard with operational transforms for conflict-free concurrent editing. WebSocket + Redis pub/sub backend, sub-20ms latency.",
    links: ["GitHub", "Live"],
    badge: "Go · React",
  },
  {
    name: "Cartograph",
    tag: "Data Viz",
    desc: "Interactive geospatial analytics dashboard. Processes 10M+ data points client-side using WebAssembly and DeckGL for 60fps renders.",
    links: ["GitHub", "Demo"],
    badge: "Rust · WASM",
  },
  {
    name: "Seedling",
    tag: "CLI Tool",
    desc: "Project scaffolding CLI with opinionated defaults and composable templates. Cuts new project setup from 2 hours to under 3 minutes.",
    links: ["GitHub", "npm"],
    badge: "Node.js",
  },
];

const STACK = [
  { cat: "Languages", items: ["TypeScript", "Go", "Rust", "Python"] },
  {
    cat: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  { cat: "Backend", items: ["Node.js", "Postgres", "Redis", "GraphQL"] },
  { cat: "Infra", items: ["Docker", "Kubernetes", "AWS", "Vercel"] },
];

const ROLES = [
  "Software Engineer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Systems Thinker",
];

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Badge({ children, variant = "default" }) {
  const styles = {
    default: {
      background: "var(--accent-subtle)",
      color: "var(--accent)",
      border: "1px solid var(--accent-border)",
    },
    outline: {
      background: "transparent",
      color: "var(--muted)",
      border: "1px solid var(--border)",
    },
  };
  return (
    <span
      style={{
        ...styles[variant],
        fontSize: "11px",
        fontWeight: 500,
        padding: "2px 8px",
        borderRadius: "4px",
        letterSpacing: "0.02em",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

function Separator() {
  return <div style={{ borderTop: "1px solid var(--border)", margin: "0" }} />;
}

function Section({ id, children }) {
  return (
    <section id={id} style={{ padding: "64px 0", scrollMarginTop: "24px" }}>
      {children}
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        color: "var(--muted)",
        textTransform: "uppercase",
        marginBottom: "8px",
      }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontSize: "24px",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "var(--fg)",
        marginBottom: "4px",
      }}
    >
      {children}
    </h2>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const role = useTypingEffect(ROLES);
  const mainRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div
      style={{
        "--bg": "#09090B",
        "--surface": "#18181B",
        "--surface2": "#27272A",
        "--border": "#27272A",
        "--fg": "#FAFAFA",
        "--muted": "#71717A",
        "--accent": "#818CF8",
        "--accent-subtle": "rgba(129,140,248,0.08)",
        "--accent-border": "rgba(129,140,248,0.25)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--surface2); border-radius: 3px; }
        a { color: inherit; text-decoration: none; }
        .nav-link { transition: color 0.15s; cursor: pointer; }
        .nav-link:hover { color: var(--fg) !important; }
        .card { transition: border-color 0.2s, background 0.2s; }
        .card:hover { border-color: rgba(129,140,248,0.35) !important; background: #1C1C1F !important; }
        .btn { transition: background 0.15s, color 0.15s, border-color 0.15s; cursor: pointer; }
        .btn:hover { background: var(--surface2) !important; }
        .btn-accent:hover { background: #6366F1 !important; }
        .stack-item { transition: border-color 0.15s, color 0.15s; }
        .stack-item:hover { border-color: rgba(129,140,248,0.4) !important; color: var(--fg) !important; }
        @media (max-width: 768px) {
          .sidebar { transform: translateX(-100%); transition: transform 0.2s; position: fixed !important; z-index: 50; height: 100vh; }
          .sidebar.open { transform: translateX(0); }
          .main-content { margin-left: 0 !important; }
          .mobile-nav-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav-btn { display: none !important; }
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={`sidebar${sidebarOpen ? " open" : ""}`}
        style={{
          width: "220px",
          minHeight: "100vh",
          borderRight: "1px solid var(--border)",
          background: "var(--bg)",
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0",
          flexShrink: 0,
        }}
      >
        <div style={{ padding: "0 20px 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #818CF8, #6366F1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              A
            </div>
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Alex Morgan
              </div>
              <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                Portfolio
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <nav style={{ padding: "16px 12px", flex: 1 }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--muted)",
              textTransform: "uppercase",
              padding: "0 8px",
              marginBottom: "8px",
            }}
          >
            Navigation
          </p>
          {NAV.map(({ id, label }) => (
            <div
              key={id}
              className="nav-link"
              onClick={() => scrollTo(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 8px",
                borderRadius: "6px",
                marginBottom: "2px",
                fontSize: "13px",
                fontWeight: active === id ? 500 : 400,
                color: active === id ? "var(--fg)" : "var(--muted)",
                background: active === id ? "var(--surface)" : "transparent",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: active === id ? "var(--accent)" : "transparent",
                  flexShrink: 0,
                }}
              />
              {label}
            </div>
          ))}
        </nav>

        <Separator />

        <div style={{ padding: "16px 20px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <button
                key={s}
                className="btn"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "5px 8px",
                  fontSize: "10px",
                  color: "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {s[0]}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile nav button */}
      <button
        className="mobile-nav-btn btn"
        onClick={() => setSidebarOpen((o) => !o)}
        style={{
          position: "fixed",
          top: "16px",
          left: "16px",
          zIndex: 100,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "8px 12px",
          color: "var(--fg)",
          fontSize: "13px",
          fontFamily: "inherit",
          cursor: "pointer",
          display: "none",
        }}
      >
        ☰
      </button>

      {/* Main */}
      <main
        ref={mainRef}
        className="main-content"
        style={{
          flex: 1,
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* HOME */}
        <Section id="home">
          <div style={{ paddingTop: "48px" }}>
            <Badge>Available for work</Badge>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginTop: "20px",
                marginBottom: "16px",
              }}
            >
              Building software
              <br />
              <span style={{ color: "var(--muted)" }}>that matters.</span>
            </h1>

            {/* Typing role */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "10px 16px",
                marginBottom: "28px",
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "var(--accent)" }}>$</span>
              <span style={{ color: "var(--muted)" }}>whoami</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span style={{ color: "var(--fg)", minWidth: "200px" }}>
                {role}
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "14px",
                    background: "var(--accent)",
                    verticalAlign: "middle",
                    animation: "blink 1s step-end infinite",
                    marginLeft: "1px",
                  }}
                />
              </span>
            </div>
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "var(--muted)",
                maxWidth: "480px",
                marginBottom: "32px",
              }}
            >
              I craft performant, accessible interfaces and thoughtful backend
              systems. Five years of shipping products people actually use.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                className="btn btn-accent"
                onClick={() => scrollTo("projects")}
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  border: "1px solid transparent",
                  borderRadius: "8px",
                  padding: "9px 18px",
                  fontSize: "13px",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                View projects
              </button>
              <button
                className="btn"
                onClick={() => scrollTo("contact")}
                style={{
                  background: "var(--surface)",
                  color: "var(--fg)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "9px 18px",
                  fontSize: "13px",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ABOUT */}
        <Section id="about">
          <SectionLabel>About</SectionLabel>
          <SectionTitle>A bit about me</SectionTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              marginBottom: "24px",
            }}
          >
            Who I am, what I value, how I work.
          </p>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "#A1A1AA",
                marginBottom: "16px",
              }}
            >
              Hey — I'm Alex. I'm a software engineer who cares deeply about the
              craft of building things. Not just that they work, but that they
              work <em style={{ color: "var(--fg)" }}>well</em> — fast,
              accessible, maintainable, and clear to the people who use them.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#A1A1AA" }}>
              I spend most of my time at the intersection of systems design and
              product thinking. I've shipped features at scale for fintech and
              developer tools companies, and I believe the best software is born
              from genuine curiosity about the problem.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {[
              { label: "Location", value: "San Francisco, CA" },
              { label: "Experience", value: "5+ years" },
              { label: "Education", value: "CS, UC Berkeley" },
              { label: "Focus", value: "Full-stack & Systems" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
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
                    fontWeight: 500,
                    color: "var(--fg)",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* PROJECTS */}
        <Section id="projects">
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle>Things I've built</SectionTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              marginBottom: "24px",
            }}
          >
            A selection of personal and open-source work.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {PROJECTS.map(({ name, tag, desc, links, badge }) => (
              <div
                key={name}
                className="card"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {name}
                      </span>
                      <Badge variant="outline">{tag}</Badge>
                    </div>
                  </div>
                  <Badge>{badge}</Badge>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "var(--muted)",
                    marginBottom: "14px",
                  }}
                >
                  {desc}
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  {links.map((l) => (
                    <button
                      key={l}
                      className="btn"
                      style={{
                        background: "transparent",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "4px 12px",
                        fontSize: "12px",
                        color: "var(--muted)",
                        fontFamily: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      {l} ↗
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* STACK */}
        <Section id="stack">
          <SectionLabel>Stack</SectionLabel>
          <SectionTitle>Tools I reach for</SectionTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              marginBottom: "24px",
            }}
          >
            Technologies I use daily and trust in production.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {STACK.map(({ cat, items }) => (
              <div key={cat}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((item) => (
                    <div
                      key={item}
                      className="stack-item"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--muted)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* CONTACT */}
        <Section id="contact">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Let's talk</SectionTitle>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              marginBottom: "28px",
            }}
          >
            Open to new opportunities, collaborations, or just a good
            conversation.
          </p>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                { label: "Email", value: "alex@example.com" },
                { label: "GitHub", value: "github.com/alexmorgan" },
                { label: "LinkedIn", value: "linkedin.com/in/alexmorgan" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      minWidth: "70px",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "var(--accent)",
                      fontFamily: "'SF Mono', 'Fira Code', monospace",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="btn btn-accent"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "inherit",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send me a message →
          </button>
        </Section>

        <div style={{ height: "64px" }} />
      </main>
    </div>
  );
}
