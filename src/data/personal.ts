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
      "Through my background in youth organizations and competitive sports, I've developed strong teamwork, communication and problem-solving skills.",
    passions:
      "I enjoy combining creativity with hard work, whether that's shaping gameplay experiences, coordinating projects, or creating digital artwork.",
  },
  aboutSections: [
    { id: "background", title: "Backstory", text: "Hello there, I'm Merlijn! A game designer and producer born in 2005, based in Aalst, Belgium.\n\nMy interest in games first sparked when my dad introduced me to them. It didn't take long before I became interested in creating them myself, starting with Scratch and later through my experiences in a youth organization.\n\nThroughout primary and secondary school, I was always looking for something that would challenge me intellectually while allowing my creativity to shine. Eventually, I found the perfect combination in game development.", photo: "media/portraits/about-background.jpg", photoAlt: "Childhood photo of Merlijn wearing a chicken hat and a red plaid shirt." },
    { id: "hobbies", title: "Hobbies", text: "Growing up, I had two main hobbies: playing competitive football and participating in a youth organization every Sunday.\n\nAt the youth organization, I spent my Sundays playing all kinds of physical games with my peers. When I turned 16, I took on a leadership role, creating games and organizing events myself. This gave me my first real opportunities to explore my creativity and put my game design skills into practice.\n\nFootball has also been a big part of my life, teaching me the importance of teamwork, loyalty and discipline.", photo: "media/portraits/about-hobbies.jpg", photoAlt: "Football players in blue and yellow kits on the pitch during a match." },
    { id: "random-facts", title: "Random facts", text: "I scored over 130 on an IQ test when I was younger, I've never been a coffee drinker and I have two cats. I'm also a little too addicted to chocolate and I firmly believe Comic Sans gets way more hate than it deserves.", photo: "media/portraits/about-cats.jpg", photoAlt: "An orange-and-white cat and a black-and-white cat resting together on a yellow armchair." },
  ],
  aboutEnding: "Well, that's me in a nutshell! If you ever spot me at an event, don't hesitate to come say hi.",
  aboutContact: {
    heading: "Let's get in touch!",
    message: "Have a question, an idea, or just want to talk games? My inbox is always open.",
  },
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
