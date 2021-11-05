import React from "react";
import NavTabs from "../static-components/nav-bar";
import Fade from "react-reveal";

const ProjectsComponents = () => {
  return (
    <React.Fragment>
      <NavTabs />
      <Fade bottom>
        <h1>Projects page</h1>
      </Fade>
    </React.Fragment>
  );
};

export default ProjectsComponents;
