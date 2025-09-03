import React from "react";
import "../Styles/About.css";
import pic from "../Images/kinjal.jpg";

const About = () => {
  return (
    <div id="about">
      <h1 className="about-h1" title="About Me" id="about.about.section">
        About
      </h1>
      <div id="line"></div>
      <p>More about my professional and personal interests</p>
      <div id="about-container" className="about-section">
        <div>
          <img
            src={pic}
            alt="My picture did not load i guess..."
            className="about-img home-img"
          />
          <a
            href="https://drive.google.com/file/d/1f-1o5e_4QVXGYl1XvfpCYNzQLMegZJed/view" 

            target="_blank"
            rel="noreferrer"
            className="nav-link resume"
            id="resume-link-2"
          >
            <button id="resume-button-2">RESUME</button>
          </a>
        </div>
        <div className="about-content" id="user-detail-intro">
          <p>
            Greetings! I'm Kinjal Momaya, a versatile AI Engineer with a strong 
            foundation in Full Stack Development (1.9 years, MERN & React Native). 
            I specialize in building scalable, real-time applications and have 
            extensive experience in LLM integration, RAG pipelines, Multi-Agent 
            workflows, and Vector databases.
          </p>
          <p>
            I'm passionate about applying AI to solve complex problems, optimize 
            workflows, and deliver intelligent, user-centric solutions. My expertise 
            spans from building AI-powered support systems that automate 70-80% of 
            queries to creating conversational commerce frameworks that boost lead 
            conversions by ~90%.
          </p>
          <p>
            When I'm not coding, you'll find me exploring my creative side through 
            painting or experimenting in the kitchen with new recipes. I thrive on 
            continuous learning and enjoy turning innovative ideas into reality. 
            Let's collaborate and bring your vision to life with cutting-edge AI 
            technologies and thoughtful designs!
          </p>
          <p id="transparent">
            AI Engineering • Full Stack Development • LLM Integration • RAG Pipelines • Multi-Agent Workflows
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
