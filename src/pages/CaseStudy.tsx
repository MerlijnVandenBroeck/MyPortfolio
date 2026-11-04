import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { CaseStudyTemplate } from "../components/CaseStudyTemplate";
import { NotFound } from "./NotFound";

export function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return <NotFound />;
  return (
    <CaseStudyTemplate
      project={projects[index]}
      next={projects[(index + 1) % projects.length]}
    />
  );
}
