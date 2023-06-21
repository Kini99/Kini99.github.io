import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Navbar.css";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";

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
      <h1>KM</h1>
{isOpen?<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<GiHamburgerMenu style={{width:"30px", height:"50%", }} />}
    variant='outline'
  />
  <MenuList>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px" }}>
    <Link to={"/"} className='nav-link home'>Home</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/about"} className='nav-link about'>About</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/skills"} className='nav-link skills'>Skills</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/projects"} className='nav-link projects'>Projects</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/github"} className='nav-link projects'>Github</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <Link to={"/contact"} className='nav-link contact'>Contact</Link>
    </MenuItem>
    <MenuItem style={{fontSize: "large",border: "none", backgroundColor: "white",color: "black",margin:"10px"}}>
    <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-1">Resume</a>
    </MenuItem>
  </MenuList>
</Menu>:<div id="nav-menu">
           <button className='nav-btn'><Link to={"/"} className='nav-link home'>Home</Link></button>
           <button className='nav-btn'><Link to={"/about"} className='nav-link about'>About</Link></button>
           <button className='nav-btn'><Link to={"/skills"} className='nav-link skills'>Skills</Link></button>
           <button className='nav-btn'><Link to={"/projects"} className='nav-link projects'>Projects</Link></button>
           <button className='nav-btn'><Link to={"/github"} className='nav-link projects'>Github</Link></button>
           <button className='nav-btn'><Link to={"/contact"} className='nav-link contact'>Contact</Link></button>
           <button className='nav-btn resume'> <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" className='nav-link resume' id="resume-link-1">Resume</a></button>
  </div>
}
</div>
  )
}


export default Navbar;

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// function Navbar() {
//   const [ham, setHam] = useState(false);
//   return (
//     <nav
//       id="nav-menu"
//       className="flex justify-between items-center w-full h-20px-4 text-white bg-black fixed"
//     >
//       <div>
//         <h1 className="text-5xl font-signature ml-2 mt-5">Kinjal Momaya</h1>
//       </div>
//       <ul className="hidden md:flex ">
//         <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
//           <a href="/" className="nav-link home">
//             Home
//           </a>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
//           <a href="/about" className="nav-link about">
//             About
//           </a>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
//           <a href="/skills" className="nav-link skills">
//             Skills
//           </a>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
//           <a href="/projects" className="nav-link projects">
//             Projects
//           </a>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
//           <a href="/contact" className="nav-link contact">
//             Contact
//           </a>
//         </li>
//         <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
//           <a
//             href="https://drive.google.com/file/d/1fAK3o-4b6pdSq5LpVlcKxpxHsAr4iag7/view?usp=sharing"
//             target="_blank"
//             className="nav-link resume"
//             id="resume-link-1"
//           >
//             Resume
//           </a>
//         </li>
//       </ul>
//       <div
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//         onClick={() => setHam(!ham)}
//       >
//         {ham ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//       {ham && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-800">
//           <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link home">
//             home
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link about">
//             about
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link skills">
//             skills
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link contact">
//             projects
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link contact">
//             contact
//           </li>
//           <li className="px-4 cursor-pointer capitalize py-6 text-gray-500 text-4xl nav-link resume">
//             <a href="https://drive.google.com/file/d/1fAK3o-4b6pdSq5LpVlcKxpxHsAr4iag7/view?usp=sharing">
//               resume
//             </a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

