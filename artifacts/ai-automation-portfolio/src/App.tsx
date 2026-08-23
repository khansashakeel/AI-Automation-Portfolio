import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDown, ArrowUpRight, Check, Mail, Send } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type ProjectCategory = 'AI / ML' | 'Automation' | 'Data Science';

type Project = {
  number: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'S&P 500 Predictive Market Analytics Engine',
    description: 'A research-grade forecasting stack that turns market structure, macro signals, and alternative data into explainable probabilities — not trading advice.',
    categories: ['AI / ML', 'Data Science'],
    tags: ['Python', 'PyTorch', 'Time Series', 'FastAPI'],
    href: '#contact',
  },
  {
    number: '02',
    title: 'Autonomous LLM Workflow Suite',
    description: 'Tool-using agents that route context, call internal APIs, and validate their own output. Built for reliable work, not parlor tricks.',
    categories: ['AI / ML', 'Automation'],
    tags: ['LLM Agents', 'Python', 'Workflow Graphs', 'Evaluation'],
    href: '#contact',
  },
  {
    number: '03',
    title: 'Real-Time Computer Vision Pipeline',
    description: 'A low-latency vision system for streaming detection and event reasoning, with observability baked into every inference boundary.',
    categories: ['AI / ML', 'Automation'],
    tags: ['TensorFlow', 'OpenCV', 'Docker', 'Cloud'],
    href: '#contact',
  },
  {
    number: '04',
    title: 'Interactive Data Science Dashboard',
    description: 'A decision surface for exploring messy operational data: fast filters, honest uncertainty, and the right chart for the question.',
    categories: ['Data Science'],
    tags: ['Next.js', 'Scikit-Learn', 'SQL', 'Recharts'],
    href: '#contact',
  },
];

const skills = [
  ['Python', '01'], ['PyTorch', '02'], ['TensorFlow', '03'], ['Scikit-Learn', '04'],
  ['FastAPI', '05'], ['Next.js', '06'], ['SQL', '07'], ['Web Scraping', '08'],
  ['Agentic Workflows', '09'], ['Cloud Automation', '10'],
];

function useRevealAnimations() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

