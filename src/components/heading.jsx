import React from "react";
import { Fade, Bounce } from "react-reveal";
import styled from "styled-components";
import "../styling/heading-styling.css";
import { Box } from "@mui/system";

const Heading1 = styled.h5`
  font-weight: 900;
  margin: 10px;
  color: #b85b26;
`;

const Heading2 = styled.h5`
  font-weight: 900;
  margin-left: 40px;
  color: #b85b26;
`;

const Heading3 = styled.h5`
  font-weight: 900;
  margin-left: 70px;
  color: #b85b26;
`;

const Heading = () => {
  return (
    <Box m={2}>
      <h5 className="console.log(-container ">
        <span className="console">console</span>.
        <span className="log">log</span>(
      </h5>
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
        <Heading3>I am a Full-Stack Software Developer</Heading3>
      </Bounce>
      )
    </Box>
  );
};

console.log("");

export default Heading;
