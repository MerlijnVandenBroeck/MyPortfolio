import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Portrait } from "../components/Portrait";
import { personal } from "../data/personal";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-role mono">{personal.title}</p>
        <h1 id="hero-title">
          <span className="hero-first-name">{personal.firstName}</span>{" "}
          <span className="hero-last-name">{personal.lastName}</span>
        </h1>
        <Link className="text-link hero-scroll" to="/?section=work">
          SCROLL TO SEE MY WORK <ArrowDown aria-hidden="true" size={16} />
        </Link>
      </div>
      <Portrait className="hero-portrait" priority />
    </section>
  );
}
