"use client";

import { useEffect, useRef } from "react";
import { NAV } from "@/constants/data";

interface NavbarProps {
  active: string;
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  scrollTo: (id: string) => void;
}

const HOME_LINK = NAV.find(({ id }) => id === "home")!;
const LINKS = NAV.filter(({ id }) => id !== "home");

export default function Navbar({
  active,
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
}: NavbarProps) {
  const themeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dark = document.documentElement.dataset.theme === "dark";
    themeBtnRef.current?.setAttribute(
      "aria-label",
      `Switch to ${dark ? "light" : "dark"} mode`,
    );
  }, []);

  const toggleTheme = () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore storage failures */
    }
    themeBtnRef.current?.setAttribute(
      "aria-label",
      `Switch to ${next === "dark" ? "light" : "dark"} mode`,
    );
  };

  const renderLink = (
    { id, label }: { id: string; label: string },
    number: number,
    cls: string,
  ) => (
    <button
      key={id}
      className={`${cls}${active === id ? " active" : ""}`}
      onClick={() => scrollTo(id)}
    >
      <span className="nav-no" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </span>
      <span className="nav-label">{label}</span>
    </button>
  );

  return (
    <>
      <header className={`topbar${scrolled ? " scrolled" : ""}`}>
        <div className="pf-wrap topbar-inner">
          {renderLink(HOME_LINK, 0, "nav-link nav-link-home")}

          <div className="topbar-actions">
            <nav className="nav-desk" aria-label="Primary">
              {LINKS.map((item, i) => renderLink(item, i + 1, "nav-link"))}
            </nav>

            <button
              ref={themeBtnRef}
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
            >
              <svg
                className="icon-moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <svg
                className="icon-sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </button>

            <button
              className="nav-burger"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`nav-mobile${mobileMenuOpen ? " open" : ""}`}
        aria-label="Mobile"
      >
        {NAV.map((item, i) => renderLink(item, i, "nav-mobile-link"))}
      </nav>
    </>
  );
}