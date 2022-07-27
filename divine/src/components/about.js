import React from "react";
import "../App.css";
import HTML from "../assets/icons8-html-5.svg";
import CSS from "../assets/icons8-css3.svg";
import BTS from "../assets/icons8-bootstrap.svg";
import SASS from '../assets/icons8-sass.svg';
import JS from '../assets/icons8-javascript.svg';
import TS from '../assets/icons8-typescript.svg';
import RE from '../assets/icons8-react.svg';
import TW from '../assets/icons8-tailwindcss.svg'

function About() {
  return (
    <div className="about">
      <div className="about__me">
        <h3>Who am i?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor natus
          iusto optio quae adipisci culpa, dolorem dolores. Perferendis dolores,
          cupiditate nulla nostrum amet odit consequuntur, ab at pariatur sed
          accusantium.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          provident quia quod minima esse quas nobis rem molestiae accusamus
          architecto? Porro itaque, quia quisquam sapiente dolore qui quibusdam
          ipsam adipisci.
        </p>
      </div>
      <div className="about__stack">
        <h3>my stack</h3>
        <div className="skills">
          <span className="skill">
            <img src={HTML} alt="" srcset="" />
            html
          </span>
          <span className="skill">
            <img src={CSS} alt="" srcset="" />
            css
          </span>
          <span className="skill">
            <img src={SASS} alt="" srcset="" />
            sass
          </span>
          <span className="skill">
            <img src={RE} alt="" srcset="" />
            react
          </span>
          <span className="skill">
            <img src={TW} alt="" srcset="" />
            tailwind
          </span>
          <span className="skill">
            <img src={BTS} alt="" srcset="" />
            bootstrap
          </span>
          <span className="skill">
            <img src={JS} alt="" srcset="" />
            javascript
          </span>
          <span className="skill">
            <img src={TS} alt="" srcset="" />
            typescript
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
