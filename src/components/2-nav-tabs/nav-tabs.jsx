import React, { useState, useRef } from "react";

// Material UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

// NPM MODULES
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// CSS
import "./nav-tabs.css";
import { useEffect } from "react";
import { PinDropSharp } from "@mui/icons-material";

const StyledTab = (props) => (
  <Link
    {...props}
    isDynamic={true}
    activeClass="active-tab"
    spy={true}
    smooth={true}
    duration={800}
    offset={
      props.to === "home"
        ? -120
        : props.to === "about"
        ? -200
        : props.to === "projects"
        ? -250
        : -250
    }
    spyThrottle={1000}
  >
    {props.label}
  </Link>
);

const ScrollableTabs = () => {
  const [value, setValue] = React.useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
  }, []);

  const handleChange = (e, newValue) => {
    debugger;
    setValue(newValue);
  };
  const scrollClass = scrolling && "scrolled";
  const scrollingClass = `nav-tab-container ${scrollClass}`;

  return (
    <Box sx={{ width: "100%" }} className={scrollingClass}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        columnGap={5}
        sx={{ bgcolor: "#2f2f2f", marginBottom: "15px" }}
      >
        <StyledTab label="Home" to="home" />

        <StyledTab label="About" to="about" />

        <StyledTab label="Projects" to="projects" />

        <StyledTab label="Skills" to="skills" />
      </Box>
      <Divider sx={{ bgcolor: "white", boxShadow: "0 3px 15px black" }} />
    </Box>
  );
};

export default ScrollableTabs;
