import React, { useContext } from "react";
import { Fade, Bounce, Reveal } from "react-reveal";
import { Heading1, Heading2, Heading3 } from "../../styling/styled-components";

import "../../styling/heading-styling.css";
import { Box } from "@mui/system";
import UserContext from "../../context-state";

const Heading = () => {
  const { theme } = useContext(UserContext);

  return (
    <Reveal>
      <Box
        sx={{
          marginTop: "10px",
          p: 2,
          width: "100vw",
          textAlign: "center",
        }}
        className={
          theme === "dark"
            ? "heading-container-dark"
            : "heading-container-light"
        }
      >
        <p className="consolelog-container ">
          <span className="console">console</span>.
          <span className="log">log</span>(
        </p>
        <Fade left>
          <Heading1>
            {" "}
            "Hello," <span className="comma">,</span>
          </Heading1>
        </Fade>
        <Fade right delay={1000}>
          <Heading2>
            "My name is Abrahim"<span className="comma">,</span>
          </Heading2>
        </Fade>
        <Bounce bottom delay={1500}>
          <Heading3>"I am a Full-Stack Software Developer"</Heading3>
        </Bounce>
        );
      </Box>
    </Reveal>
  );
};

export default Heading;
