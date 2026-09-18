"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { useTypingEffect } from "@/components/ui/TypingEffect";
import { META, ROLES } from "@/constants/data";

interface HomeSectionProps {
  scrollTo: (id: string) => void;
}

export default function HomeSection({ scrollTo }: HomeSectionProps) {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="hero">
      <div className="pf-wrap">
        <div className="hero-grid">
          <div>
            <Reveal>
              <p className="hero-kicker">
                {/*<span className="kicker-hi">{META.role.toUpperCase()}</span>*/}
                <span aria-hidden="true">I'm</span>
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero-name">
                <span>{META.shortName}</span>
                <span className="hero-name-2">Sandavirage</span>
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="hero-focus">
                <span className="hf-label">Focus</span>
                <span>{role}</span>
                <span className="caret" aria-hidden="true" />
              </p>
            </Reveal>

            <Reveal delay={190}>
              <p className="hero-desc">{META.description}</p>
            </Reveal>

            <Reveal delay={250}>
              <div className="hero-ctas">
                <button className="btn btn-fill" onClick={() => scrollTo("contact")}>
                  My resume
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
                <a
                  className="btn"
                  // href="/moksha-resume.docx"
                  download
                >
                  download
                  <span className="btn-arrow" aria-hidden="true">
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <figure className="portrait">
              <Image
                src="/download.jpg"
                alt="Portrait of Moksha Sandavirage"
                width={400}
                height={400}
                sizes="(max-width: 900px) 90vw, 420px"
                priority
              />
              <figcaption className="portrait-cap">
                <span className="cap-hi">It&apos;s me</span>
                <span>2026</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={300} className="hero-meta">
          <div className="hm-item">
            <span className="hm-label">Location</span>
            <span className="hm-value">{META.location}</span>
          </div>
          <div className="hm-item">
            <span className="hm-label">Status</span>
            <span className="hm-value">Open to opportunities</span>
          </div>
          <div className="hm-item">
            <span className="hm-label">Role</span>
            <span className="hm-value">Full Stack Dev</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
