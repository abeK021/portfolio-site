import React, { useState, useContext } from "react";
import { Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fade } from "react-reveal";
import SwipeableViews from "react-swipeable-views";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material/";

import "../../styling/project-cards-styling.css";

import TitleAndDescription from "./title-description-swipe";
import TechUsed from "./tech-used-swipe";
import UserContext from "../../context-state";

const ProjectCard = ({ fadeDelay, title, overallDescription, techUsed }) => {
  const darkLightTheme = useContext(UserContext);

  const materialUiTheme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [collapse, setCollapse] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (collapse) setCollapse(!collapse);
  };

  const handleBack = () => {
    if (collapse) setCollapse(!collapse);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    if (step !== activeStep && collapse === true) setCollapse(!collapse);
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
          boxShadow: 7,
          backgroundColor: darkLightTheme.theme === "dark" && "#404040",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <SwipeableViews
            axis={materialUiTheme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {/* First swipe */}

            <TitleAndDescription
              {...{ activeStep }}
              collapse={collapse}
              onCollapse={handleCollapse}
              {...{ title }}
              {...{ overallDescription }}
            />

            {/* Second Swipe */}
            <TechUsed
              {...{ title }}
              {...{ activeStep }}
              {...{ collapse }}
              onCollapse={handleCollapse}
              {...{ techUsed }}
            />
          </SwipeableViews>
        </CardContent>

        {activeStep > 0 ? (
          <KeyboardArrowLeft
            onClick={handleBack}
            sx={{
              fontSize: 30,
              color: darkLightTheme.theme === "dark" && "#FFFFFF",
            }}
            className="arrow-left"
          />
        ) : null}
        {activeStep < 1 ? (
          <KeyboardArrowRight
            onClick={handleNext}
            sx={{
              fontSize: 30,
              color: darkLightTheme.theme === "dark" && "#FFFFFF",
            }}
            className="arrow-right"
          />
        ) : null}
      </Card>
    </Fade>
  );
};

export default ProjectCard;
