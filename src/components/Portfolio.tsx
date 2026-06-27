"use client";

import { useState, useEffect } from "react";
import { NAV } from "@/constants/data";
import "@/styles/portfolio.css";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <Navbar
        active={active}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />

      <SocialSidebar />

      <div className="main-wrap" style={{ paddingLeft: "56px" }}>
        <main
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <HomeSection scrollTo={scrollTo} />
          <AboutSection />
          <ProjectsSection />
          <StackSection />
          <ContactSection />
        </main>
      </div>

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
