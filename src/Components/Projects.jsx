import React from 'react';
import "../Styles/Projects.css";
import ReserveNow from "../Images/ReserveNow.jpg";
import MagnaMen from "../Images/MagnaMen.jpg";
import FashionPlus from "../Images/FashionPlus.jpg";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1>My Projects</h1>
        <div id='line'></div>
        <p>A showcase of my best projects</p>

        {/* Project Card 1 */}
        <div className='project-card'>
          <img src={ReserveNow} alt="image" />
          <div>
            <h1 className='project-title'>Reserve Now</h1>
            <div className='project-tech-stack'>
              <p>React</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>Chakra UI</p>
            </div>
            <p className='project-description'>A travel e-commerce app cloned from booking.com which allows users to book flight tickets seamlessly.</p>
            <div id='project-button'>
            <a href='https://github.com/Kini99/Reserve-Now' target='blank'><button className='project-github-link'>Code Base</button></a>
            <a href='https://reservenow.netlify.app/' target='blank'><button className='project-deployed-link'>Live Demo</button></a>
            </div>
          </div>
        </div>

        <div className='project-card'>
          <img src={MagnaMen} alt="image" />
          <div>
            <h1 className='project-title'>Magna Men</h1>
            <div className='project-tech-stack'>
              <p>HTML</p>
              <p>Javascript</p>
              <p>CSS</p>
            </div>
            <p className='project-description'>A Fashion e-commerce app cloned from destinationxl.com which allows users to shop plus sized clothes for men.</p>
            <div id='project-button'>
            <a href='https://github.com/Kini99/Magna-Men' target='blank'><button className='project-github-link'>Code Base</button></a>
            <a href='https://magnamen.netlify.app/' target='blank'><button className='project-deployed-link'>Live Demo</button></a>
            </div>
          </div>
        </div>

        <div className='project-card'>
          <img src={FashionPlus} alt="image" />
          <div>
            <h1 className='project-title'>Fashion Plus</h1>
            <div className='project-tech-stack'>
              <p>HTML</p>
              <p>Javascript</p>
              <p>CSS</p>
            </div>
            <p className='project-description'>A Fashion e-commerce app cloned from catherines.com which allows users to shop plus sized clothes for women.</p>
            <div id='project-button'>
            <a href='https://github.com/Kini99/FashionPlus' target='blank'><button className='project-github-link'>Code Base</button></a>
            <a href='https://fashionplus100.netlify.app/' target='blank'><button className='project-deployed-link'>Live Demo</button></a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects