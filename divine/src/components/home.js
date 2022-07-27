import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-wrapper">
      <header className="header">
        <div className="header__hero">
          <span>converting world-class ideas </span>
          <br />
          <span>
            to real life <span className="header__hero-gradient">products</span>.
          </span>
          <br />
          <span></span>
        </div>
        <Link to="/projects">
          <div className="proj-link">
            <span className="my-projects">View Projects</span>
          </div>
        </Link>
      </header>
      <footer>
        <a href="http://www.linkedin.com/in/divine-obeten">LINKEDIN</a>
        <a href="http://www.linkedin.com/in/divine-obeten">GITHUB</a>
        <a href="http://www.linkedin.com/in/divine-obeten">
          EMAIL
        </a>
        <a href="http://www.linkedin.com/in/divine-obeten">BLOG</a>
      </footer>
    </div>
  );
}

export default Home;