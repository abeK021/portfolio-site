import React, { useRef, useState, useEffect } from "react";

// npm modules
import SwipeableViews from "react-swipeable-views";
import { Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Media
import codeArrows from "../../media/code-arrows.svg";
import aboutWave from "../../media/about-wave.svg";

// utils hooks
import { useIsInViewport } from "../../utils/hooks";

// components
import ProjectCard from "./project-card";

// css
import "./projects.css";

// projects text
import projects from "../../text-files/projects.js";

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [redirectSite, setRedirectSite] = useState("");

  const ref = useRef(null);
  const isInView = useIsInViewport(ref);

  const [dimensions, setDimensions] = useState(window.innerWidth);

  const handleSiteOpen = (siteUrl) => {
    setRedirectSite(siteUrl);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    window.open(redirectSite, "_blank").focus();
  };

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const CardLayout =
    dimensions > 768 ? (
      <Grid
        p={4}
        container
        justifyContent="center"
        spacing={2}
        columnSpacing={2}
      >
        {Object.entries(projects).map(([k, v], i) => {
          return (
            <Grid key={k} item xs={12} sm={6} md={4}>
              <ProjectCard {...v} onClickSiteOpen={handleSiteOpen} />
            </Grid>
          );
        })}
      </Grid>
    ) : (
      <SwipeableViews
        style={{ padding: "0 50px" }}
        className="cards-container"
        enableMouseEvents
      >
        {Object.entries(projects).map(([k, v], i) => {
          return (
            <ProjectCard
              {...v}
              key={v.title}
              onClickSiteOpen={handleSiteOpen}
            />
          );
        })}
      </SwipeableViews>
    );

  return (
    <div className="projects-container">
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Site will load in 10 seconds. Heroku free tier sleeps the server on
          inactivity.
          <div className="toast"></div>
        </Alert>
      </Snackbar>

      <img src={aboutWave} alt="svg wave" className="svg-wave" />

      <div className="code-arrow-container">
        <img
          src={codeArrows}
          alt="code arrows"
          className={isInView ? "code-arrows transitioninview" : "code-arrows"}
          ref={ref}
        />
      </div>
      {CardLayout}
    </div>
  );
};

export default Projects;
