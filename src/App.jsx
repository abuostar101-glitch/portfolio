import { useEffect, useState } from 'react'
import { profile, nav, skills, projects, internship, education } from './data.js'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
)

function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}

function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(nav.map(([id]) => id))
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>Abubakar A.</a>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's Talk</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="hello">Hi, I'm Abubakar.</p>
        <h1>Junior .NET Developer</h1>
        <p className="lede">I build web applications with C#, ASP.NET Core and SQL Server. I graduated with a BCA in 2026 and I'm looking for a junior role where I can work on real software and keep growing.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">View My Projects</a>
          <a className="btn btn-ghost" href="#contact">Contact Me</a>
        </div>
        <div className="social">
          <a href={profile.github} {...ext} aria-label="GitHub profile"><GitHubIcon /> GitHub</a>
          <a href={profile.linkedin} {...ext} aria-label="LinkedIn profile"><LinkedInIcon /> LinkedIn</a>
        </div>
      </div>
      <figure className="req" aria-label="A JSON response describing Abubakar, shown as a code sample">
        <div className="req-bar"><span className="req-method">GET</span> /api/developers/abubakar</div>
        <pre className="req-body" aria-hidden="true">
          <code>
            <span className="l" style={{ '--i': 0 }}><b>200 OK</b></span>
            <span className="l" style={{ '--i': 1 }}>{'{'}</span>
            <span className="l" style={{ '--i': 2 }}>{'  "role": '}<i>"Junior .NET Developer"</i>,</span>
            <span className="l" style={{ '--i': 3 }}>{'  "degree": '}<i>"BCA, 2026"</i>,</span>
            <span className="l" style={{ '--i': 4 }}>{'  "location": '}<i>"Chennai"</i>,</span>
            <span className="l" style={{ '--i': 5 }}>{'  "stack": ['}<i>"C#"</i>, <i>"ASP.NET Core"</i>,</span>
            <span className="l" style={{ '--i': 6 }}>{'            '}<i>"SQL Server"</i>, <i>"React"</i>],</span>
            <span className="l" style={{ '--i': 7 }}>{'  "openToWork": '}<em>true</em></span>
            <span className="l" style={{ '--i': 8 }}>{'}'}</span>
          </code>
        </pre>
      </figure>
    </section>
  )
}

function About() {
  return (
    <section className="section wrap" id="about">
      <h2>About</h2>
      <div className="about-grid">
        <div className="prose">
          <p>I'm a 2026 BCA graduate focused on .NET development. I'm most interested in backend and full-stack work: designing data, building APIs and connecting them to a screen someone can use.</p>
          <p>I learn by building. My projects cover ASP.NET Core MVC with Dapper and SQL Server, a Web API with Entity Framework Core and a React frontend, and a live website for a real business.</p>
          <p>I'm looking for an entry-level role where I can contribute to real projects, learn from experienced developers and keep sharpening my skills.</p>
        </div>
        <ul className="facts">
          <li><span>Focus</span>ASP.NET Core, C#, SQL Server</li>
          <li><span>Education</span>BCA, May 2026</li>
          <li><span>Based in</span>{profile.location}</li>
          <li><span>Looking for</span>Junior .NET, C# and ASP.NET Core roles</li>
        </ul>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section wrap" id="skills">
      <h2>Technical skills</h2>
      <div className="skill-grid">
        {skills.map((g) => (
          <article className="skill" key={g.title}>
            <h3>{g.title}</h3>
            <p>{g.note}</p>
            <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Preview({ id }) {
  if (id === 'oems') return (
    <div className="pv pv-oems" aria-hidden="true">
      <div className="pv-roles"><i>Admin</i><i>Staff</i><i className="on">Student</i></div>
      <div className="pv-line w70" /><div className="pv-line w50" />
      <div className="pv-row"><span className="pv-pill">Exam scheduled</span><span className="pv-pill dim">Result pending</span></div>
      <div className="pv-lock">Sign in locked after 3 failed attempts</div>
    </div>
  )
  if (id === 'inventory') return (
    <div className="pv pv-inv" aria-hidden="true">
      <div className="pv-row head"><span>Product</span><span>Qty</span><span>Price</span></div>
      <div className="pv-row"><span className="pv-line w70" /><span>24</span><span>—</span></div>
      <div className="pv-row"><span className="pv-line w50" /><span className="low">3</span><span>—</span></div>
      <div className="pv-row"><span className="pv-line w60" /><span>12</span><span>—</span></div>
      <div className="pv-swagger">Swagger/OpenAPI</div>
    </div>
  )
  return (
    <div className="pv pv-safa" aria-hidden="true">
      <div className="pv-nav"><i /><i /><i /><i /><i /></div>
      <div className="pv-hero"><div className="pv-line w70" /><div className="pv-line w50" /><span className="pv-pill">WhatsApp inquiry</span></div>
      <div className="pv-cards"><i /><i /><i /></div>
    </div>
  )
}

function Projects() {
  return (
    <section className="section wrap" id="projects">
      <h2>Projects</h2>
      <p className="section-note">Previews below are drawn in CSS to show each app's structure. They are not screenshots.</p>
      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.id}>
            <div className="project-visual"><Preview id={p.id} /></div>
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <ul className="chips">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <ul className="features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="cta-row">
                <a className="btn btn-ghost" href={p.github} {...ext}><GitHubIcon /> GitHub<span className="sr"> repository for {p.name}</span></a>
                {p.live && <a className="btn btn-primary" href={p.live} {...ext}>Live Demo<span className="sr"> of {p.name}</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section wrap" id="experience">
      <h2>Internship</h2>
      <ol className="timeline">
        <li>
          <h3>{internship.role}</h3>
          <p className="meta">{internship.company}, {internship.place}</p>
          <p className="meta">{internship.period}</p>
          <ul className="features">{internship.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </li>
      </ol>
    </section>
  )
}

function Education() {
  return (
    <section className="section wrap" id="education">
      <h2>Education</h2>
      <ol className="timeline">
        <li>
          <h3>{education.degree}</h3>
          <p className="meta">{education.college}, {education.place}</p>
          <p className="meta">Graduated {education.graduation}</p>
        </li>
      </ol>
    </section>
  )
}

function Contact() {
  return (
    <section className="section wrap" id="contact">
      <h2>Let's talk</h2>
      <p className="section-note">The quickest way to reach me is email or phone. I'm open to junior .NET, C# and ASP.NET Core roles.</p>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}?subject=Opportunity%20for%20Abubakar`}><span>Email</span>{profile.email}</a>
        <a className="contact-card" href={profile.phoneHref}><span>Phone</span>{profile.phone}</a>
        <a className="contact-card" href={profile.linkedin} {...ext}><span>LinkedIn</span>abubakar-dotnet-dev</a>
        <a className="contact-card" href={profile.github} {...ext}><span>GitHub</span>abuostar101-glitch</a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact />
      </main>
      <footer className="footer wrap">
        <p><strong>{profile.name}</strong> · {profile.title}</p>
        <p className="foot-links">
          <a href={profile.github} {...ext}>GitHub</a>
          <a href={profile.linkedin} {...ext}>LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  )
}
