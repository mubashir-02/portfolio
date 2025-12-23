import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

import ScrollReveal from "scrollreveal";
// Sample data
const PROJECTS = [
  { 
    id: 1, 
    title: 'WanderLust', 
    desc: 'Full-stack travel listing app with secure authentication and CRUD operations for listings and reviews.', 
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js'], 
    demo: '', 
    repo: '' 
  },
  { 
    id: 2, 
    title: 'Lost and Found', 
    desc: 'Community-driven platform for posting lost items with interactive features for claiming and commenting.', 
    tech: ['JavaScript', 'Node.js', 'Express.js', 'EJS', 'MongoDB', 'CSS'], 
    demo: 'https://back2u-jo9u.onrender.com/', 
    repo: 'https://github.com/mubashir-02/Back2U' 
  },
  { 
    id: 3, 
    title: 'Personal Meal Tracker & AI Diet Coach', 
    desc: 'Web app providing instant nutrition facts for meals with AI chatbot for personalized diet guidance.', 
    tech: ['JavaScript', 'HTML', 'CSS', 'API Integration'], 
    demo: 'https://nutritrackai-puce.vercel.app',
    repo: 'https://github.com/mubashir-02/NutriTrack-AI' 
  },
  
];

const SKILLS = {
  web: [ { name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' } ],
  backend: [ { name: 'Java' }, { name: 'C' } ,{name:"mongoDB"},{name:"Node.js"},{name:"Express.js"}],
  tools: [ { name: 'Git' }, { name: 'VS Code' } ]
};

// --- Components ---
function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link to="/" className="logo">Naseem Muhammad Mubashir</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  const navigate = useNavigate();
  const [typed, setTyped] = useState('');
  const phrases = ['Aspiring Full-Stack Developer', 'SRMIST Student', 'Java • JS • NodeJS • ExpressJS • MongoDB'];

  useEffect(() => {
    let idx = 0, char = 0, forward = true;
    const tick = () => {
      if (forward) {
        if (char <= phrases[idx].length) { setTyped(phrases[idx].slice(0,char)); char++; } 
        else { forward=false; setTimeout(tick,900); return; }
      } else {
        if (char >=0) { setTyped(phrases[idx].slice(0,char)); char--; } 
        else { forward=true; idx=(idx+1)%phrases.length; char=0; }
      }
      setTimeout(tick, forward?70:40);
    };
    const id = setTimeout(tick,400);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <p>Hello, I'm</p>
          <h1>Naseem Muhammad Mubashir</h1>
          <h2>{typed}<span className="cursor">|</span></h2>
          <p>SRMIST student passionate about web apps. Experienced in HTML, CSS, JS, NodeJS, ExpressJS, MongoDB, Java, C.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/projects')}>View Projects</button>
            <a href="/Resume1.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
        <div>
          <img src="/img2.jpg" alt="avatar" className="hero-img"/>
        </div>
      </div>
    </section>
  );
}

function About() {
  useScrollReveal('.about-section');
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </div>
      
      <div className="about-page">
        <div className="about-section">
          <div className="about-main">
            <h2>About Me</h2>
            <p>I am a Computer Science student at SRMIST with a strong foundation in web development and programming. I specialize in creating modern web applications using cutting-edge technologies.</p>
            
            <p>My technical expertise includes HTML5, CSS3, JavaScript, React, Node.js, Express.js, and MongoDB. I have experience in both frontend and backend development, enabling me to build complete full-stack solutions.</p>
            
            <p>I am committed to continuous learning and professional development, consistently working on projects that enhance my technical skills and industry knowledge.</p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h3> Education</h3>
              <p>Bachelor of Technology in Computer Science<br/>SRM Institute of Science and Technology</p>
            </div>
            <div className="highlight-item">
              <h3> Technical Skills</h3>
              <p>Full-Stack Web Development<br/>Frontend & Backend Technologies</p>
            </div>
            <div className="highlight-item">
              <h3> Career Objective</h3>
              <p>Aspiring Full-Stack Developer<br/>Seeking Professional Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <span>{name} ({level}%)</span>
      <div className="skill-progress">
        <div className="skill-fill" style={{width: `${level}%`}}></div>
      </div>
    </div>
  );
}

function Skills() {
  useScrollReveal('.skill-bar');
  const allSkills = [...SKILLS.web, ...SKILLS.backend, ...SKILLS.tools];
  
  return (
    <div className="page-container">
      <div className="page-header" style={{ position: 'relative' }}>
        <h1>My Skills</h1>
        <p>Technical expertise and proficiency levels</p>
      </div>
      <div className="skills-page">
        <div className="skills-inline-container">
          <h3>My Technical Skills</h3>
          <div className="skills-inline">
            {allSkills.map(skill => (
              <div key={skill.name} className="skill-item">
                <div className="skill-icon">
                  {skill.name === 'HTML5' && '🌐'}
                  {skill.name === 'CSS3' && '🎨'}
                  {skill.name === 'JavaScript' && '⚡'}                  
                  {skill.name === 'Java' && '☕'}
                  {skill.name === 'C' && '🔧'}
                  {skill.name === 'mongoDB' && '🍃'}
                  {skill.name === 'Node.js' && '🟢'}
                  {skill.name === 'Express.js' && '🚀'}
                  {skill.name === 'Git' && '📦'}
                  {skill.name === 'VS Code' && '💻'}
                </div>
                <span className="skill-name">{skill.name}</span>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="tech-tags">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.demo && project.demo.trim() !== '' ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        ) : (
          <span className="coming-soon">Coming Soon</span>
        )}
        {project.repo && project.repo.trim() !== '' ? (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
        ) : (
          <span className="private-repo">Private Repo</span>
        )}
      </div>
    </div>
  );
}

function Projects() {
  useScrollReveal('.project-card');
  console.log('Projects component rendering, PROJECTS:', PROJECTS);
  console.log('PROJECTS length:', PROJECTS.length);
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>Showcase of my work and achievements</p>
      </div>
      <div className="projects-page">
        <h3>Featured Projects</h3>
        <p>Here are some of my recent projects that demonstrate my skills and passion for development.</p>
        <div className="projects-grid">
          {PROJECTS.length > 0 ? (
            PROJECTS.map(p => <ProjectCard key={p.id} project={p}/>)
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [form,setForm]=useState({name:'',email:'',message:''});
  const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});
  console.log('Contact component rendering');
  return (
    <div className="page-container">
      <div className="page-header" style={{ position: 'relative' }}>
        <h1>Get In Touch</h1>
        <p>Let's connect and discuss opportunities</p>
      </div>
      <div className="contact-page">
        <h3>Contact Me</h3>
        <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-header">
              <h4>📧 Email</h4>
              <a className="contact-action" href="https://www.linkedin.com/in/muhammadmubashir-naseem-813910323/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
            <p>mubashirnaseem18@gmail.com</p>
            
            <h4>📍 Location</h4>
            <p>Chennai, India</p>
            
            <h4>🎓 Education</h4>
            <p>SRMIST - Computer Science</p>
          </div>
          
          <div className="contact-form-section">
            <h4>Send me a message</h4>
            <form action="https://formsubmit.co/mubashirnaseem18@gmail.com" method="POST" className="contact-form">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required/>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" type="email" required/>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="5" required/>
              <input type="hidden" name="_subject" value="New portfolio message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/contact" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return <footer className="footer">© {new Date().getFullYear()} Naseem Muhammad Mubashir • SRMIST</footer>;
}
// 👇 Add this before export default function App()
function useScrollReveal(selector, animationClass = 'reveal') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, animationClass]);
}

// Main App
export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<div><Hero/><About/><Skills/><Projects/><Contact/></div>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
