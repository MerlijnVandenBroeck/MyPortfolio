import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, Download, Plus, UserRound } from 'lucide-react';
import { personal, projects } from './data/portfolio';
import { Artwork } from './components/Artwork';
import { Header, Footer } from './components/Layout';
import type { ReactNode } from 'react';
export const animation = { duration: 0.55, distance: 20 }; // Shared reveal settings.
function Reveal({children,className=''}:{children:ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:animation.distance}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:animation.duration}}>{children}</motion.div>}
function SectionLabel({number,children}:{number:string;children:ReactNode}){return <div className="section-label"><span>{number} / {children}</span><Plus size={15}/></div>}
function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-role mono">{personal.title}</p>
        <h1 id="hero-title">{personal.name}</h1>
        <Link className="text-link hero-scroll" to="/?section=work">SCROLL TO SEE MY WORK <ArrowDown size={16}/></Link>
      </div>
      <div className="hero-portrait">
        {personal.photo ? <img src={personal.photo} alt={personal.photoAlt} fetchPriority="high"/> :
          <div className="portrait-placeholder" role="img" aria-label="Portrait photo placeholder">
            <UserRound aria-hidden="true" strokeWidth={1}/>
            <span className="mono">PHOTO TO ADD</span>
          </div>}
      </div>
    </section>

    <section id="work" className="section work">
      <SectionLabel number="01">WORK</SectionLabel>
      <Reveal className="section-intro"><h2>Selected work</h2></Reveal>
      <div className="project-grid">{projects.map((p,i) =>
        <Reveal key={p.slug} className={`project-card ${i===0?'flagship':''}`}>
          <Link to={`/work/${p.slug}`} className="project-visual" aria-label={`View ${p.title} case study`}>
            <Artwork project={p}/><span className="round-link"><ArrowUpRight/></span>
            {i===0&&<span className="flagship-tag">FEATURED PROJECT</span>}
          </Link>
          <div className="project-meta mono"><span>{p.number} / {p.category}</span><span>CASE STUDY ↗</span></div>
          <Link to={`/work/${p.slug}`} className="project-title"><h3>{p.title}</h3><ArrowUpRight/></Link>
          <p>{p.description}</p>
        </Reveal>
      )}</div>
    </section>

    <section id="about" className="section about">
      <SectionLabel number="02">ABOUT</SectionLabel>
      <Reveal className="about-layout">
        <h2>About me</h2>
        <div className="about-copy">
          <p>{personal.about}</p>
          <dl className="about-facts">{[['Background',personal.background],['Skills',personal.skills],['Tools',personal.tools],['Education',personal.education]].map(([label,value]) =>
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          )}</dl>
          {personal.cv ? <a className="button outline" href={personal.cv} download>DOWNLOAD CV <Download size={16}/></a> :
            <span className="unavailable mono"><Download size={16}/> CV TO BE ADDED</span>}
        </div>
      </Reveal>
    </section>

    <section id="contact" className="section contact">
      <SectionLabel number="03">CONTACT</SectionLabel>
      <Reveal>
        <h2>Contact</h2>
        <div className="contact-bottom">
          {personal.email ? <a className="button" href={`mailto:${personal.email}`}>EMAIL ME <ArrowUpRight size={18}/></a> :
            <span className="contact-pending">Email to add <span className="mono">/ CONTACT DETAILS COMING SOON</span></span>}
          <div className="socials">{[['LinkedIn',personal.linkedin],['itch.io',personal.itch],['Other profile',personal.otherProfile]].map(([label,url]) =>
            url ? <a key={label} href={url} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={14}/></a> :
              <span key={label}>{label} <small>TO ADD</small></span>
          )}</div>
        </div>
      </Reveal>
    </section>
  </>;
}
function CaseStudy(){const {slug}=useParams();const project=projects.find(p=>p.slug===slug);if(!project)return <NotFound/>;const next=projects[(projects.indexOf(project)+1)%projects.length];return <article className="case-study section"><Link className="text-link" to="/?section=work"><ArrowLeft size={16}/> BACK TO WORK</Link><div className="case-heading"><span className="mono accent">{project.number} / {project.category}</span><h1>{project.title}</h1><p>{project.description}</p></div><Artwork project={project} allowVideo/><div className="case-facts">{[['My role',project.role],['Team size',project.team],['Timeframe',project.timeframe],['Engine & tools',project.tools],['Genre & platform',project.genre]].map(([label,value])=><div key={label}><span className="mono">{label}</span><p>{value}</p></div>)}</div><div className="case-sections">{[['Project overview',project.overview],['My responsibilities',project.responsibilities],['Design challenges',project.challenges],['Process & experimentation',project.process],['Production contributions',project.production],['Results & lessons learned',project.results]].map(([label,value],i)=><Reveal className="case-section" key={label}><span className="mono accent">0{i+1}</span><h2>{label}</h2><p>{value}</p></Reveal>)}</div>{project.gallery.map(image=><img key={image.src} className="gallery-image" src={image.src} alt={image.alt} loading="lazy"/>)}{project.url?<a className="button" href={project.url} target="_blank" rel="noreferrer">VIEW GAME <ArrowUpRight size={16}/></a>:<p className="unavailable mono">EXTERNAL GAME LINK TO ADD</p>}<Link className="next-project" to={`/work/${next.slug}`}><span className="mono">UP NEXT / {next.number}</span><h2>{next.title}<ArrowRight/></h2></Link></article>}
function NotFound(){return <section className="section not-found"><span className="mono accent">404 / OUT OF BOUNDS</span><h1>This level isn't here.</h1><Link className="button" to="/">BACK TO HOME <ArrowLeft size={16}/></Link></section>}
export default function App(){const location=useLocation();useEffect(()=>{const section=new URLSearchParams(location.search).get('section');if(section&&location.pathname==='/'){requestAnimationFrame(()=>document.getElementById(section)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));}else window.scrollTo(0,0);const project=projects.find(p=>location.pathname===`/work/${p.slug}`);document.title=`${project?project.title+' — ':''}${personal.name} — PLAY / WORK`;},[location]);return <><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/work/:slug" element={<CaseStudy/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
