import React from "react";
import ProjectCard from "./project-card";
import { Grid, Box } from "@mui/material";
import "../../styling/project-cards-styling.css";
import projectsText from "../../text-files/projects";

const Projects = () => {
  const { portfolioSite, closr, halalFinder } = projectsText;
  return (
    <Grid
      style={{ marginTop: "30px" }}
      container
      justifyContent="center"
      spacing={3}
      columnSpacing={3}
    >
      <Grid
        style={{ position: "relative", margin: "20px" }}
        item
        className="testing"
      >
        <Box className="project-1-box"></Box>

        <ProjectCard {...portfolioSite} fadeDelay={200} />
      </Grid>

      <Grid style={{ position: "relative", margin: "20px" }} item>
        <Box className="project-2-box"></Box>

        <ProjectCard {...closr} fadeDelay={500} />
      </Grid>

      <Grid style={{ position: "relative", margin: "20px" }} item>
        <Box className="project-3-box"></Box>
        <ProjectCard {...halalFinder} fadeDelay={500} />
      </Grid>

      <Grid style={{ position: "relative", margin: "20px" }} item>
        <Box className="project-1-box"></Box>

        <ProjectCard {...portfolioSite} fadeDelay={200} />
      </Grid>

      <Grid style={{ position: "relative", margin: "20px" }} item>
        <Box className="project-2-box"></Box>

        <ProjectCard {...closr} fadeDelay={500} />
      </Grid>

      <Grid style={{ position: "relative", margin: "20px" }} item>
        <Box className="project-3-box"></Box>
        <ProjectCard {...halalFinder} fadeDelay={500} />
      </Grid>
    </Grid>
  );
};

export default Projects;
