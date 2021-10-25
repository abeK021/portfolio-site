import React from "react";
import { Reveal, Fade } from "react-reveal";
import "../../styling/about-me-button.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "../../styling/button-theme";
import { useContext } from "react";
import UserContext from "../../context-state";

const AboutMeButton = () => {
  const { theme, handleComponentChange } = useContext(UserContext);
  return (
    <Fade left delay={1800}>
      <Box
        onClick={() => handleComponentChange("about")}
        className={`abt-me-btn-container-${theme}`}
      >
        <ThemeProvider theme={buttonTheme}>
          <Button color="primary" variant="contained">
            About
          </Button>
        </ThemeProvider>
      </Box>
    </Fade>
  );
};

export default AboutMeButton;
