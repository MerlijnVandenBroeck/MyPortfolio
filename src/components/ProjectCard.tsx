import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "../data/projects";
import { Artwork } from "./Artwork";
import { Reveal } from "./Reveal";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Reveal className="project-card">
      <Link
        to={`/work/${project.slug}`}
        className="project-visual"
        aria-label={`View ${project.title} case study`}
      >
        <Artwork project={project} />
        <span className="round-link">
          <ArrowUpRight aria-hidden="true" />
        </span>
      </Link>
      <div className="project-card-copy">
        <div className="project-meta mono">
          <span>
            {project.category}
          </span>
        </div>
        <Link to={`/work/${project.slug}`} className="project-title">
          <h3>{project.title}</h3>
          <span className="project-card-action mono">VIEW PROJECT <ArrowUpRight aria-hidden="true" /></span>
        </Link>
        <p>{project.summary}</p>
      </div>
    </Reveal>
  );
}
