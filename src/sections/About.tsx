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
          <Portrait className="about-portrait" photo={personal.aboutPhoto} />
        </div>
        <div className="about-copy">
          <h3>{personal.about.heading}</h3>
          <p>{personal.about.introduction}</p>
          <p>{personal.about.background}</p>
          <p>{personal.about.passions}</p>
        </div>
      </Reveal>
    </section>
  );
}
