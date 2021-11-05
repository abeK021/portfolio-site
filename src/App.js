// React stuff
import React, { useState, useEffect, useContext } from "react";
// theme stuff
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styling/global-styles";
import { lightTheme, darkTheme } from "./config/Themes";
// components
import ThemeChangerButton from "./components/static-components/theme-changer-button";
import IconLinks from "./components/static-components/links";
import LandingHomePage from "./components/main-components-page/main-components-index";
import AboutPage from "./components/about-components-page/about-components-index";
import ProjectsComponents from "./components/projects-components-page/projects-components-index";
import SkillsComponents from "./components/skills-components-page/skills-components-index";
// context
import UserContext, { UserProvider } from "./context-state";

const App = () => {
  const { theme, componentsToRender } = useContext(UserContext);

  const renderComponents = () => {
    switch (componentsToRender) {
      case "home":
        return <LandingHomePage />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsComponents />;
      case "skills":
        return <SkillsComponents />;
      default:
        return <LandingHomePage />;
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeChangerButton />
      {renderComponents()}
      <IconLinks theme={theme} />
    </ThemeProvider>
  );
};

export default App;
