import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  // const navStyle = {
  //   textDecoration: none,
  // }

  // const menuBtn = document.querySelector(".navigator");
  let menuOpen = false;
   const menuBtn = document.querySelector(".navigator");
   const navContainer = document.querySelector(".nav-container");
   const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector('.navbar');

  function openNav() {
    
    
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
      navContainer.classList.add("appear");
      navLinks.style.display = 'grid'
      navbar.classList.add('grad');
      // navbar.style.background =
        // 'linear-gradient(45deg, #12c2e9, #f64f59)';
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
      navContainer.classList.remove("appear");
      navLinks.style.display = "none";
      navbar.classList.remove("grad");
      // navbar.style.background = '#000'
    }
  }

  function closeMenu() {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navContainer.classList.remove("appear");
    navLinks.style.display = "none";
      navbar.classList.remove("grad");
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
