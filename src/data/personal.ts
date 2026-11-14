// Personal information and biography. Keep verified facts here, separate from components. Empty URLs intentionally render as unavailable, never fake links.
const firstName = "Merlijn";
const lastName = "Van den Broeck";

export const personal = {
  name: `${firstName} ${lastName}`,
  firstName,
  lastName,
  title: "Game Designer × Producer",
  photo: "media/portraits/merlijn-suit.jpg",
  aboutPhoto: "media/portraits/about-campfire.jpg",
  photoAlt: "Merlijn Van den Broeck",
  about: {
    heading: "Indie Game Designer & Producer",
    introduction:
      "Hi, I'm Merlijn! I'm driven to create emotional and creative gaming experiences.",
    background:
      "Through my background in youth organizations and competitive sports, I've developed strong teamwork, communication, and problem-solving skills.",
    passions:
      "I enjoy combining creativity with hard work, whether that's shaping gameplay experiences, coordinating projects, or creating digital artwork.",
  },
  aboutSections: [
    { id: "background", title: "Background", text: "Background text to be added.", photo: "media/portraits/about-background.jpg", photoAlt: "Childhood photo of Merlijn wearing a chicken hat and a red plaid shirt." },
    { id: "hobbies", title: "Hobbies", text: "Hobbies text to be added.", photo: "media/portraits/about-hobbies.jpg", photoAlt: "Football players in blue and yellow kits on the pitch during a match." },
    { id: "random-facts", title: "Random facts", text: "Random facts to be added.", photo: "", photoAlt: "" },
  ],
  contactMessage:
    "If you'd like to discuss a project, collaboration, internship opportunity, or anything related to game development, feel free to reach out.",
  email: "merlijn@9levens.be",
  cv: "Merlijn_VandenBroeck_CV_2026.pdf",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/merlijn-van-den-broeck/" },
    { label: "itch.io", url: "https://elmerlino.itch.io/" },
    { label: "Instagram", url: "https://www.instagram.com/merlijnvdb37/" },
  ],
};
