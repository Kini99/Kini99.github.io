import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Navbar.css";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../Kinjal-Momaya-Resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {

  const [isOpen,setIsOpen]=useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleMediaQueryChange = (event) => {
      setIsOpen(event.matches);
    };

    handleMediaQueryChange(mediaQuery); // Set initial value
    mediaQuery.addEventListener('change', handleMediaQueryChange); // Listen for changes

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); // Cleanup
    };
  }, []);


  return (
    <div className='navbar'>
      <h1 id="nav-menu">KM</h1>
{isOpen?<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<GiHamburgerMenu style={{width:"30px", height:"50%", }} />}
    variant='outline'
  />
  <MenuList>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px" }}>
    <Link to={"/#"} className='nav-link home' smooth>Home</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/#about"} className='nav-link about' smooth>About</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/#skills1"} className='nav-link skills' smooth>Skills</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/#projects"} className='nav-link projects' smooth>Projects</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/#github"} className='nav-link github' smooth>Github</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/#contact"} className='nav-link contact' smooth>Contact</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}} onClick={() => window.open("https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link")} id="resume-button-1">
    <a href={resume} target="_blank" className='nav-link resume' id="resume-link-1" download="Kinjal-Momaya-Resume">Resume</a>
    </MenuItem>
  </MenuList>
</Menu>:<div id="nav-menu-container">
           <button className='nav-btn'><Link to={"/#"} className='nav-link home' smooth>Home</Link></button>
           <button className='nav-btn'><Link to={"/#about"} className='nav-link about' smooth>About</Link></button>
           <button className='nav-btn'><Link to={"/#skills1"} className='nav-link skills' smooth>Skills</Link></button>
           <button className='nav-btn'><Link to={"/#projects"} className='nav-link projects' smooth>Projects</Link></button>
           <button className='nav-btn'><Link to={"/#github"} className='nav-link github' smooth>Github</Link></button>
           <button className='nav-btn'><Link to={"/#contact"} className='nav-link contact' smooth>Contact</Link></button>
           <button className='nav-btn resume' onClick={() => window.open("https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link")} id="resume-button-1"> <a href={resume} target="_blank" className='nav-link resume' id="resume-link-1" download="Kinjal-Momaya-Resume.pdf">Resume</a></button>
  </div>
}
</div>
  )
}


export default Navbar;