function Brand() {
  return (
    <a className="brand" href="#top" data-testid="link-brand" aria-label="Return to top">
      <span className="brand-mark"><span>AR</span></span>
      <span>ARUN R.</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-container topbar" data-testid="header-site">
      <Brand />
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#about" data-testid="link-nav-about">About</a>
        <a href="#work" data-testid="link-nav-work">Selected work</a>
        <a href="#services" data-testid="link-nav-services">Services</a>
        <a href="#contact" data-testid="link-nav-contact">Contact</a>
      </nav>
      <div className="availability" data-testid="status-availability"><i aria-hidden="true" /> OPEN TO WORK</div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="site-container hero" aria-labelledby="hero-title">
      <div>
        <div className="eyebrow reveal">AI systems / automation / data</div>
        <h1 id="hero-title" className="reveal delay-1">I make complex systems <em>useful.</em></h1>
        <p className="hero-copy reveal delay-2">
          AI &amp; Automation Engineer building dependable, observable systems for teams that need the work to move faster — and hold up under pressure.
        </p>
        <div className="hero-actions reveal delay-3">
          <a className="button-primary" href="#work" data-testid="link-hero-work">View selected work <ArrowUpRight size={15} /></a>
          <a className="button-ghost" href="#contact" data-testid="link-hero-contact">Start a conversation <Mail size={14} /></a>
        </div>
        <div className="hero-meta reveal delay-3">
          <div className="meta-item"><span className="meta-value">M.S. Data Science</span><span className="meta-label">In progress · 2025</span></div>
          <div className="meta-item"><span className="meta-value">Remote / Worldwide</span><span className="meta-label">Based in Bengaluru</span></div>
        </div>
      </div>
      <div className="terminal-wrap reveal delay-2" aria-label="Engineer profile status">
        <div className="terminal">
          <div className="terminal-head">
            <span>~/arun/agent.config</span>
            <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line"><span className="num">01</span><span className="prompt">&gt;</span><span className="key">const</span>&nbsp; focus = <span className="string">"systems that ship"</span></div>
            <div className="terminal-line"><span className="num">02</span><span className="prompt">&gt;</span><span className="key">const</span>&nbsp; mode = <span className="value">"deep_work"</span></div>
            <div className="terminal-line"><span className="num">03</span><span className="prompt">&gt;</span><span className="key">const</span>&nbsp; bias = <span className="string">"make_it_real"</span></div>
            <div className="terminal-line"><span className="num">04</span><span className="prompt">&gt;</span><span className="key">const</span>&nbsp; status = <span className="value">"available"</span></div>
            <div className="terminal-bar" aria-label="System readiness 76 percent" />
            <div className="terminal-line"><span className="num">05</span><span className="prompt">&gt;</span><span className="key">run</span>(<span className="string">"build_the_next_thing"</span>)</div>
            <div className="terminal-status"><span>● SYSTEMS ONLINE</span><span>v.2.5.0</span></div>
          </div>
        </div>
      </div>
      <div className="scroll-note">Scroll to inspect <ArrowDown size={13} /></div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="site-container">
        <div className="section-heading reveal">
          <div><div className="eyebrow">01 / Context</div><h2 id="about-title">Curious by default.<br />Precise by design.</h2></div>
          <p>Good engineering leaves fewer things to explain. Great engineering leaves a better question behind.</p>
        </div>
        <div className="about-grid">
          <div className="reveal delay-1">
            <p className="about-lede">I work at the seam between machine learning research and the systems that make it matter.</p>
            <div className="signature">— Arun Raghavan</div>
          </div>
          <div className="reveal delay-2">
            <p className="about-text">I am completing a Master&apos;s Degree in Data Science while building production-minded AI tools: pipelines that explain themselves, agents that know when to ask, and automation that gives people their attention back.</p>
            <p className="about-text">My north star is practical leverage. Start with the constraint, model the risk, ship the smallest useful system, and keep learning from what happens next.</p>
            <div className="stat-grid" aria-label="Profile highlights">
              <div className="stat" data-testid="stat-years"><strong>04+</strong><span>Years building<br />with data</span></div>
              <div className="stat" data-testid="stat-projects"><strong>17</strong><span>Systems shipped<br />end to end</span></div>
              <div className="stat" data-testid="stat-degree"><strong>M.S.</strong><span>Data Science<br />candidate</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="site-container">
        <div className="skills-layout">
          <div className="reveal">
            <div className="eyebrow">02 / Toolkit</div>
            <h2 id="skills-title" className="section-heading" style={{ display: 'block', margin: '13px 0 22px' }}>The stack is a means.<br />The signal is the system.</h2>
            <p className="skills-intro">From first notebook to monitored deployment, I stay close enough to the whole loop to make better decisions at every layer.</p>
          </div>
          <div className="skill-list reveal delay-1" data-testid="list-skills">
            {skills.map(([name, number]) => (
              <div className="skill-row" key={name} data-testid={`skill-${name.toLowerCase().replace(/\s+/g, '-')}`}>
                <span>{name}</span><code>{number}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card reveal" data-testid={`card-project-${index + 1}`}>
      <div className="project-index">{project.number}</div>
      <div>
        <h3 className="project-title" data-testid={`text-project-title-${index + 1}`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
      <a className="project-link" href={project.href} data-testid={`link-project-${index + 1}`}>Inspect case <ArrowUpRight size={14} /></a>
    </article>
  );
}

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');
  const filteredProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );
  const filters: Array<'All' | ProjectCategory> = ['All', 'AI / ML', 'Automation', 'Data Science'];

  return (
    <section id="work" className="section projects-section" aria-labelledby="work-title">
      <div className="site-container">
        <div className="section-heading reveal">
          <div><div className="eyebrow">03 / Selected work</div><h2 id="work-title">Proof, not promises.</h2></div>
          <p>Four builds across prediction, orchestration, perception, and decision intelligence.</p>
        </div>
        <div className="filters reveal delay-1" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              className={`filter ${activeFilter === filter ? 'active' : ''}`}
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              data-testid={`button-filter-${filter.toLowerCase().replace(/\W+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="project-list" data-testid="list-projects">
          {filteredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="site-container">
        <div className="section-heading reveal">
          <div><div className="eyebrow">04 / How I help</div><h2 id="services-title">From blank page<br />to useful signal.</h2></div>
          <p>Short engagements, clear handoffs, and systems that can survive the person who built them.</p>
        </div>
        <div className="services-grid reveal delay-1">
          <div className="service"><div className="service-number">01 / BUILD</div><h3>Applied AI systems</h3><p>Prediction, retrieval, agents, and vision — designed around a measurable user outcome.</p></div>
          <div className="service"><div className="service-number">02 / CONNECT</div><h3>Automation architecture</h3><p>Turn repetitive work into resilient workflows with the right human checkpoints.</p></div>
          <div className="service"><div className="service-number">03 / SHIP</div><h3>Production pathways</h3><p>APIs, deployment, monitoring, and documentation that carry an idea past the demo.</p></div>
          <div className="service"><div className="service-number">04 / CLARIFY</div><h3>Data products</h3><p>Make complex information legible, interactive, and ready for the decision in front of you.</p></div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="site-container">
        <div className="contact-layout">
          <div className="reveal">
            <div className="eyebrow">05 / Contact</div>
            <h2 id="contact-title" className="contact-title">Have a hard problem?</h2>
            <p className="contact-copy">Tell me what is stuck, what you have tried, or what you want to make real. I will get back to you within a few working days.</p>
            <div className="contact-links">
              <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer" data-testid="link-github"><span>GitHub</span> github.com/arun-r <ArrowUpRight size={14} /></a>
              <a className="social-link" href="https://linkedin.com/" target="_blank" rel="noreferrer" data-testid="link-linkedin"><span>LinkedIn</span> linkedin.com/in/arun-r <ArrowUpRight size={14} /></a>
              <a className="social-link" href="mailto:hello@arunbuilds.dev" data-testid="link-email"><span>Email</span> hello@arunbuilds.dev <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="contact-form reveal delay-1">
            {submitted ? (
              <div className="success-state" role="status" aria-live="polite" data-testid="status-form-success">
                <div className="success-icon"><Check size={21} /></div>
                <h3>Message received.</h3>
                <p>Thanks for reaching out. Your note is in the queue, and I will be in touch soon.</p>
                <button type="button" onClick={() => setSubmitted(false)} data-testid="button-send-another">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact Arun" data-testid="form-contact">
                <div className="form-row">
                  <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="e.g. Maya Chen" data-testid="input-name" /></div>
                  <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@company.com" data-testid="input-email" /></div>
                </div>
                <div className="field"><label htmlFor="company">Company / context</label><input id="company" name="company" placeholder="What are you working on?" data-testid="input-company" /></div>
                <div className="field"><label htmlFor="message">The hard problem</label><textarea id="message" name="message" required placeholder="Give me the short version..." data-testid="input-message" /></div>
                <button className="button-primary form-submit" type="submit" data-testid="button-submit-contact">Send message <Send size={14} /></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const rootRef = useRevealAnimations();
  return (
    <div ref={rootRef} className="portfolio-shell" data-testid="page-portfolio">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="site-container footer" data-testid="footer-site">
        <span>© 2025 Arun Raghavan. Built with intent.</span>
        <span>AI / AUTOMATION / DATA</span>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;