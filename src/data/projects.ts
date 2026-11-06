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
  software?: { name: string; icon: string }[];
  teamCredits?: {
    before: string;
    members: { name: string; url?: string }[];
    after: string;
  };
  contributions: string[];
  results: string;
  url: string;
  gallery: { src: string; alt: string }[];
};
export const projects: Project[] = [
  {
    slug: "spindwich",
    software: [
      { name: "Blender", icon: "media/software/blender.svg" },
      { name: "Unity", icon: "media/software/unity.svg" },
      { name: "Photoshop", icon: "media/software/photoshop.svg" },
    ],
    title: "Spindwich",
    category: "GAME JAM",
    role: "Game Designer & Artist",
    description:
      "Spindwich is a fast-paced cooking game where players spin for ingredients to make the correct sandwiches and fulfill customer orders. With a constantly spinning ingredient tray, timing is everything. Make as many correct sandwiches as possible without making mistakes!",
    theme: "spin",
    image: "media/spindwich-icon.png",
    imageAlt: "Spindwich title above a loaded sandwich",
    video: "media/spindwich/spindwich-full-gameplay.mp4",
    previewVideo: "media/spindwich/gameplay.mp4",
    team: "2 Devs",
    timeframe: "1 Week",
    tools: "Unity",
    genre: "Arcade / Cooking",
    platform: "PC / WEB",
    contributions: [
      "Main game design / balancing",
      "3D art",
      "Lighting",
      "Audio",
      "UI",
    ],
    teamCredits: {
      before: "Special thanks to ",
      members: [{ name: "Ernst Verbeuren", url: "https://ernstverbeuren.dev" }],
      after: " for joining me on this project.",
    },
    results:
      "Created during the Very Serious Game Jam hosted by Juniper Dev, Spindwich was our first game jam project. Working in a team of two, we placed among the top 350 out of 3,500 overall and the top 50 in the creativity and theme category.",
    url: "https://elmerlino.itch.io/spindwich",
    gallery: [
      {
        src: "media/spindwich/tutorial-screen.png",
        alt: "Spindwich tutorial screen showing the ingredient spinner.",
      },
      {
        src: "media/spindwich/order-screen.png",
        alt: "Spindwich gameplay with two customer orders displayed.",
      },
      {
        src: "media/spindwich/gameplay-screen.png",
        alt: "Spindwich gameplay with an active customer order.",
      },
      {
        src: "media/spindwich/menu-screen.png",
        alt: "Spindwich main menu featuring prepared sandwiches.",
      },
    ],
  },
  {
    slug: "artifact-ambush",
    title: "Artifact Ambush",
    category: "SCHOOL PROJECT",
    role: "Game Designer & Developer",
    description: "Artifact Ambush is a chaotic party game where up to four players battle it out in a confined arena. The goal is simple: be the first adventurer to collect 20 coins. But watch out for the other players; they can steal your coins by punching you or throwing dynamite in your face.",
    theme: "artifact",
    image: "media/artifact-ambush-icon.png",
    imageAlt: "Artifact Ambush title over a golden artifact and treasure chamber",
    video: "media/artifact-ambush/artifact-ambush-full-gameplay.mp4",
    previewVideo: "media/artifact-ambush/artifact-ambush-hover.mp4",
    team: "4 Devs",
    timeframe: "2 Months",
    tools: "Unity",
    software: [
      { name: "Blender", icon: "media/software/blender.svg" },
      { name: "Unity", icon: "media/software/unity.svg" },
      { name: "Photoshop", icon: "media/software/photoshop.svg" },
    ],
    platform: "PC",
    genre: "Party Game",
    contributions: [
      "Game design",
      "Production planning",
      "Mechanic development",
      "Clarity assurance",
      "Playtesting",
    ],
    teamCredits: {
      before: "Artifact Ambush was created by a four-person student team. My teammates prefer not to be named publicly.",
      members: [],
      after: "",
    },
    results: "With Artifact Ambush, we aimed to create a competitive yet lighthearted experience where players are constantly messing with each other. By focusing on a clear target experience and intended emotional response, we earned a top grade in the course.",
    url: "",
    gallery: [
      {
        src: "media/artifact-ambush/title-screen.png",
        alt: "Artifact Ambush title screen with the game logo and a prompt to continue.",
      },
      {
        src: "media/artifact-ambush/gameplay-screen.png",
        alt: "Artifact Ambush four-player arena gameplay with the coin counter and player controls.",
      },
      {
        src: "media/artifact-ambush/win-screen.png",
        alt: "Artifact Ambush victory screen announcing the first player to collect 20 coins.",
      },
    ],
  },
  {
    slug: "fixtape",
    title: "Fixtape",
    category: "GAME JAM",
    role: "Game & Sound Designer",
    description: "In Fixtape, you play as an old-school movie theatre employee. After accidentally playing an 18+ film in a cinema filled with kids, it's your job to make sure no inappropriate scenes make it onto the big screen. Your only option? Cut all the bad frames out of the old movie tape before they are shown and hopefully keep your job in the process.",
    theme: "tape",
    image: "media/fixtape-icon.png",
    imageAlt: "Fixtape title with a vintage film reel",
    video: "media/fixtape/fixtape-full-gameplay.mp4",
    previewVideo: "media/fixtape/fixtape-hover.mp4",
    team: "3 Devs",
    timeframe: "30 Hours",
    tools: "Unity",
    software: [
      { name: "Blender", icon: "media/software/blender.svg" },
      { name: "Unity", icon: "media/software/unity.svg" },
      { name: "Photoshop", icon: "media/software/photoshop.svg" },
    ],
    platform: "PC / WEB",
    genre: "Arcade / Simulation",
    contributions: [
      "Playtesting / Balancing",
      "Input design",
      "Clarity and quality of life",
      "Audio",
    ],
    teamCredits: {
      before: "I worked on this project together with my fellow Independent Game Production students, ",
      members: [
        { name: "Ernst Verbeuren", url: "https://ernstverbeuren.dev" },
        { name: "Yelyzaveta Skorohliad" },
      ],
      after: ".",
    },
    results: "This game was created with limited time and resources. After 30 hours of hard work, we brought Fixtape to life. To give the game its own unique identity, we filmed our own movie scenes and integrated them directly into the gameplay. Our work earned us second place among our classmates.",
    url: "https://kanokoaomi.itch.io/fixtape",
    gallery: [
      {
        src: "media/fixtape/menu-screen.png",
        alt: "Fixtape main menu with Play, Controls, and Quit options beside a film reel.",
      },
      {
        src: "media/fixtape/gameplay-7-percent.png",
        alt: "Fixtape gameplay at 7 percent, with film strips and scissors ready to cut inappropriate scenes.",
      },
      {
        src: "media/fixtape/gameplay-17-percent.png",
        alt: "Fixtape gameplay at 17 percent, showing two film strips and the cutting tool.",
      },
      {
        src: "media/fixtape/game-over.png",
        alt: "Fixtape game over screen with a black-and-white movie scene and a restart prompt.",
      },
    ],
  },

];

export function projectNumber(project: Project): string {
  return String(
    projects.findIndex((item) => item.slug === project.slug) + 1,
  ).padStart(2, "0");
}
