import React from "react";
import NavTabs from "../static-components/nav-bar";
import Fade from "react-reveal";

const SkillsComponents = () => {
  return (
    <React.Fragment>
      <NavTabs />
      <Fade bottom>
        <h1>Skills Page</h1>
      </Fade>
    </React.Fragment>
  );
};

export default SkillsComponents;
