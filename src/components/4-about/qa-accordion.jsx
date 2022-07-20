import React from "react";

// NPM MODULES
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Fade, Flip } from "react-reveal";

import "./about.css";

const StyledAccordion = styled((props) => (
  <Accordion elevation={0} {...props} variant="string" />
))(({ theme }) => ({
  background: "transparent",
}));

const StyledAccordionSummary = (props) => (
  <Fade left>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: "#ff7f50" }} />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography
        sx={{
          color: "#ff7f50",
          fontSize: ".8rem",
          letterSpacing: "2px",
          fontWeight: "800",
        }}
        children={props.children}
      />
    </AccordionSummary>
  </Fade>
);

const StyledAccordionDetails = (props) => (
  <AccordionDetails>
    <Typography
      sx={{
        color: "rgba(48,69,92,0.7)",
        lineHeight: "26px",
        letterSpacing: ".5px",
      }}
      {...props}
    />
  </AccordionDetails>
);

export default function QAAccordion() {
  return (
    <div className="accordion-container">
      <StyledAccordion>
        <StyledAccordionSummary>What’s your background?</StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span>{" "}
          Well initially I started in retail/restaurant management and spent
          over 10 years gaining valuable experience and skills from that. I
          transitioned into a contractual roll installing commercial LED
          technology. During that time I also focused on brand enhancement for
          small businesses. That included logo design, restaurant menu graphics,
          Product placement and photography.{" "}
          <span style={{ color: "limegreen", fontWeight: 700 }}>[ BUT ]</span>{" "}
          my passion was always in tech. So I dabbed a little in Javascript then{" "}
          <span style={{ color: "red", fontWeight: 700 }}>[ BOOM ]</span> fell
          in love with coding. So here I am engineering solutions through
          software.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary>
          What can you provide as an engineer?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span> I
          can provide backend solutions with Node.js and I can utilize JS
          libraries to create a visually pleasing frontend.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary>
          What Tech skills do you say you have?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span>{" "}
          My main skill I believe is knowing how to debug and part of debugging
          is knowing how to google 😉.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary>
          Whats your favorite food?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span>{" "}
          This one is a no brainer! It has to be Pizza because the various
          combinations are endless.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary>
          What technology or framework do you want to learn?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span>{" "}
          My main focus is to master React and also dive into React Native for
          mobile development.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary>
          What advice would you give anyone transitioning careers?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span>
          Very simple. Never give up.
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <StyledAccordionSummary>
          If someone would want to hire you for a freelance gig or job what
          would you tell them?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <span style={{ color: "darkgreen", fontWeight: 900 }}>&#8212;</span>I
          would say not only do I have the tech skills but also the people
          skills, drive, dedication and aptitude to solve your problems.
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
}
