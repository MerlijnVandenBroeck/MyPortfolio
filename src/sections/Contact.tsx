import { ArrowUpRight } from "lucide-react";
import { personal } from "../data/personal";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionLabel number="03">CONTACT</SectionLabel>
      <Reveal>
        <h2>Contact</h2>
        <div className="contact-bottom">
          {personal.email ? (
            <a className="button" href={`mailto:${personal.email}`}>
              EMAIL ME <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          ) : (
            <span className="contact-pending">
              Email to add{" "}
              <span className="mono">/ CONTACT DETAILS COMING SOON</span>
            </span>
          )}
          <div className="socials">
            {personal.socials.map(({ label, url }) =>
              url ? (
                <a key={label} href={url} target="_blank" rel="noreferrer">
                  {label}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              ) : (
                <span key={label}>
                  {label} <small>TO ADD</small>
                </span>
              ),
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
