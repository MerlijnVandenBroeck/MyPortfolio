import { Image } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { personal } from "../data/personal";

export function AboutMe() {
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
                <p>{section.text}</p>
              </div>
            </Reveal>
        ))}
      </div>
    </section>
  );
}
