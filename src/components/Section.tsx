import Reveal from "@/components/ui/Reveal";

interface SectionProps {
  id: string;
  no: string;
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  no,
  kicker,
  title,
  sub,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section${className ? ` ${className}` : ""}`}
    >
      <div className="pf-wrap">
        <div className="sec-grid">
          <div className="sec-aside" aria-hidden="true">
            <span className="sec-no">[{no}]</span>
          </div>
          <div className="sec-content">
            <Reveal>
              <header className="sec-head">
                <p className="sec-kicker">
                  <span className="kicker-no">{no}</span>
                  {" \u2014 "}
                  {kicker}
                </p>
                <h2 className="sec-title">{title}</h2>
                {sub ? <p className="sec-sub">{sub}</p> : null}
              </header>
            </Reveal>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}