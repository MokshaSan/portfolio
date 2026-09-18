import Section from "@/components/Section";
import Reveal from "@/components/ui/Reveal";
import { STACK } from "@/constants/data";

export default function StackSection() {
  return (
    <Section id="stack" no="02" kicker="Stack" title="Stack" sub="Tools I reach for.">
      <div className="stack-grid">
        {STACK.map(({ cat, items }, ci) => (
          <Reveal key={cat} delay={(ci % 2) * 80}>
            <div className="stack-cat">
              <p className="cat-label">
                <span className="cat-idx" aria-hidden="true">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                {cat}
              </p>
              <ul className="stack-items">
                {items.map((item, ii) => (
                  <li key={item} className="stack-item">
                    <span className="si-idx" aria-hidden="true">
                      {String(ii + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}