import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { META, SOCIALS } from "@/constants/data";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      no="03"
      kicker="Contact"
      title={
        <>
          Let&apos;s build
          <br />
          something.
        </>
      }
      sub="Open to new opportunities, collaborations, or just a good conversation."
      className="section-contact"
    >
      <Reveal delay={80}>
        <a className="contact-email" href={`mailto:${META.email}`}>
          {META.email}
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </Reveal>

      <Reveal delay={160}>
        <ul className="contact-socials">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                className="link-arrow"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.name}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}