import { Download } from "lucide-react";
import { personal } from "../data/personal";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="section about">
      <SectionLabel number="02">ABOUT</SectionLabel>
      <Reveal className="about-layout">
        <h2>About me</h2>
        <div className="about-copy">
          <p>{personal.about}</p>
          <dl className="about-facts">
            {[
              ["Background", personal.background],
              ["Skills", personal.skills],
              ["Tools", personal.tools],
              ["Education", personal.education],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {personal.cv ? (
            <a className="button outline" href={personal.cv} download>
              DOWNLOAD CV <Download aria-hidden="true" size={16} />
            </a>
          ) : (
            <span className="unavailable mono">
              <Download aria-hidden="true" size={16} /> CV TO BE ADDED
            </span>
          )}
        </div>
      </Reveal>
    </section>
  );
}
