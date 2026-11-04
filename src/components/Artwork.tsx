import { Asterisk } from "lucide-react";
import { useRef, useState } from "react";
import { projectNumber, type Project } from "../data/projects";
// Original CSS artwork is intentionally abstract, not a screenshot of the game.
export function Artwork({
  project,
  allowVideo = false,
}: {
  project: Project;
  allowVideo?: boolean;
}) {
  const preview = useRef<HTMLVideoElement>(null);
  const previewRequested = useRef(false);
  const [playing, setPlaying] = useState(false);
  const stopPreview = () => {
    previewRequested.current = false;
    preview.current?.pause();
    setPlaying(false);
  };
  const startPreview = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    previewRequested.current = true;
    const video = preview.current;
    if (video) void video.play().then(() => {
      if (previewRequested.current) setPlaying(true);
      else video.pause();
    }).catch(() => setPlaying(false));
  };
  if (project.video && allowVideo)
    return (
      <div className="project-art">
        <video
          controls
          preload="none"
          poster={project.videoPoster}
          aria-label={`${project.title} project video`}
        >
          {/* Provide captions for spoken content. */}
          <source src={project.video} />
          {project.videoCaptions && (
            <track
              kind="captions"
              src={project.videoCaptions}
              srcLang="en"
              label="English"
              default
            />
          )}
          Your browser does not support video.
        </video>
      </div>
    );
  if (project.image)
    return (
      <div className={`project-art project-cover cover-${project.theme} ${playing ? "is-previewing" : ""}`}
        onMouseEnter={startPreview} onMouseLeave={stopPreview}
        onFocus={startPreview} onBlur={stopPreview}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        {project.previewVideo && !allowVideo && (
          <video ref={preview} muted loop playsInline preload="none" aria-hidden="true" onError={stopPreview}>
            <source src={project.previewVideo} />
          </video>
        )}
      </div>
    );
  return (
    <div className={`project-art art-${project.theme}`}>
      <div className="art-grid" aria-hidden="true" />
      <div className="art-object" aria-hidden="true">
        {project.theme === "artifact" ? (
          <>
            <i />
            <i />
            <i />
            <span>
              <Asterisk size={70} strokeWidth={1} />
            </span>
          </>
        ) : project.theme === "tape" ? (
          <>
            <div className="cassette">
              <b>FIXTAPE</b>
              <div className="reels">
                <i />
                <i />
              </div>
              <small>SIDE A / PRESS PLAY</small>
            </div>
          </>
        ) : project.theme === "spin" ? (
          <>
            <i />
            <i />
            <i />
            <span>
              SPIN
              <br />
              DWICH
            </span>
          </>
        ) : (
          <span>{project.title}</span>
        )}
      </div>
      <span className="art-coordinate" aria-hidden="true">
        P/W — {projectNumber(project)} / EXPERIMENT IN PLAY
      </span>
      <span className="art-placeholder">
        CONCEPT ART · REPLACE WITH PROJECT IMAGE
      </span>
    </div>
  );
}
