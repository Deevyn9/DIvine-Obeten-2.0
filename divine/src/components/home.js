import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="hero-wrapper">
      <header className="header">
        <div className="header__hero">
          <span>connecting the </span>
          <br />
          <span className="header__hero-gradient">users</span>
          <br />
          <span> to products.</span>
        </div>
      </header>
    </div>
  );
}

export default Home;
