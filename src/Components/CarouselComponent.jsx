import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/Projects.css";
import ReserveNow from "../Images/ReserveNow.jpg";
import MagnaMen from "../Images/MagnaMen.jpg";
import FashionPlus from "../Images/FashionPlus.jpg";
import HomeSweeter from "../Images/HomeSweeter.png";
import Workflow from "../Images/Workflow.png";
import LmsSupport from "../Images/LmsSupport.png";
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
  // <Carousel autoPlay={!isHovered} infiniteLoop showArrows={false} showStatus={false} showThumbs={false} stopOnHover={false}>
    <>
  {/* LMS Support System Project */}
  <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="project-card">
      <div className="img-container">
        <img src={LmsSupport} alt="project" />
      </div>
      <div className="detail-container">
        <h1 className="project-title">Intelligent LMS Support System</h1>
        <div className="project-tech-stack">
          <p>LangGraph</p>
          <p>LangChain</p>
          <p>Fast API</p>
          <p>Next.js</p>
        </div>
        <div className="project-tech-stack">
          <p>TypeScript</p>
          <p>Redis</p>
          <p>MongoDB</p>
          <p>Pinecone</p>
        </div>
        <p className="project-description">
          AI-powered LMS support system that automates 70-80% of student queries, reducing manual workload by 3-4x, using multi-agent workflows, LLM integration, and RAG with Pinecone database.
        </p>
        <div id="project-button">
          <a href="https://github.com/Kini99/AI_Powered_Support_System" target="_blank" rel="noopener noreferrer">
            <button className="project-github-link">Code Base</button>
          </a>
          <a href="https://drive.google.com/file/d/1RFn-I9orw1RU48T0IxHp9oxT1Bc5xLUZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Social Commerce Automation Project */}
  <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="project-card">
      <div className="img-container">
        <img src={Workflow} alt="project" />
      </div>
      <div className="detail-container">
        <h1 className="project-title">Smart Conversational Social Commerce Automation</h1>
        <div className="project-tech-stack">
          <p>n8n</p>
          <p>Twilio WhatsApp API</p>
          <p>Pinecone</p>
          <p>MongoDB</p>
        </div>
        <p className="project-description">
          AI-driven conversational commerce framework on WhatsApp that automates ~80% of repetitive tasks, reducing average response time by ~90% and boosts lead conversions through faster enquiry handling.
        </p>
        <div id="project-button">
          <a href="https://github.com/Kini99/Social-Commerce-Automation" target="_blank" rel="noopener noreferrer">
            <button className="project-github-link">Code Base</button>
          </a>
          <a href="https://drive.google.com/file/d/1cQfFp5Wcqv5E1xum9musI9fO1kIYThhu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Prep AI Project */}
  <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="project-card">
      <div className="img-container">
        <img src={PrepAI} alt="project" />
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
          <a href="https://drive.google.com/file/d/1fFivn6ysTEZkAU7BaN-PIy7SGA1hLe4W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Home Sweeter Project */}
  <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className='project-card'>
      <div className='img-container'>
        <img src={HomeSweeter} alt="project" />
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
        <p className='project-description'>A real-estate e-commerce platform which acts as a one stop solution for users to buy, sell or rent properties.</p>
        <div id='project-button'>
          <a href='https://github.com/Kini99/Home-Sweeter' target='blank'><button className='project-github-link'>Code Base</button></a>
          <a href="https://drive.google.com/file/d/1IjNg0cMdJv1iXW6MpFvxnnnzuZgReAOl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Reserve Now Project */}
  {/* <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className='project-card'>
      <div className='img-container'>
        <img src={ReserveNow} alt="project" />
      </div>
      <div className='detail-container'>
        <h1 className='project-title'>Reserve Now</h1>
        <div className='project-tech-stack'>
          <p>React</p>
          <p>Javascript</p>
          <p>CSS</p>
          <p>Chakra UI</p>
        </div>
        <p className='project-description'>A travel e-commerce website cloned from booking.com which allows users to book flight tickets seamlessly.</p>
        <div id='project-button'>
          <a href='https://github.com/Kini99/Reserve-Now' target='blank'><button className='project-github-link'>Code Base</button></a>
          <a href="https://drive.google.com/file/d/1rboWC1lAAKeX35PZrd3EKi-uUlxHkKbK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Magna Men Project */}
  {/* <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className='project-card'>
      <div className='img-container'>
        <img src={MagnaMen} alt="project" />
      </div>
      <div className='detail-container'>
        <h1 className='project-title'>Magna Men</h1>
        <div className='project-tech-stack'>
          <p>HTML</p>
          <p>Javascript</p>
          <p>CSS</p>
        </div>
        <p className='project-description'>A fashion e-commerce website cloned from destinationxl.com which allows users to shop plus sized clothes for men.</p>
        <div id='project-button'>
          <a href='https://github.com/Kini99/Magna-Men' target='blank'><button className='project-github-link'>Code Base</button></a>
          <a href="https://drive.google.com/file/d/1f-5zHs3z_biRAwc8NrBq8EgFwTzq3b5R/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Fashion Plus Project */}
  {/* <div id="projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className='project-card'>
      <div className='img-container'>
        <img src={FashionPlus} alt="project" />
      </div>
      <div className='detail-container'>
        <h1 className='project-title'>Fashion Plus</h1>
        <div className='project-tech-stack'>
          <p>HTML</p>
          <p>Javascript</p>
          <p>CSS</p>
        </div>
        <p className='project-description'>A fashion e-commerce website cloned from catherines.com which allows users to shop plus sized clothes for women.</p>
        <div id='project-button'>
          <a href='https://github.com/Kini99/FashionPlus' target='blank'><button className='project-github-link'>Code Base</button></a>
          <a href="https://drive.google.com/file/d/12Uwt3WiMv2o-paPSQjVxbwGoUkD04ChM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button>Project Demo</button>
          </a>
        </div>
      </div>
    </div>
  </div> */}
        </>
//</Carousel> 
);
}

export default CarouselComponent
