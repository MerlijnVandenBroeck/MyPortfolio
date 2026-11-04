import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="section work">
      <SectionLabel number="01">WORK</SectionLabel>
      <Reveal className="section-intro">
        <h2>Selected work</h2>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
