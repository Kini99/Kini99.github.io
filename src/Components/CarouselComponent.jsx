import React, { useState } from "react";
import "../Styles/Projects.css";
import HomeSweeter from "../Images/HomeSweeter.png";
import Workflow from "../Images/Workflow.png";
import LmsSupport from "../Images/LmsSupport.png";
import PrepAI from "../Images/PrepAI.png";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import LazyImage from './LazyImage';

const CarouselComponent = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Intelligent LMS Support System",
      description: "AI-powered LMS support system that automates 70-80% of student queries, reducing manual workload by 3-4x, using multi-agent workflows, LLM integration, and RAG with Pinecone database.",
      image: LmsSupport,
      technologies: ["LangGraph", "LangChain", "Fast API", "Next.js", "TypeScript", "Redis", "MongoDB", "Pinecone"],
      githubUrl: "https://github.com/Kini99/AI_Powered_Support_System",
      demoUrl: "https://drive.google.com/file/d/1RFn-I9orw1RU48T0IxHp9oxT1Bc5xLUZ/view?usp=drive_link",
      category: "AI Engineering",
      icon: <FaBrain />,
      color: "#8B5CF6"
    },
    {
      id: 2,
      title: "Smart Conversational Social Commerce Automation",
      description: "AI-driven conversational commerce framework on WhatsApp that automates ~80% of repetitive tasks, reducing average response time by ~90% and boosts lead conversions through faster enquiry handling.",
      image: Workflow,
      technologies: ["n8n", "Twilio WhatsApp API", "Pinecone", "MongoDB"],
      githubUrl: "https://github.com/Kini99/Social-Commerce-Automation",
      demoUrl: "https://drive.google.com/file/d/1cQfFp5Wcqv5E1xum9musI9fO1kIYThhu/view?usp=drive_link",
      category: "AI Automation",
      icon: <FaRocket />,
      color: "#10B981"
    },
    {
      id: 3,
      title: "Prep AI",
      description: "An AI-powered self-interview preparation platform designed to empower job seekers and interviewees in mastering their interview skills.",
      image: PrepAI,
      technologies: ["React", "Javascript", "Tailwind CSS", "Chakra UI", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Kini99/logicore",
      demoUrl: "https://drive.google.com/file/d/1fFivn6ysTEZkAU7BaN-PIy7SGA1hLe4W/view?usp=sharing",
      category: "Full Stack",
      icon: <FaCode />,
      color: "#3B82F6"
    },
    {
      id: 4,
      title: "Home Sweeter",
      description: "A real-estate e-commerce platform which acts as a one stop solution for users to buy, sell or rent properties.",
      image: HomeSweeter,
      technologies: ["React", "Javascript", "CSS", "Chakra UI", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Kini99/Home-Sweeter",
      demoUrl: "https://drive.google.com/file/d/1IjNg0cMdJv1iXW6MpFvxnnnzuZgReAOl/view?usp=drive_link",
      category: "Full Stack",
      icon: <FaCode />,
      color: "#F59E0B"
    }
  ];
  return (
    <div className="projects-container">
      {/* Project Navigation */}
      <div className="project-navigation">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`nav-dot ${activeProject === index ? 'active' : ''}`}
            onClick={() => setActiveProject(index)}
            style={{ '--dot-color': project.color }}
          >
            <span className="nav-dot-icon">{project.icon}</span>
            <span className="nav-dot-label">{project.category}</span>
          </button>
        ))}
      </div>

      {/* Project Display */}
      <div className="project-display">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${activeProject === index ? 'active' : ''}`}
            style={{ '--project-color': project.color }}
          >
            <div className="project-image">
              <LazyImage src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-category">
                  <span className="category-icon" style={{ color: project.color }}>
                    {project.icon}
                  </span>
                  <span className="category-text">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn github-btn"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn demo-btn"
                >
                  <FaPlay />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Indicators */}
      <div className="project-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${activeProject === index ? 'active' : ''}`}
            onClick={() => setActiveProject(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent
