import { ArrowUpRight, Image, Linkedin, Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { personal } from "../data/personal";

export function AboutMe() {
  const linkedIn = personal.socials.find(({ label }) => label === "LinkedIn");
  return (
    <section className="section about-page">
      <h1>About me</h1>
      <div className="about-stories">
        {personal.aboutSections.map((section, index) => (
            <Reveal key={section.id} className={`about-story${index % 2 === 1 ? " about-story-reversed" : ""}`}>
              <div className="about-story-photo">
                {section.photo ? (
                  <img src={section.photo} alt={section.photoAlt} loading="lazy" />
                ) : (
                  <div className="about-photo-placeholder">
                    <Image aria-hidden="true" size={28} strokeWidth={1} />
                    <span>{section.title} photo to be added</span>
                  </div>
                )}
              </div>
              <div className="about-story-copy">
                <h2 id={`about-${section.id}`}>{section.title}</h2>
                {section.text.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
        ))}
      </div>
      <Reveal className="about-ending"><p>{personal.aboutEnding}</p></Reveal>
      <Reveal className="about-contact">
        <h2>{personal.aboutContact.heading}</h2>
        <p>{personal.aboutContact.message}</p>
        <div className="about-contact-actions">
          <a className="button" href={`mailto:${personal.email}`}><Mail aria-hidden="true" size={18} /> {personal.email}</a>
          {linkedIn?.url && <a className="button outline" href={linkedIn.url} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin aria-hidden="true" size={18} /> LinkedIn <ArrowUpRight aria-hidden="true" size={16} /></a>}
        </div>
      </Reveal>
    </section>
  );
}
