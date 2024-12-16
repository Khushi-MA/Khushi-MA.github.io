import React, { useState } from "react";
import { Link } from "react-scroll"; // for smooth scrolling
import "./Navbar.css";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home" className="logo-link">
            <img src="/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <ul className="navbar-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="feature" smooth={true} duration={500}>Feature</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
        </ul>
        <button className="navbar-toggle" onClick={toggleSidebar}>
          &#9776; {/* Hamburger Icon */}
        </button>
      </nav>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li><Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="feature" smooth={true} duration={500} onClick={toggleSidebar}>Feature</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleSidebar}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={toggleSidebar}>Experience</Link></li>
          <li><Link to="education" smooth={true} duration={500} onClick={toggleSidebar}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleSidebar}>Contact Me</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
