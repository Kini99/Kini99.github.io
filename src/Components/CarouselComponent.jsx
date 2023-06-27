import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/Projects.css";
import ReserveNow from "../Images/ReserveNow.jpg";
import MagnaMen from "../Images/MagnaMen.jpg";
import FashionPlus from "../Images/FashionPlus.jpg";
import HomeSweeter from "../Images/HomeSweeter.png";
import PrepAI from "../Images/PrepAI.png";

const CarouselComponent= () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
  <Carousel autoPlay={!isHovered} infiniteLoop showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false}>
  <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="project-card">
      <div className="img-container">
        <img src={PrepAI} alt="image" />
      </div>
      <div className="detail-container">
        <h1 className="project-title">Prep AI</h1>
        <div className="project-tech-stack">
          <p>React</p>
          <p>Javascript</p>
          <p>Tailwind CSS</p>
          <p>Chakra UI</p>
        </div>
        <div className="project-tech-stack">
          <p>Node.js</p>
          <p>Express</p>
          <p>MongoDB</p>
        </div>
        <p className="project-description">
          An AI-powered self-interview preparation platform designed to empower job seekers and interviewees in mastering their interview skills.
        </p>
        <div id="project-button">
          <a href="https://github.com/Kini99/logicore" target="_blank" rel="noopener noreferrer">
            <button className="project-github-link">Code Base</button>
          </a>
          <a href="https://prepai.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="project-deployed-link">Live Site</button>
          </a>
          <a href="https://drive.google.com/file/d/1fFivn6ysTEZkAU7BaN-PIy7SGA1hLe4W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div className='project-card'>
          <div className='img-container'>
          <img src={HomeSweeter} alt="image" />
          </div>
          <div className='detail-container'>
            <h1 className='project-title'>Home Sweeter</h1>
            <div className='project-tech-stack'>
            <p>React</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>Chakra UI</p>
            </div>
            <div className='project-tech-stack'>
              <p>Node.js</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
            <p className='project-description'>An e-commerce platform which acts as a one stop solution for users to buy, sell or rent properties.</p>
            <div id='project-button'>
            <a href='https://github.com/Kini99/Home-Sweeter' target='blank'><button className='project-github-link'>Code Base</button></a>
            <a href='https://homesweeter.netlify.app/' target='blank'><button className='project-deployed-link'>Live Site</button></a>
            <a href="https://drive.google.com/file/d/1IjNg0cMdJv1iXW6MpFvxnnnzuZgReAOl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
            </div>
          </div>
        </div>
        </div>
        <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='project-card'>
        <div className='img-container'>
          <img src={ReserveNow} alt="image" />
          </div>
          <div className='detail-container'>
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
            <a href='https://reservenow.netlify.app/' target='blank'><button className='project-deployed-link'>Live Site</button></a>
            <a href="https://drive.google.com/file/d/1rboWC1lAAKeX35PZrd3EKi-uUlxHkKbK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
            </div>
          </div>
        </div>
        </div>
        <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='project-card'>
        <div className='img-container'>
          <img src={MagnaMen} alt="image" />
          </div>
          <div className='detail-container'>
            <h1 className='project-title'>Magna Men</h1>
            <div className='project-tech-stack'>
              <p>HTML</p>
              <p>Javascript</p>
              <p>CSS</p>
            </div>
            <p className='project-description'>A Fashion e-commerce app cloned from destinationxl.com which allows users to shop plus sized clothes for men.</p>
            <div id='project-button'>
            <a href='https://github.com/Kini99/Magna-Men' target='blank'><button className='project-github-link'>Code Base</button></a>
            <a href='https://magnamen.netlify.app/' target='blank'><button className='project-deployed-link'>Live Site</button></a>
            <a href="https://drive.google.com/file/d/1f-5zHs3z_biRAwc8NrBq8EgFwTzq3b5R/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
            </div>
          </div>
        </div>
        </div>
        <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='project-card'>
        <div className='img-container'>
          <img src={FashionPlus} alt="image" />
          </div>
          <div className='detail-container'>
            <h1 className='project-title'>Fashion Plus</h1>
            <div className='project-tech-stack'>
              <p>HTML</p>
              <p>Javascript</p>
              <p>CSS</p>
            </div>
            <p className='project-description'>A Fashion e-commerce app cloned from catherines.com which allows users to shop plus sized clothes for women.</p>
            <div id='project-button'>
            <a href='https://github.com/Kini99/FashionPlus' target='blank'><button className='project-github-link'>Code Base</button></a>
            <a href='https://fashionplus100.netlify.app/' target='blank'><button className='project-deployed-link'>Live Site</button></a>
            <a href="https://drive.google.com/file/d/12Uwt3WiMv2o-paPSQjVxbwGoUkD04ChM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
            </div>
          </div>
        </div>
        </div>
</Carousel>
);
}

export default CarouselComponent
