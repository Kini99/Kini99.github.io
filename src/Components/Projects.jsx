import React from 'react';
import "../Styles/Projects.css";
import CarouselComponent from './CarouselComponent';

const Projects = () => {
  return (
    <section id="project-section" className="section">
      <div className="section-content">
        <div className="section-header animate-fade-in-up">
          <h2>My Projects</h2>
          <div className="section-divider"></div>
          <p>A showcase of my best projects and AI-powered solutions</p>
        </div>

        <CarouselComponent />
      </div>
    </section>
  )
}

export default Projects