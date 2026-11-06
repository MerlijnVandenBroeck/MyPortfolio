import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { projectNumber, type Project } from "../data/projects";
import { Artwork } from "./Artwork";
import { Reveal } from "./Reveal";

export function CaseStudyTemplate({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return <ProjectCaseStudy project={project} next={next} />;
}

function ProjectCaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage = selectedImageIndex === null ? null : project.gallery[selectedImageIndex];
  const lightbox = useRef<HTMLDialogElement>(null);
  const overview = [
    ["Platform", project.platform],
    ["Development", project.timeframe],
    ["Team size", project.team],
    ["Roles", project.role],
    ["Genre", project.genre],
  ];

  useEffect(() => {
    if (selectedImage && lightbox.current && !lightbox.current.open) {
      lightbox.current.showModal();
    }
  }, [selectedImage]);

  return (
    <article className="case-study case-study-project section">
      <Link className="text-link" to="/?section=work">
        <ArrowLeft aria-hidden="true" size={16} /> BACK TO PROJECTS
      </Link>

      <header className="spindwich-heading">
        <span className="mono accent">{project.category}</span>
        <div className="spindwich-title-row">
          <h1>{project.title}</h1>
          {project.url ? (
            <a className="spindwich-play-link" href={project.url} target="_blank" rel="noreferrer">
              <Play aria-hidden="true" size={15} /> PLAY ON ITCH.IO <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          ) : project.slug !== "artifact-ambush" ? (
            <button className="spindwich-play-link is-pending" type="button" disabled>
              PLAY LINK TO ADD
            </button>
          ) : null}
        </div>
      </header>

      {project.video ? (
        <Artwork project={project} allowVideo />
      ) : (
        <div className="spindwich-video-placeholder" role="img" aria-label="Gameplay video placeholder">
          <Play aria-hidden="true" size={38} />
          <span className="mono">GAMEPLAY VIDEO TO ADD</span>
        </div>
      )}

      <section className="spindwich-overview" aria-labelledby="overview-heading">
        <div>
          <h2 id="overview-heading">Overview</h2>
        </div>
        <dl>
          {overview.map(([label, value]) => (
            <div key={label}>
              <dt className="mono">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          {project.software ? (
            <div>
              <dt className="mono">Software</dt>
              <dd className="spindwich-software-icons">
                {project.software.map(({ name, icon }) => (
                  <span
                    key={name}
                    className="spindwich-software-icon"
                    style={{ maskImage: `url("${icon}")` }}
                    role="img"
                    aria-label={name}
                    title={name}
                  />
                ))}
              </dd>
            </div>
          ) : (
            <div>
              <dt className="mono">Software</dt>
              <dd>{project.tools}</dd>
            </div>
          )}
        </dl>
      </section>

      <section className="spindwich-description" aria-labelledby="description-heading">
        <div className="spindwich-section-label">
          <h2 id="description-heading">The game</h2>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
      </section>

      <div className="spindwich-copy-grid">
        <Reveal className="spindwich-copy-panel">
          <h2>My contributions</h2>
          {project.contributions ? (
            <ul className="spindwich-contributions">
              {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
            </ul>
          ) : (
            <p>{project.responsibilities}</p>
          )}
        </Reveal>
        <Reveal className="spindwich-copy-panel">
          <h2>Results</h2>
          <p>{project.results}</p>
        </Reveal>
        <Reveal className="spindwich-copy-panel">
          <h2>Team mates</h2>
          <p>
            {project.teammate ? (
              <>
                {project.teammate.before}
                <a href={project.teammate.url} target="_blank" rel="noreferrer">
                  {project.teammate.name}
                </a>
                {project.teammate.after}
              </>
            ) : "Team member details to add."}
          </p>
        </Reveal>
      </div>

      <section className="spindwich-gallery" aria-labelledby="gallery-heading">
        <div className="spindwich-section-heading">
          <h2 id="gallery-heading">Gallery</h2>
        </div>
        <div className={`spindwich-gallery-grid ${project.gallery.length ? "has-gallery" : ""}`}>
          {project.gallery.length ? project.gallery.map(({ src, alt }, index) => (
            <button className="gallery-thumb" type="button" key={src} onClick={() => setSelectedImageIndex(index)} aria-label={`Open image larger: ${alt}`}>
              <img src={src} alt={alt} loading="lazy" />
            </button>
          )) : ["Gameplay screenshot 01", "Gameplay screenshot 02", "Gameplay screenshot 03"].map((label, index) => (
            <div className={`gallery-placeholder gallery-placeholder-${index + 1}`} key={label} role="img" aria-label={label}>
              <span className="mono">{label.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      <dialog className="gallery-lightbox" ref={lightbox} onClose={() => setSelectedImageIndex(null)} onClick={(event) => {
        if (event.target === event.currentTarget) lightbox.current?.close();
      }} onKeyDown={(event) => {
        if (event.key === "ArrowRight") setSelectedImageIndex((index) => index === null ? null : (index + 1) % project.gallery.length);
        if (event.key === "ArrowLeft") setSelectedImageIndex((index) => index === null ? null : (index - 1 + project.gallery.length) % project.gallery.length);
      }}>
        {selectedImage && (
          <>
            <div className="gallery-lightbox-viewer">
              <button className="gallery-lightbox-arrow" type="button" onClick={() => setSelectedImageIndex((index) => index === null ? null : (index - 1 + project.gallery.length) % project.gallery.length)} aria-label="Previous image">
                <ChevronLeft aria-hidden="true" />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button className="gallery-lightbox-arrow" type="button" onClick={() => setSelectedImageIndex((index) => index === null ? null : (index + 1) % project.gallery.length)} aria-label="Next image">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
            <p className="mono">{selectedImage.alt}</p>
          </>
        )}
      </dialog>

      <Link className="next-project" to={`/work/${next.slug}`}>
        <span className="mono">UP NEXT / {projectNumber(next)}</span>
        <h2>
          {next.title}
          <ArrowRight aria-hidden="true" />
        </h2>
      </Link>
    </article>
  );
}
