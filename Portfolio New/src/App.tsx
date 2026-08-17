import { useEffect, useState } from 'react';
import CursorGrid from './components/CursorGrid.jsx';
import GlareHover from './components/GlareHover.jsx';
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Code,
  Mail,
  Menu,
  Share2,
  X,
} from 'lucide-react';

type Skill = {
  number: string;
  title: string;
  subtitle: string;
  tools: string;
};

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  kind: string;
};

const skills: Skill[] = [
  { number: '01', title: 'UI/UX Design', subtitle: 'Visual & Interaction Design', tools: 'Figma, Illustrator, Photoshop, Canva' },
  { number: '02', title: 'Frontend Dev', subtitle: 'Web & Interface Engineering', tools: 'Next.js, React, Tailwind, JavaScript' },
  { number: '03', title: 'Backend & APIs', subtitle: 'Server-side Engineering', tools: 'Python, FastAPI, Node.js, MongoDB' },
  { number: '04', title: 'AI Engineering', subtitle: 'Local AI & Agents', tools: 'Ollama, ChromaDB, FastAPI, OCR' },
  { number: '05', title: 'Game Dev', subtitle: 'Interactive Experiences', tools: 'Unity, C#, Game Design' },
  { number: '06', title: 'Graphic Design', subtitle: 'Brand & Visual Identity', tools: 'Branding, Logo Design, Typography' },
];

const projects: Project[] = [
  {
    number: '01',
    title: 'Groundtruth',
    description: 'A real profile readiness audit. Analyzes your actual GitHub activity and resume together against a target job — real skill gaps, real over-exposure, no template scoring.',
    tags: ['FastAPI', 'Groq', 'GitHub API', 'Vercel'],
    href: 'https://groundtruthai.vercel.app',
    kind: 'AI Tool / 2026',
  },
  {
    number: '02',
    title: 'Vineeth GPT',
    description: "A personal GPT that answers questions about me — projects, stack, what I'm open to next. Editorial-style Q&A interface with light/dark mode, running on Groq's free tier for fast, zero-cost inference.",
    tags: ['FastAPI', 'Groq', 'Llama 3.3', 'Vercel'],
    href: 'https://vineeth-gpt.vercel.app/',
    kind: 'AI Interface / 2025',
  },
  {
    number: '03',
    title: 'Creatiwise',
    description: 'Full logo redesign and brand system. Four distinct concepts, eight light/dark variations built around a navy and magenta identity system.',
    tags: ['Branding', 'Illustrator', 'Figma', 'Identity'],
    href: 'https://github.com/FenderRicky',
    kind: 'Brand Identity / 2024',
  },
];

