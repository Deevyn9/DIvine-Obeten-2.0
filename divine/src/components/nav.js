import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
let menuOpen = false;
   const menuBtn = document.querySelector(".navigator");
   const navContainer = document.querySelector(".nav-container");
   const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector('.navbar');
const kami = document.querySelector('.kami');

  function openNav() {
    
    
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
      navContainer.classList.add("appear");
      navLinks.style.display = 'grid'
      navbar.classList.add('grad');
      kami.style.webkitTextFillColor = '#d8d8d8';
      document.body.style.overflow = 'hidden';
      // navbar.style.background =
        // 'linear-gradient(45deg, #12c2e9, #f64f59)';
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
      navContainer.classList.remove("appear");
      navLinks.style.display = "none";
      navbar.classList.remove("grad");
      kami.style.webkitTextFillColor = 'transparent';
      document.body.style.overflow = 'visible';
      // navbar.style.background = '#000'
    }
  }

  function closeMenu() {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navContainer.classList.remove("appear");
    navLinks.style.display = "none";
      navbar.classList.remove("grad");
      kami.style.webkitTextFillColor = 'transparent';
      document.body.style.overflow = 'visible';
  }

  return (
    <div className="nav">
      <nav className="navbar">
        <Link to="/" onClick={closeMenu}>
          <h1>
            <span className="kami">神</span>
            <span> OBETEN</span>
          </h1>
        </Link>

        <div className="navigator" onClick={openNav}>
          <div className="navigator__burger"></div>
        </div>
        {/* Nav links */}

        <div className="nav-container">
          <ul className="nav-links">
            <Link to="/" onClick={closeMenu}>
              <li>HOME</li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li>ABOUT</li>
            </Link>
            <Link to="/projects" onClick={closeMenu}>
              <li>PROJECTS</li>
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
