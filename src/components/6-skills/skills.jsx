import React, { useRef } from "react";
import "./skills.css";

import skillsPercent from "../../media/percentages.svg";
import skillsWave from "../../media/skills-wave.svg";

import { useIsInViewport } from "../../utils/hooks";

const Skills = () => {
  const mainSkillsRef = useRef(null);
  const barChartRef = useRef(null);
  const isSkillsInView = useIsInViewport(mainSkillsRef);
  const isBarInView = useIsInViewport(barChartRef);

  return (
    <div className="skills-container">
      <img src={skillsWave} alt="svg wave" className="skills-wave" />
      <div className="skills-percent-container">
        <img
          src={skillsPercent}
          alt="skills-percent"
          className={
            isSkillsInView
              ? "skills-percent skillsPercentInView"
              : "skills-percent"
          }
          ref={mainSkillsRef}
        />
      </div>
      <ul className="skill-list" ref={barChartRef}>
        <li>
          <span className={`blueline ${isBarInView && "rjs"}`}></span>
          <em>REACT.JS</em>
        </li>
        <li>
          <span className={`greenline ${isBarInView && "njs"}`}></span>
          <em>NODE.JS</em>
        </li>
        <li>
          <span className={`redline ${isBarInView && "mgdb"}`}></span>
          <em>MONGODB</em>
        </li>
        <li>
          <span className={`purpleline ${isBarInView && "js"}`}></span>
          <em>JAVASCRIPT</em>
        </li>
        <li>
          <span className={`orangeline ${isBarInView && "css"}`}></span>
          <em>CSS</em>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
