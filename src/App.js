// React stuff
import React, { useState, useEffect, useRef } from "react";
// COMPONENTS
import Heading from "./components/1-heading/heading.jsx";
import ScrollableTabs from "./components/2-nav-tabs/nav-tabs.jsx";
import Hero from "./components/3-hero/hero.jsx";
import About from "./components/4-about/about";

//NPM MODULES
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// Utils
import { useIsInViewport } from "./utils/hooks";
import { ClassSharp } from "@mui/icons-material";

const App = () => {
  const [value, setValue] = useState(0);

  const activeTab = {
    home: 0,
    about: 1,
    projects: 2,
    skills: 3,
  };

  const handleSetActive = (e) => {
    debugger;
    setValue(activeTab[e]);
  };
  return (
    <>
      <Heading />

      <ScrollableTabs onActive={handleSetActive} {...{ value }} />
      <Element id="home" name="home">
        <Hero />
      </Element>

      <Element id="about" name="about">
        <About />
      </Element>
    </>
  );
};

export default App;
