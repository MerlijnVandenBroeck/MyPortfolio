import { Asterisk } from 'lucide-react';
import type { Project } from '../data/portfolio';
// Original CSS artwork is intentionally abstract, not a screenshot of the game.
export function Artwork({ project, allowVideo = false }: {project: Project; allowVideo?: boolean}) {
 if (project.video && allowVideo) return <div className="project-art"><video controls preload="none" poster={project.videoPoster} aria-label={`${project.title} project video`}>{/* Provide captions for spoken content. */}<source src={project.video}/>{project.videoCaptions&&<track kind="captions" src={project.videoCaptions} srcLang="en" label="English" default/>}Your browser does not support video.</video></div>;
 if (project.image) return <div className="project-art"><img src={project.image} alt={project.imageAlt} loading="lazy"/></div>;
 return <div className={`project-art art-${project.theme}`}><div className="art-grid" aria-hidden="true"/><div className="art-object" aria-hidden="true">{project.theme==='artifact'?<><i/><i/><i/><span><Asterisk size={70} strokeWidth={1}/></span></>:project.theme==='tape'?<><div className="cassette"><b>FIXTAPE</b><div className="reels"><i/><i/></div><small>SIDE A / PRESS PLAY</small></div></>:<><i/><i/><i/><span>SPIN<br/>DWICH</span></>}</div><span className="art-coordinate" aria-hidden="true">P/W — {project.number} / EXPERIMENT IN PLAY</span><span className="art-placeholder">CONCEPT ART · REPLACE WITH PROJECT IMAGE</span></div>;
}
