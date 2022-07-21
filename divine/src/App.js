import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/projects";
import Contact from "./components/contact";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
