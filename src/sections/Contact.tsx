import { ArrowUpRight, Download, Instagram, Linkedin } from "lucide-react";
import { personal } from "../data/personal";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <Linkedin aria-hidden="true" size={21} strokeWidth={1.5} />;
  if (label === "Instagram") return <Instagram aria-hidden="true" size={21} strokeWidth={1.5} />;
  return (
    <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9v11h18V9M2 9l2-5h16l2 5M2 9c0 3 4 3 4 0 0 3 4 3 4 0 0 3 4 3 4 0 0 3 4 3 4 0 0 3 4 3 4 0" />
      <path d="M8 15h8v4h-2l-2-2-2 2H8zM10 14v2m-1-1h2m4 0h.01" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionLabel number="03">CONTACT</SectionLabel>
      <Reveal>
        <h2>Contact</h2>
        <p className="contact-intro">{personal.contactMessage}</p>
        <div className="contact-bottom">
          <a className="contact-email" href={`mailto:${personal.email}`}>
            {personal.email} <ArrowUpRight aria-hidden="true" size={22} />
          </a>
          <div className="contact-links">
            <div className="socials">
              {personal.socials.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`} title={label}>
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
            {personal.cv ? (
              <a className="button outline contact-cv" href={personal.cv} download>
                CV <Download aria-hidden="true" size={16} />
              </a>
            ) : (
              <button className="button outline contact-cv" type="button" disabled>
                CV TO BE ADDED <Download aria-hidden="true" size={16} />
              </button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
