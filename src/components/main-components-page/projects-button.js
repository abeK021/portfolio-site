import React from "react";
import { Reveal, Fade } from "react-reveal";
import "../../styling/projects-btn.css";
import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "../../styling/button-theme";
import UserContext from "../../context-state";
import { useContext } from "react";

const ProjectsButton = () => {
  const { theme, handleComponentChange } = useContext(UserContext);
  return (
    <Fade right delay={2100}>
      <div className="project-btn-container">
        <Box
          onClick={() => handleComponentChange("PROJECTS")}
          className={`project-btn-container-${theme}`}
        >
          <ThemeProvider theme={buttonTheme}>
            <Button color="primary" variant="contained">
              projects
            </Button>
          </ThemeProvider>
        </Box>
      </div>
    </Fade>
  );
};

export default ProjectsButton;
