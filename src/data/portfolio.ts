// Edit portfolio content here. Empty URLs intentionally render as unavailable, never fake links.
export const personal = {
  name: 'Merlijn Van den Broeck', title: 'Game Designer × Producer',
  photo: '', photoAlt: 'Merlijn Van den Broeck',
  about: 'I’m drawn to indie games, experimental gameplay, and the unexpected moments that make an experience stick. I’m equally interested in shaping the play and helping a team bring it to life.',
  email: '', linkedin: '', itch: '', otherProfile: '', cv: '',
  background: 'To add: your background and path into games.',
  education: 'To add: qualification, school, and graduation year.',
  skills: 'To add: your verified skills and specialties.',
  tools: 'To add: the engines and tools you use.',
};
export const navigation = [{label:'Work',id:'work'},{label:'About',id:'about'},{label:'Contact',id:'contact'}];
export type Project = { slug:string; title:string; number:string; category:string; role:string; description:string; theme:string; image:string; imageAlt:string; video?:string; videoPoster?:string; videoCaptions?:string; team:string; timeframe:string; tools:string; genre:string; overview:string; responsibilities:string; challenges:string; process:string; production:string; results:string; url:string; gallery: {src:string;alt:string}[] };
const pending = 'Content to add — replace with verified project information.';
export const projects: Project[] = [
  {slug:'artifact-ambush',title:'Artifact Ambush',number:'01',category:'DESIGN + PRODUCTION',role:'Game design & production',description:'A closer look at the project that brings both sides of my practice together.',theme:'artifact',image:'',imageAlt:'',team:pending,timeframe:pending,tools:pending,genre:pending,overview:pending,responsibilities:pending,challenges:pending,process:pending,production:pending,results:pending,url:'',gallery:[]},
  {slug:'fixtape',title:'Fixtape',number:'02',category:'PROJECT CASE STUDY',role:'Role to add',description:'The ideas, experiments, and decisions behind Fixtape. Case-study details coming soon.',theme:'tape',image:'',imageAlt:'',team:pending,timeframe:pending,tools:pending,genre:pending,overview:pending,responsibilities:pending,challenges:pending,process:pending,production:pending,results:pending,url:'',gallery:[]},
  {slug:'spindwich',title:'Spindwich',number:'03',category:'PROJECT CASE STUDY',role:'Role to add',description:'An inside look at Spindwich. Project context and process to be added.',theme:'spin',image:'',imageAlt:'',team:pending,timeframe:pending,tools:pending,genre:pending,overview:pending,responsibilities:pending,challenges:pending,process:pending,production:pending,results:pending,url:'',gallery:[]},
];
