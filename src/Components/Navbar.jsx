import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import SchoolIcon from '@material-ui/icons/School';
import "../Styles/Navbar.css";
import {AiFillHome} from "react-icons/ai";

// class Navbar extends React.Component {

//   constructor() {
//     super();
//     this.scrollto = this.scrollto.bind(this);
//     this.select = this.select.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('load', this.navbarlinksActive);
//     this.onscroll(document, this.navbarlinksActive);

//     this.on('click', '.mobile-nav-toggle', function (e) {
//       document.querySelector('body').classList.toggle('mobile-nav-active');
//       this.classList.toggle('bi-list');
//       this.classList.toggle('bi-x');
//     })

//     this.on('click', '.scrollto', function (e) {
//       if (document.querySelector(this.hash)) {
//         e.preventDefault()

//         let body = document.querySelector('body')
//         if (body.classList.contains('mobile-nav-active')) {
//           body.classList.remove('mobile-nav-active')
//           let navbarToggle = document.querySelector('.mobile-nav-toggle')
//           navbarToggle.classList.toggle('bi-list')
//           navbarToggle.classList.toggle('bi-x')
//         }
//         let elementPos = document.querySelector(this.hash).offsetTop
//         window.scrollTo({
//           top: elementPos,
//           behavior: 'smooth'
//         })
//       }
//     }, true)
//   }

//   select = (el, all = false) => {
//     el = el.trim()
//     if (all) {
//       return [...document.querySelectorAll(el)]
//     } else {
//       return document.querySelector(el)
//     }
//   }

//   on = (type, el, listener, all = false) => {
//     let selectEl = this.select(el, all)
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach(e => e.addEventListener(type, listener))
//       } else {
//         selectEl.addEventListener(type, listener)
//       }
//     }
//   }

//   onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener)
//   }

//   scrollto(el) {
//     let elementPos = document.querySelector(el).offsetTop
//     window.scrollTo({
//       top: elementPos,
//       behavior: 'smooth'
//     })
//   }


//   navbarlinksActive = () => {
//     let navbarlinks = document.querySelectorAll('#navbar .scrollto')
//     let position = window.scrollY + 200
//     navbarlinks.forEach(navbarlink => {
//       if (!navbarlink.hash) return
//       let section = document.querySelector(navbarlink.hash)
//       if (!section) return
//       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//         navbarlink.classList.add('active')
//       } else {
//         navbarlink.classList.remove('active')
//       }
//     })
//   }

//   render() {
//     return (
//       <div className='navbar'>
//         <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
//         <header id="header" className="header d-flex flex-column justify-content-center">
//           <nav id="navbar" className="navbar nav-menu navbar-expand-sm">
//             <ul>
//               <li>
//                 <a href="#home" className="nav-link scrollto active d-flex justify-content-center">
//                 <AiFillHome className="icon"/>
//                   <span className='nav-link home'>Home</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="nav-link scrollto d-flex justify-content-center">
//                   <i className="bx bx-user"></i>
//                   <span className='nav-link about'>About</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#skills" class="nav-link scrollto d-flex justify-content-center">
//                   <i className="bx bx-briefcase"></i>
//                   <span className='nav-link skills'>Skills</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" class="nav-link scrollto d-flex justify-content-center">
//                   <i classNameName="bx bx-code"></i>
//                   <span className='nav-link projects'>Projects</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" class="nav-link scrollto d-flex justify-content-center">
//                   <i className="bx bx-award"></i>
//                   <span className='nav-link contact'>Contact</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="https://drive.google.com/file/d/1Iv46uAZkxIfhftVBNBiJrc-GbB3d0F2C/view?usp=share_link" target="_blank" id="resume-link-1">
//                   <i className="bx bx-award"></i>
//                   <span className='nav-link resume'>Resume</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </header>
//       </div>
//     );
//   }
// }



const Navbar = () => {

  return (
    <div>

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