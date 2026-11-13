import { personal } from "../data/personal";
import { Reveal } from "../components/Reveal";
import { Portrait } from "../components/Portrait";

export function About() {
  return (
    <section id="about" className="section about">
      <Reveal className="about-layout">
        <h2>About me</h2>
        <h3 className="about-subtitle">{personal.about.heading}</h3>
        <Portrait className="about-portrait" photo={personal.aboutPhoto} />
        <div className="about-copy">
          <p>{personal.about.introduction}</p>
          <p>{personal.about.background}</p>
          <p>{personal.about.passions}</p>
        </div>
      </Reveal>
    </section>
  );
}
