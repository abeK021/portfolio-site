import React, { useContext } from "react";
import ProjectCard from "./project-card";
import { Grid, Box } from "@mui/material";
import "../../styling/project-cards-styling.css";
import projectsText from "../../text-files/projects";
import UserContext from "../../context-state";

const Projects = () => {
  let incrementer = 0;

  const { theme } = useContext(UserContext);

  return (
    <Grid
      style={{ marginTop: "30px" }}
      container
      justifyContent="center"
      spacing={3}
      columnSpacing={3}
    >
      {Object.entries(projectsText).map(([k, v], i) => {
        incrementer += 200;
        return (
          <Grid key={k} style={{ position: "relative", margin: "20px" }} item>
            <Box className={`project-box-${theme}`}></Box>
            <ProjectCard {...v} fadeDelay={incrementer} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Projects;
