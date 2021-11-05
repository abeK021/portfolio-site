import { Fade } from "@mui/material";
import React from "react";
import NavTabs from "../static-components/nav-bar";
import AboutMeBody from "./about-me";

const AboutPage = () => {
  return (
    <React.Fragment>
      <NavTabs />
      <AboutMeBody />
    </React.Fragment>
  );
};

export default AboutPage;
