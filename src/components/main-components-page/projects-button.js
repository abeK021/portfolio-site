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
    <div className="project-btn-container">
      <Fade right delay={2100}>
        <Box
          onClick={() => handleComponentChange("projects")}
          className={`project-btn-container-${theme}`}
        >
          <ThemeProvider theme={buttonTheme}>
            <Button color="primary" variant="contained">
              projects
            </Button>
          </ThemeProvider>
        </Box>
      </Fade>
    </div>
  );
};

export default ProjectsButton;
