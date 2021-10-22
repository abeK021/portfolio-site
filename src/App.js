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
// context
import UserContext, { UserProvider } from "./context-state";

const App = () => {
  const { theme } = useContext(UserContext);

  const [componentsToRender, setComponentsToRender] = useState("home");

  const handleComponentChange = (type) => {
    debugger;
    setComponentsToRender(type);
  };

  // const renderComponents = () => {
  //   switch (componentsToRender) {
  //     case "test1":
  //       return <Test1 />;
  //     case "test2":
  //       return <Test2 />;
  //     default:
  //       return <Heading />;
  //   }
  // };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeChangerButton />
      <LandingHomePage />
      <IconLinks theme={theme} />
    </ThemeProvider>
  );
};

export default App;
