import { Link } from "react-router-dom";
import { ArrowDown, UserRound } from "lucide-react";
import { personal } from "../data/personal";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-role mono">{personal.title}</p>
        <h1 id="hero-title">{personal.name}</h1>
        <Link className="text-link hero-scroll" to="/?section=work">
          SCROLL TO SEE MY WORK <ArrowDown aria-hidden="true" size={16} />
        </Link>
      </div>
      <div className="hero-portrait">
        {personal.photo ? (
          <img
            src={personal.photo}
            alt={personal.photoAlt}
            fetchPriority="high"
          />
        ) : (
          <div
            className="portrait-placeholder"
            role="img"
            aria-label="Portrait photo placeholder"
          >
            <UserRound aria-hidden="true" strokeWidth={1} />
            <span className="mono">PHOTO TO ADD</span>
          </div>
        )}
      </div>
    </section>
  );
}
