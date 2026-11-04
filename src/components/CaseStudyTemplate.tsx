import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight, Play } from "lucide-react";
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
      <div className={`case-facts ${project.story ? "case-facts-complete" : ""}`}>
        {(project.story ? [
          ["Platform", project.platform],
          ["Development", project.timeframe],
          ["Team", project.team],
          ["Role", project.role],
          ["Engine", project.tools],
          ["Genre", project.genre],
        ] : [
          ["My role", project.role],
          ["Team size", project.team],
          ["Timeframe", project.timeframe],
          ["Engine & tools", project.tools],
          ["Genre & platform", project.genre],
        ]).map(([label, value]) => (
          <div key={label}>
            <span className="mono">{label}</span>
            <p>{value}</p>
          </div>
        ))}
      </div>
      {project.story && (
        <div className="case-story">
          {project.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="button" href={project.url} target="_blank" rel="noreferrer">
            <Play aria-hidden="true" size={16} /> PLAY ON ITCH.IO
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      )}
      {project.software && (
        <section className="case-software" aria-labelledby="software-heading">
          <h2 id="software-heading">Software</h2>
          <ul>
            {project.software.map(({ name, icon }) => (
              <li key={name}>
                <span className="software-logo" style={{ maskImage: `url("${icon}")` }} aria-hidden="true" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="case-sections">
        {(project.story ? [
          ["My responsibilities", project.responsibilities],
          ["Lessons learned", project.results],
        ] : [
          ["Project overview", project.overview],
          ["My responsibilities", project.responsibilities],
          ["Design challenges", project.challenges],
          ["Process & experimentation", project.process],
          ["Production contributions", project.production],
          ["Results & lessons learned", project.results],
        ]).map(([label, value], i) => (
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
      {project.story ? null : project.url ? (
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
