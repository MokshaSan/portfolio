import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/constants/data";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      no="02"
      kicker="Projects"
      title="Things I have built"
      sub="A selection of personal and open-source work."
    >
      <div className="projects-list">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <article className="project">
              <div className="project-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="project-main">
                <div className="project-top">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-tag">{project.tag}</p>
                </div>

                <p className="project-desc">{project.desc}</p>

                <div className="project-foot">
                  <p className="project-badge">{project.badge}</p>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link}
                        className="link-arrow"
                        href={`https://${link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link}
                        <span className="arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}