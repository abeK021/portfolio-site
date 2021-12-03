import React from "react";
import NavTabs from "../static-components/nav-bar";
import Fade from "react-reveal";
import Projects from "./projects";

const ProjectsComponents = () => {
  return (
    <React.Fragment>
      <NavTabs />
      <Projects />
    </React.Fragment>
  );
};

export default ProjectsComponents;
