import { personal } from "../data/personal";
import { Reveal } from "../components/Reveal";
import { Portrait } from "../components/Portrait";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
          <Link className="text-link about-link" to="/about">
            MORE ABOUT ME <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
