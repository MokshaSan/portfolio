"use client";

import { useEffect, useState } from "react";
import { META, NAV } from "@/constants/data";
import "@/styles/portfolio.css";
import Navbar from "@/components/Navbar";
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
      { rootMargin: "-25% 0px -60% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const year = new Date().getFullYear();

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar
        active={active}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />

      <main id="main">
        <HomeSection scrollTo={scrollTo} />
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="pf-wrap">
          <div className="footer-row">
            <div className="footer-brand">
              <span className="footer-name">{META.name.toUpperCase()}</span>
              {/*<span className="footer-sub">{ROLES[0]}</span>*/}
            </div>

            {/*<div className="footer-links">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.name}
                </a>
              ))}
            </div>*/}

            <div className="footer-meta">
              {/*<span>{META.location}</span>*/}
              <span>© {year} — All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
