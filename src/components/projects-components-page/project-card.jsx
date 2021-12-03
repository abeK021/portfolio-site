import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fade } from "react-reveal";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material/";

import "../../styling/project-cards-styling.css";

import TitleAndDescription from "./title-description-swipe";
import TechUsed from "./tech-used-swipe";

const ProjectCard = ({ fadeDelay, title, overallDescription, techUsed }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [collapse, setCollapse] = useState(false);

  const handleNext = () => {
    if (collapse) setCollapse(!collapse);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (collapse) setCollapse(!collapse);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <Fade left delay={fadeDelay}>
      <Card
        variant="outlined"
        className="card"
        sx={{
          width: 275,
          boxShadow: 10,
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {/* First swipe */}

            <TitleAndDescription
              collapse={collapse}
              onCollapse={handleCollapse}
              {...{ title }}
              {...{ overallDescription }}
            />

            {/* Second Swipe */}
            <TechUsed {...{ collapse }} onCollapse={handleCollapse} />
          </SwipeableViews>
        </CardContent>

        {activeStep > 0 ? (
          <KeyboardArrowLeft
            onClick={handleBack}
            sx={{ fontSize: 30 }}
            className="arrow-left"
          />
        ) : null}
        <KeyboardArrowRight
          onClick={handleNext}
          sx={{ fontSize: 30 }}
          className="arrow-right"
        />
      </Card>
    </Fade>
  );
};

export default ProjectCard;
