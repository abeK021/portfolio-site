// React
import React, { useRef } from "react";

// css
import "./about.css";

// media
import headshot from "../../media/IMG_2863.JPG";

// utils
import { useIsInViewport } from "../../utils/hooks";

// components
import QAAccordion from "./qa-accordion";

const About = () => {
  const ref = useRef(null);

  const isInView = useIsInViewport(ref);

  return (
    <>
      <div className="about-container" id="about">
        <div className="img-container" ref={ref}>
          <img
            className={isInView ? "headshot headshot-transition" : "headshot"}
            src={headshot}
            alt=""
          />
        </div>
        <QAAccordion />
      </div>
    </>
  );
};

export default About;
