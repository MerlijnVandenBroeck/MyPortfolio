import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectNumber, type Project } from "../data/projects";
import { Artwork } from "./Artwork";
import { Reveal } from "./Reveal";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Reveal className={`project-card ${featured ? "flagship" : ""}`}>
      <Link
        to={`/work/${project.slug}`}
        className="project-visual"
        aria-label={`View ${project.title} case study`}
      >
        <Artwork project={project} />
        <span className="round-link">
          <ArrowUpRight aria-hidden="true" />
        </span>
        {featured && <span className="flagship-tag">FEATURED PROJECT</span>}
      </Link>
      <div className="project-meta mono">
        <span>
          {projectNumber(project)} / {project.category}
        </span>
      </div>
      <Link to={`/work/${project.slug}`} className="project-title">
        <h3>{project.title}</h3>
        <ArrowUpRight aria-hidden="true" />
      </Link>
      <p>{project.description}</p>
      {project.platform && (
        <dl className="project-card-facts">
          {[
            ["Platform", project.platform],
            ["Development", project.timeframe],
            ["Team size", project.team],
            ["Roles", project.role],
            ["Genre", project.genre],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="mono">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          <div>
            <dt className="mono">Software</dt>
            <dd className="project-card-software">
              {project.software ? project.software.map(({ name, icon }) => (
                <span
                  key={name}
                  className="project-card-software-icon"
                  style={{ maskImage: `url("${icon}")` }}
                  role="img"
                  aria-label={name}
                  title={name}
                />
              )) : project.tools}
            </dd>
          </div>
        </dl>
      )}
    </Reveal>
  );
}
