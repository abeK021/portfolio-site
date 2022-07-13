import React from "react";

import "./projects.css";

const TechUsed = ({ tech }) => {
  return (
    <div className="slider">
      <div className="slide-track">
        {tech.map((logo) => (
          <div className="slide" key={logo.id}>
            <img src={logo.url} height="30" width="30" alt="" /> {logo.title}
          </div>
        ))}
        {tech.map((logo) => (
          <div className="slide" key={logo.id}>
            <img src={logo.url} height="30" width="30" alt="" /> {logo.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
