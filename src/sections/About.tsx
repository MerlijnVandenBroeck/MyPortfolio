import { Download } from "lucide-react";
import { personal } from "../data/personal";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { Portrait } from "../components/Portrait";

export function About() {
  return (
    <section id="about" className="section about">
      <SectionLabel number="02">ABOUT</SectionLabel>
      <Reveal className="about-layout">
        <div className="about-heading">
          <h2>About me</h2>
          <Portrait className="about-portrait" />
        </div>
        <div className="about-copy">
          <p>{personal.about.introduction}</p>
          <p>{personal.about.background}</p>
          <p>{personal.about.passions}</p>
          {personal.cv ? (
            <a className="button outline" href={personal.cv} download>
              DOWNLOAD CV <Download aria-hidden="true" size={16} />
            </a>
          ) : (
            <button className="button outline" type="button" disabled>
              CV TO BE ADDED <Download aria-hidden="true" size={16} />
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
