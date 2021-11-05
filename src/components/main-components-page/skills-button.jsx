import React from "react";
import { Reveal, Fade } from "react-reveal";
import "../../styling/skills-btn.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "../../styling/button-theme";
import { useContext } from "react";
import UserContext from "../../context-state";

const MySkillsButton = () => {
  const { theme, handleComponentChange } = useContext(UserContext);
  return (
    <Fade left delay={2300}>
      <Box
        onClick={() => handleComponentChange("SKILLS")}
        className={`skills-btn-container-${theme}`}
      >
        <ThemeProvider theme={buttonTheme}>
          <Button color="primary" variant="contained">
            Skills
          </Button>
        </ThemeProvider>
      </Box>
    </Fade>
  );
};

export default MySkillsButton;
