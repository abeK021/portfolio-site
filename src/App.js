import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styling/global-styles";
import { lightTheme, darkTheme } from "./config/Themes";
import ThemeChangerButton from "./components/theme-changer-button";
import IconLinks from "./components/links";
import Heading from "./components/heading";
import "bootstrap";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (theme) => setTheme(theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeChangerButton theme={theme} onThemeChange={handleThemeChange} />
      <Heading />
      <IconLinks theme={theme} />
    </ThemeProvider>
  );
};

export default App;
