import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Navbar.css";
import Hamburger from './Hamburger';

const Navbar = () => {

  

  return (
    <div>
<Hamburger id="nav-ham"/>
    <div id="nav-menu">
           <button className='nav-btn'><Link to={"/"} className='nav-link home'>Home</Link></button>
           <button className='nav-btn'><Link to={"/about"} className='nav-link about'>About</Link></button>
           <button className='nav-btn'><Link to={"/skills"} className='nav-link skills'>Skills</Link></button>
           <button className='nav-btn'><Link to={"/projects"} className='nav-link projects'>Projects</Link></button>
           <button className='nav-btn'><Link to={"/contact"} className='nav-link contact'>Contact</Link></button>
           <button className='nav-btn'> <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-1">Resume</a></button>
  </div>
</div>
  )
}


export default Navbar;
