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
  previewVideo?: string;
  videoPoster?: string;
  videoCaptions?: string;
  team: string;
  timeframe: string;
  tools: string;
  genre: string;
  platform?: string;
  overview: string;
  story?: string[];
  software?: { name: string; icon: string }[];
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
    slug: "spindwich",
    story: [
      "Created during the Very Serious Game Jam hosted by Juniper Dev, Spindwich was my first game jam project. Working in a team of two, we completed the game in just one week, earning a top 350 overall placement and a top 50 placement in the creativity and theme category.",
      "Special thanks to Ernst Verbeuren for joining me on this project.",
    ],
    software: [
      { name: "Blender", icon: "media/software/blender.svg" },
      { name: "Unity", icon: "media/software/unity.svg" },
      { name: "Photoshop", icon: "media/software/photoshop.svg" },
    ],
    title: "Spindwich",
    category: "GAME JAM",
    role: "Game Design & Artist",
    description:
      "Spindwich is a fast-paced cooking game where players spin for ingredients to make the correct sandwiches and fulfill customer orders. With a constantly spinning ingredient tray, timing is everything. Make as many correct sandwiches as possible without making mistakes!",
    theme: "spin",
    image: "media/spindwich-icon.png",
    imageAlt: "Spindwich title above a loaded sandwich",
    team: "2 Devs",
    timeframe: "1 Week",
    tools: "Unity",
    genre: "Arcade / Cooking",
    platform: "PC",
    overview: "Spindwich is a fast-paced cooking game where players spin for ingredients to make the correct sandwiches and fulfill customer orders. With a constantly spinning ingredient tray, timing is everything. Make as many correct sandwiches as possible without making mistakes!",
    responsibilities: pending,
    challenges: pending,
    process: pending,
    production: pending,
    results: pending,
    url: "https://elmerlino.itch.io/spindwich",
    gallery: [],
  },
  {
    slug: "artifact-ambush",
    title: "Artifact Ambush",
    category: "SCHOOL PROJECT",
    role: "Game Designer & Developer",
    description: "Artifact Ambush is a chaotic party game where up to four players battle it out in a confined arena. The goal is simple: be the first adventurer to collect 20 coins. But watch out for the other players, they can steal your coins by punching you or simply throwing dynamite in your face.",
    theme: "artifact",
    image: "media/artifact-ambush-icon.png",
    imageAlt: "Artifact Ambush title over a golden artifact and treasure chamber",
    team: "4 Devs",
    timeframe: "2 Months",
    tools: "Unity",
    platform: "PC",
    genre: "Party Game",
    overview: "Artifact Ambush is a chaotic party game where up to four players battle it out in a confined arena. The goal is simple: be the first adventurer to collect 20 coins. But watch out for the other players, they can steal your coins by punching you or simply throwing dynamite in your face.",
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
    category: "GAME JAM",
    role: "Game Design & Sound",
    description: "In Fixtape, you play as an old-school movie theatre employee. After accidentally playing an 18+ film in a cinema filled with kids, it's your job to make sure no inappropriate scenes make it onto the big screen. Your only option? Cut all the bad frames out of the old movie tape before they are shown and hopefully keep your job in the process.",
    theme: "tape",
    image: "media/fixtape-icon.png",
    imageAlt: "Fixtape title with a vintage film reel",
    team: "3 Devs",
    timeframe: "30 Hours",
    tools: "Unity",
    platform: "PC",
    genre: "Arcade / Simulation",
    overview: "In Fixtape, you play as an old-school movie theatre employee. After accidentally playing an 18+ film in a cinema filled with kids, it's your job to make sure no inappropriate scenes make it onto the big screen. Your only option? Cut all the bad frames out of the old movie tape before they are shown and hopefully keep your job in the process.",
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
