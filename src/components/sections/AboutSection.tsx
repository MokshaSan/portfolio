import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { INFO, PRINCIPLES } from "@/constants/data";

export default function AboutSection() {
  return (
    <Section id="about" no="01" kicker="About" title="About">
      <Reveal delay={60}>
        <p className="sec-lead">
          Hey — I&apos;m <strong>Moksha Sandavirage</strong>. I&apos;m a
          software engineer who cares deeply about the craft of building
          things. Not just that they work, but that they work{" "}
          <em>well</em> — fast, accessible, maintainable, and clear.
        </p>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={120}>
          <div>
            <p className="block-label">Principles</p>
            {PRINCIPLES.map((p, i) => (
              <div key={p} className="principle-row">
                <span className="row-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={190}>
          <div>
            <p className="block-label">INFO</p>
            {INFO.map(({ label, value }) => (
              <div key={label} className="fact">
                <span className="fact-label">{label}</span>
                <span className="fact-value">{value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
