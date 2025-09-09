import React, { useEffect, useState } from 'react';
import "../Styles/Navbar.css";
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import resume from "../Kinjal-Momaya-Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1f-1o5e_4QVXGYl1XvfpCYNzQLMegZJed/view", "_blank");
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills1', label: 'Skills' },
    { id: 'project-section', label: 'Projects' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">KM</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          {/* <button className="nav-resume-btn" onClick={handleResumeClick}>
            <FaDownload />
            Resume
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          {/* <button className="mobile-resume-btn" onClick={handleResumeClick}>
            <FaDownload />
            Download Resume
          </button> */}
        </div>
      </div>
    </nav>
  )
}


export default Navbar;