const marqueeItems = ['UI/UX Design', 'Full-Stack Dev', 'AI Engineering', 'Graphic Design', 'Figma', 'Next.js', 'Python', 'Unity', 'Branding', 'FastAPI'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Ricky Fender home">RF<span>.</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Skills', 'Projects', 'History', 'Contact'].map((label, index) => <a key={label} href={`#${label.toLowerCase()}`} onClick={closeMenu} style={{ transitionDelay: menuOpen ? `${100 + index * 60}ms` : '0ms' }}>{label}</a>)}
        </nav>
        <a className="header-availability" href="mailto:thadigotlavineeth7@gmail.com">Available <span className="status-dot" /></a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <CursorGrid cellSize={64} color="#C81E1E" radius={160} falloff="smooth" holdTime={350} fadeDuration={900} lineWidth={1} maxOpacity={0.55} fillOpacity={0.06} gridOpacity={0} cellRadius={0} clickPulse={true} pulseSpeed={550} />
        <div className="hero-word" aria-hidden="true">PORTFOLIO</div>
        <div className="hero-grid page-width">
          <div className="hero-copy reveal">
            <p className="eyebrow">Independent creative / Hyderabad, IN</p>
            <h1>RICKY<br /><span>FENDER</span></h1>
            <p className="hero-intro">Designer. Developer. AI builder.<br />I don't specialise — I execute<br className="desktop-break" /> across the board.</p>
            <GlareHover width="auto" height="auto" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.25} glareAngle={-35} glareSize={280} transitionDuration={650} className="glare-inline"><a className="text-link" href="#projects">Explore the work <ArrowDown size={16} /></a></GlareHover>
          </div>
          <div className="portrait-wrap reveal reveal-delay-1">
            <GlareHover width="100%" height="100%" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.18} glareAngle={-35} glareSize={200} transitionDuration={800} className="glare-portrait"><div className="portrait-frame"><img src="/image.jpg" alt="Vineeth Thadigotla, known as Ricky Fender" /></div></GlareHover>
            <span className="portrait-caption">VINEETH THADIGOTLA<br />AKA RICKY FENDER</span>
            <span className="portrait-index">01 / 05</span>
          </div>
          <div className="hero-side reveal reveal-delay-2">
            <p className="side-label">Currently</p>
            <p>B.Tech CSE<br />(Data Science)<br />MLR Institute of Technology</p>
            <div className="badge-list">
              <span>Available for work</span><span>Open to internships</span><span>Freelance ready</span>
            </div>
          </div>
        </div>
        <div className="marquee" aria-label="Areas of expertise">
          <div className="marquee-track">{[...marqueeItems, ...marqueeItems].map((item, index) => <span key={`${item}-${index}`}>{item}<b>✳</b></span>)}</div>
        </div>
      </section>

      <section className="section page-width about-section" id="about">
        <div className="section-heading reveal"><span className="section-number">01</span><h2>WHO I AM</h2></div>
        <div className="about-layout">
          <p className="about-lead reveal reveal-delay-1">I'm Vineeth Thadigotla — studying Computer Science (Data Science) at MLR Institute of Technology, Hyderabad. B.Tech, 2024 to 2028.</p>
          <div className="about-detail reveal reveal-delay-2"><p>I'm not a designer who codes, or a developer who dabbles in design. I'm someone who does both properly — and builds AI systems on top of that.</p><p>Everything I make has intention behind it. Whether it's a logo system, a full-stack app, or an AI agent running locally on your machine.</p><div className="tag-cloud"><span>Hyderabad</span><span>Open to Internships</span><span>Freelance Ready</span><span>MLR Institute</span></div></div>
        </div>
      </section>

      <section className="section skills-section page-width" id="skills">
        <div className="section-heading reveal"><span className="section-number">02</span><h2>SKILLS &amp; CRAFT</h2></div>
        <div className="skills-grid">{skills.map((skill, index) => <article className={`skill-card reveal reveal-delay-${(index % 3) + 1}`} key={skill.number}><GlareHover width="100%" height="auto" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.12} glareAngle={-35} glareSize={220} transitionDuration={700} className="skill-card-glare"><span className="item-number">{skill.number}</span><div><h3>{skill.title}</h3><p>{skill.subtitle}</p></div><span className="tool-list">{skill.tools}</span></GlareHover></article>)}</div>
      </section>

      <section className="section projects-section page-width" id="projects">
        <div className="section-heading reveal"><span className="section-number">03</span><h2>FEATURED<br className="mobile-only" /> PROJECTS</h2><span className="section-aside">Selected work<br />/ 2024—26</span></div>
        <div className="projects-list">{projects.map((project, index) => <a className={`project-row reveal reveal-delay-${(index % 3) + 1}`} href={project.href} target="_blank" rel="noreferrer" key={project.number} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`); }}><GlareHover width="100%" height="100%" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.08} glareAngle={-35} glareSize={260} transitionDuration={750} className="glare-project-row"><span className="item-number">{project.number}</span><div className="project-title"><span>{project.kind}</span><h3>{project.title}{project.title === 'Creatiwise' && <em>— Brand Identity</em>}</h3></div><p>{project.description}</p><div className="project-footer"><div className="tag-cloud">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ArrowUpRight size={22} /></div></GlareHover></a>)}</div>
      </section>

      <section className="section history-section page-width" id="history">
        <div className="section-heading reveal"><span className="section-number">04</span><h2>WORK<br className="mobile-only" /> HISTORY</h2></div>
        <div className="history-row reveal reveal-delay-1"><div className="history-date">Ongoing</div><div className="history-role"><span>Freelance</span><h3>Graphic Designer <b>·</b> Upwork</h3></div><ul><li>Brand identity, logo design and visual campaign work for clients</li><li>UI/UX design projects from app interfaces to marketing assets</li><li>Positioned as a design-forward hybrid creative</li></ul></div>
      </section>

      <section className="contact-section" id="contact"><div className="page-width contact-inner reveal"><div className="section-heading"><span className="section-number">05</span><h2>GOT A PROJECT<br />IN MIND<span>?</span></h2></div><p>Open to internships, freelance work and anything worth building. If it's interesting, reach out.</p><GlareHover width="100%" height="auto" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.2} glareAngle={-35} glareSize={220} transitionDuration={650} className="glare-inline"><a className="contact-button" href="mailto:thadigotlavineeth7@gmail.com">Email Me <Mail size={18} /></a></GlareHover><div className="social-links"><GlareHover width="auto" height="auto" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#0a0a0a" glareOpacity={0.25} glareAngle={-35} glareSize={260} transitionDuration={600} className="glare-inline"><a href="https://github.com/FenderRicky" target="_blank" rel="noreferrer"><Code size={18} /> GitHub</a></GlareHover><GlareHover width="auto" height="auto" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#0a0a0a" glareOpacity={0.25} glareAngle={-35} glareSize={260} transitionDuration={600} className="glare-inline"><a href="https://www.linkedin.com/in/vineeth-thadigotla-0569381b9/" target="_blank" rel="noreferrer"><Share2 size={18} /> LinkedIn</a></GlareHover><GlareHover width="auto" height="auto" background="transparent" borderRadius="0px" borderColor="transparent" glareColor="#0a0a0a" glareOpacity={0.25} glareAngle={-35} glareSize={260} transitionDuration={600} className="glare-inline"><a href="https://www.instagram.com/fender_ricky" target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a></GlareHover></div></div></section>

      <footer className="site-footer page-width"><span>© 2026 Vineeth Thadigotla — Ricky Fender</span><span>Hyderabad, India</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

export default App;
