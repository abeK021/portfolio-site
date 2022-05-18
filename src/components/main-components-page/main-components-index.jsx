import React from "react";
import Heading from "./heading";
import AboutMeButton from "./about-me-button";
import ProjectsButton from "./projects-button";
import { Container, Box } from "@mui/material";
import MySkillsButton from "./skills-button";
import Date from "./date";
import BackgroundColorHeading from "./background-color";

const LandingHomePage = () => {
  return (
    <Box>
      <BackgroundColorHeading />
      <Heading />
      <AboutMeButton />
      <ProjectsButton />
      <MySkillsButton />
      <Date />
    </Box>
  );
};

export default LandingHomePage;
