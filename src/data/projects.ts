// Project order controls cards and next-project navigation. Slugs are permanent URLs.
export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  description: string;
  theme: "artifact" | "tape" | "spin" | "neutral";
  image: string;
  imageAlt: string;
  video?: string;
  videoPoster?: string;
  videoCaptions?: string;
  team: string;
  timeframe: string;
  tools: string;
  genre: string;
  overview: string;
  responsibilities: string;
  challenges: string;
  process: string;
  production: string;
  results: string;
  url: string;
  gallery: { src: string; alt: string }[];
};
const pending = "Content to add — replace with verified project information.";
export const projects: Project[] = [
  {
    slug: "artifact-ambush",
    title: "Artifact Ambush",
    category: "DESIGN + PRODUCTION",
    role: "Game design & production",
    description:
      "A closer look at the project that brings both sides of my practice together.",
    theme: "artifact",
    image: "",
    imageAlt: "",
    team: pending,
    timeframe: pending,
    tools: pending,
    genre: pending,
    overview: pending,
    responsibilities: pending,
    challenges: pending,
    process: pending,
    production: pending,
    results: pending,
    url: "",
    gallery: [],
  },
  {
    slug: "fixtape",
    title: "Fixtape",
    category: "PROJECT CASE STUDY",
    role: "Role to add",
    description:
      "The ideas, experiments, and decisions behind Fixtape. Case-study details coming soon.",
    theme: "tape",
    image: "",
    imageAlt: "",
    team: pending,
    timeframe: pending,
    tools: pending,
    genre: pending,
    overview: pending,
    responsibilities: pending,
    challenges: pending,
    process: pending,
    production: pending,
    results: pending,
    url: "",
    gallery: [],
  },
  {
    slug: "spindwich",
    title: "Spindwich",
    category: "PROJECT CASE STUDY",
    role: "Role to add",
    description:
      "An inside look at Spindwich. Project context and process to be added.",
    theme: "spin",
    image: "",
    imageAlt: "",
    team: pending,
    timeframe: pending,
    tools: pending,
    genre: pending,
    overview: pending,
    responsibilities: pending,
    challenges: pending,
    process: pending,
    production: pending,
    results: pending,
    url: "",
    gallery: [],
  },
];

export function projectNumber(project: Project): string {
  return String(
    projects.findIndex((item) => item.slug === project.slug) + 1,
  ).padStart(2, "0");
}
