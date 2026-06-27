"use client";

import Image from "next/image";
import DotGrid from "@/components/DotGrid";
import { useTypingEffect } from "@/components/ui/TypingEffect";
import { ROLES } from "@/constants/data";

interface HomeSectionProps {
  scrollTo: (id: string) => void;
}

export default function HomeSection({ scrollTo }: HomeSectionProps) {
  const role = useTypingEffect(ROLES);

  return (
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
              priority
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
  );
}
