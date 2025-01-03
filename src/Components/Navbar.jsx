import React, { useEffect } from 'react';
import { useState } from 'react';
import "../Styles/Navbar.css";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../Kinjal-Momaya-Resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [sizing]=useMediaQuery('(max-width: 1024px)')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleMediaQueryChange = (event) => {
      setIsOpen(event.matches);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleHomeClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      const offset = homeSection.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = aboutSection.offsetTop - 50;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills1");
    if (skillsSection) {
      const offset = skillsSection.offsetTop - 50;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("project-section");
    if (projectsSection) {
      const offset = projectsSection.offsetTop - 50;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleGithubClick = () => {
    const githubSection = document.getElementById("github");
    if (githubSection) {
      const offset = githubSection.offsetTop - 50;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = contactSection.offsetTop - 50;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className='nav-container'>
      <div className='navbar'>
        <h1 id="nav-menu" onClick={handleHomeClick}>KM</h1>
        {isOpen ? <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<GiHamburgerMenu style={{ width: "40px", height: "70%", border: "none" }} />}
            sx={{ marginLeft: "250px", border: "none", backgroundColor: "transparent" }}
          />
          <MenuList sx={{ zIndex: "100", backgroundColor: "#A2A6FF", paddingTop: "5px" }}>
            <MenuItem style={{ border: "none", color: "black", margin: "10px", backgroundColor: "transparent" }}>
              <button style={{ cursor: 'pointer', border: "none", backgroundColor: "transparent", fontSize: "large", fontWeight: "bold" }} onClick={handleHomeClick}>Home</button>
            </MenuItem>
            <MenuItem style={{ border: "none", color: "black", margin: "10px", backgroundColor: "transparent" }}>
              <button style={{ cursor: 'pointer', border: "none", backgroundColor: "transparent", fontSize: "large", fontWeight: "bold" }} onClick={handleAboutClick}>About</button>
            </MenuItem>
            <MenuItem style={{ border: "none", color: "black", margin: "10px", backgroundColor: "transparent" }}>
              <button style={{ cursor: 'pointer', border: "none", backgroundColor: "transparent", fontSize: "large", fontWeight: "bold" }} onClick={handleSkillsClick}>Skills</button>
            </MenuItem>
            <MenuItem style={{ border: "none", color: "black", margin: "10px", backgroundColor: "transparent" }}>
              <button style={{ cursor: 'pointer', border: "none", backgroundColor: "transparent", fontSize: "large", fontWeight: "bold" }} onClick={handleProjectsClick}>Projects</button>
            </MenuItem>
            <MenuItem style={{ border: "none", color: "black", margin: "10px", backgroundColor: "transparent" }}>
              <button style={{ cursor: 'pointer', border: "none", backgroundColor: "transparent", fontSize: "large", fontWeight: "bold" }} onClick={handleGithubClick}>Github</button>
            </MenuItem>
            <MenuItem style={{ border: "none", color: "black", margin: "10px", backgroundColor: "transparent" }}>
              <button style={{ cursor: 'pointer', border: "none", backgroundColor: "transparent", fontSize: "large", fontWeight: "bold" }} onClick={handleContactClick}>Contact</button>
            </MenuItem>
            <MenuItem style={{ border: "none", color: "black", marginLeft: "15px", paddingBottom: "10px", backgroundColor: "transparent" }} onClick={() => window.open("https://drive.google.com/file/d/1It3gBsrcPZeR_GeumkNLrBtxWLw6pU0p/view?usp=drive_link")} id="resume-button-1" >
              <a href={resume} target="_blank" rel='noreferrer' className='nav-link resume' id="resume-link-1" download="Kinjal-Momaya-Resume" style={{ textDecoration: "none", color: "black", fontSize: "large", fontWeight: "bold" }}>Resume</a>
            </MenuItem>
          </MenuList>
        </Menu> : null}
        <div id="nav-menu-container" style={{ display: sizing ? 'none' : 'flex' }}>
          <button className='nav-btn' style={{ cursor: 'pointer', border: "none" }} onClick={handleHomeClick}>Home</button>
          <button className='nav-btn' style={{ cursor: 'pointer', border: "none" }} onClick={handleAboutClick}>About</button>
          <button className='nav-btn' style={{ cursor: 'pointer', border: "none" }} onClick={handleSkillsClick}>Skills</button>
          <button className='nav-btn' style={{ cursor: 'pointer', border: "none" }} onClick={handleProjectsClick}>Projects</button>
          <button className='nav-btn' style={{ cursor: 'pointer', border: "none" }} onClick={handleGithubClick}>Github</button>
          <button className='nav-btn' style={{ cursor: 'pointer', border: "none" }} onClick={handleContactClick}>Contact</button>
          <button className='nav-btn resume' onClick={() => window.open("https://drive.google.com/file/d/1It3gBsrcPZeR_GeumkNLrBtxWLw6pU0p/view?usp=drive_link")} id="resume-button-1" > <a href={resume} target="_blank" className='nav-link resume' id="resume-link-1" download="Kinjal-Momaya-Resume.pdf" style={{ textDecoration: "none", color: "white" }}>Resume</a></button>
        </div>
      </div>
    </div>
  )
}


export default Navbar;
