import React, { useState, useEffect } from 'react';
import "../Styles/Home.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "AI Engineer",
    "RAG & LLM Specialist",
    "Full Stack Developer", 
    "MERN Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleKnowMoreClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1f-1o5e_4QVXGYl1XvfpCYNzQLMegZJed/view", "_blank");
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-left">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              Kinjal Momaya
            </h1>
            
            <div className="role-container">
              <span className="role-text" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="hero-description">
              Passionate about building intelligent applications that solve real-world problems. 
              I specialize in AI engineering and full-stack development with 
              expertise in creating scalable, user-centric solutions.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <FaBrain className="stat-icon" />
                <span>1.9+ Years Experience</span>
              </div>
              <div className="stat-item">
                <FaCode className="stat-icon" />
                <span>25+ Projects</span>
              </div>
              <div className="stat-item">
                <FaRocket className="stat-icon" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleHireMeClick}>
                <FaEnvelope />
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={handleKnowMoreClick}>
                Learn More
              </button>
              <button className="btn btn-accent" onClick={handleResumeClick}>
                <FaDownload />
                Download Resume
              </button>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/Kini99" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kinjal-momaya-73b124126" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:kinjalmomaya99@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-in-right">
            <div className="floating-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="card-title">AI Engineer</span>
              </div>
              <div className="card-content">
                <div className="code-block">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span>&nbsp;</span>
                    <span className="code-variable">engineer</span>
                    <span>&nbsp;</span>
                    <span className="code-operator"> = </span>
                    <span>&nbsp;</span>
                    <span className="code-string">"Kinjal Momaya"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span>&nbsp;</span>
                    <span className="code-variable"> skills</span>
                    <span>&nbsp;</span>
                    <span className="code-operator"> = [</span>
                    <span>&nbsp;</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"LLM Integration"</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"RAG Pipelines"</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"Multi-Agent Workflows"</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"MERN Stack"</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line">
                    <span className="code-operator">]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Home

{/* <div className="phone">
        <div className="inner-skin">
          <div className="phone-content">
            <h1 className="title">Hello There!</h1>
            <img src={phone_img} alt="image" className='bounce' />
            <h2 className="subtitle">Let's build together...</h2>
            <Link to={"/contact"} className='nav-link contact'><button className='button-rainbow'>Connect with me!</button></Link>
          </div>
        </div>
      </div> */}

{/* <div className='terminal-container'>
<div className="recruitment-notifier">
    <h3 className="title">Recruitment Status :</h3>
    <h1><span className="notification-status"></span>Open to Work</h1>
  </div>
      <div className='terminal'>
      <header className="terminal-header">
        <div className="terminal-header-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimise"></div>
          <div className="terminal-button expand"></div>
        </div>
      </header>
      <div className="terminal-body">
      <h1 id="user-detail-name" className='color-orange'>I am Kinjal Momaya,</h1>
      <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=orange&size=25&left=true&vCenter=true&width=600&height=50&lines=Full+Stack+Web+Developer++;MERN+Developer++;Frontend Specialist" className='a-img'/></a>

      <h3 id="user-detail-intro" className='color-green'>Here are some facts about me:</h3>
      <p className='color-yellow'>✅ Full Stack Web Developer</p>
      <p className='color-orange'>✅ 1200+ Hours of Coding</p>
      <p className='color-red'>✅ 100+ Hours of DSA</p>
      <p className='color-violet'>✅ 5 Major Projects | 25+ Mini Projects</p>
      <p className='color-indigo'>✅ One of the top performers of the batch at Masai School</p>
     <h2> <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-2">VIEW RESUME</a></h2>
      </div>
    </div>
    </div> */}