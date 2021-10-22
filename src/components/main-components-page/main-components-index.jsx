import React from "react";
import Heading from "./heading";
import AboutMeButton from "./about-me-button";
import ProjectsButton from "./projects-button";
import { Container, Box } from "@mui/material";
import MySkillsButton from "./skills-button";
import Date from "./date";

const LandingHomePage = () => {
  return (
    <Box>
      <Heading />
      <AboutMeButton />
      <ProjectsButton />
      <MySkillsButton />
      <Date />
    </Box>
  );
};

export default LandingHomePage;
