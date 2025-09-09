import React from "react";
import "../Styles/About.css";
import pic from "../Images/kinjal.jpg";
import { FaDownload, FaCode, FaBrain, FaRocket, FaPalette, FaUtensils, FaGraduationCap, FaAward } from 'react-icons/fa';
import LazyImage from './LazyImage';

const About = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1f-1o5e_4QVXGYl1XvfpCYNzQLMegZJed/view", "_blank");
  };

  return (
    <section id="about" className="section">
      <div className="section-content">
        <div className="section-header animate-fade-in-up">
          <h2>About Me</h2>
          <div className="section-divider"></div>
          <p>Discover my journey, passion, and expertise in AI engineering and full-stack development</p>
        </div>

        <div className="about-container">
          <div className="about-image animate-fade-in-left">
            <div className="image-container">
              <LazyImage
                src={pic}
                alt="Kinjal Momaya - AI Engineer & Full Stack Developer"
                className="profile-image"
              />
              {/* <div className="image-overlay">
                <button className="btn btn-primary" onClick={handleResumeClick}>
                  <FaDownload />
                  Download Resume
                </button>
              </div> */}
            </div>
          </div>

          <div className="about-content animate-fade-in-right">
            <div className="about-intro">
              <h3>Hello! I'm Kinjal Momaya</h3>
              <p className="intro-text">
                A passionate <strong>AI Engineer</strong> with <strong>1.10+ years</strong> of experience in 
                Full Stack Development, specializing in building intelligent applications that solve 
                real-world problems.
              </p>
            </div>

            <div className="expertise-grid">
              <div className="expertise-item">
                <FaBrain className="expertise-icon" />
                <div>
                  <h4>AI Engineering</h4>
                  <p>LLM integration, RAG pipelines, and Multi-Agent workflows</p>
                </div>
              </div>
              <div className="expertise-item">
                <FaCode className="expertise-icon" />
                <div>
                  <h4>Full Stack Development</h4>
                  <p>MERN stack, React Native, and scalable applications</p>
                </div>
              </div>
              {/* <div className="expertise-item">
                <FaRocket className="expertise-icon" />
                <div>
                  <h4>Performance Optimization</h4>
                  <p>70-80% automation, 90% faster response times</p>
                </div>
              </div> */}
            </div>

            
          </div>
          <div className="about-story">
              <h4>My Journey</h4>
              <p>
                I'm passionate about applying AI to solve complex problems and optimize workflows. 
                My expertise spans from building AI-powered support systems that automate 70-80% of 
                queries to creating conversational commerce frameworks that boost lead conversions by ~90%.
              </p>
              <p>
                I believe in the power of technology to create meaningful impact. Every project I work on 
                is driven by the goal of delivering intelligent, user-centric solutions that make a difference.
              </p>
            </div>

            <div className="personal-interests">
              <h4>Beyond Code</h4>
              <div className="interests-grid">
                <div className="interest-item">
                  <FaPalette className="interest-icon" />
                  <span>Painting & Art</span>
                </div>
                <div className="interest-item">
                  <FaUtensils className="interest-icon" />
                  <span>Cooking & Recipes</span>
                </div>
                <div className="interest-item">
                  <FaGraduationCap className="interest-icon" />
                  <span>Continuous Learning</span>
                </div>
                <div className="interest-item">
                  <FaAward className="interest-icon" />
                  <span>Innovation</span>
                </div>
              </div>
            </div>

            <div className="call-to-action">
              <p>
                <strong>Let's collaborate and bring your vision to life</strong> with cutting-edge AI 
                technologies and thoughtful designs!
              </p>
              {/* <button className="btn btn-accent" onClick={handleResumeClick}>
                <FaDownload />
                View My Resume
              </button> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
