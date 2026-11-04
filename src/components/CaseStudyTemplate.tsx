import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { projectNumber, type Project } from "../data/projects";
import { Artwork } from "./Artwork";
import { Reveal } from "./Reveal";

export function CaseStudyTemplate({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <article className="case-study section">
      <Link className="text-link" to="/?section=work">
        <ArrowLeft aria-hidden="true" size={16} /> BACK TO WORK
      </Link>
      <div className="case-heading">
        <span className="mono accent">
          {projectNumber(project)} / {project.category}
        </span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <Artwork project={project} allowVideo />
      <div className="case-facts">
        {[
          ["My role", project.role],
          ["Team size", project.team],
          ["Timeframe", project.timeframe],
          ["Engine & tools", project.tools],
          ["Genre & platform", project.genre],
        ].map(([label, value]) => (
          <div key={label}>
            <span className="mono">{label}</span>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <div className="case-sections">
        {[
          ["Project overview", project.overview],
          ["My responsibilities", project.responsibilities],
          ["Design challenges", project.challenges],
          ["Process & experimentation", project.process],
          ["Production contributions", project.production],
          ["Results & lessons learned", project.results],
        ].map(([label, value], i) => (
          <Reveal className="case-section" key={label}>
            <span className="mono accent">0{i + 1}</span>
            <h2>{label}</h2>
            <p>{value}</p>
          </Reveal>
        ))}
      </div>
      {project.gallery.map((image) => (
        <img
          key={image.src}
          className="gallery-image"
          src={image.src}
          alt={image.alt}
          loading="lazy"
        />
      ))}
      {project.url ? (
        <a
          className="button"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          VIEW GAME <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      ) : (
        <p className="unavailable mono">EXTERNAL GAME LINK TO ADD</p>
      )}
      <Link className="next-project" to={`/work/${next.slug}`}>
        <span className="mono">UP NEXT / {projectNumber(next)}</span>
        <h2>
          {next.title}
          <ArrowRight aria-hidden="true" />
        </h2>
      </Link>
    </article>
  );
}
