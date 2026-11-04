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
        <span>CASE STUDY ↗</span>
      </div>
      <Link to={`/work/${project.slug}`} className="project-title">
        <h3>{project.title}</h3>
        <ArrowUpRight aria-hidden="true" />
      </Link>
      <p>{project.description}</p>
    </Reveal>
  );
}
