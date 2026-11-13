import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="section work">
      <Reveal className="section-intro">
        <h2>Projects</h2>
      </Reveal>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
