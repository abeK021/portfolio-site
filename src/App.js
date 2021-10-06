import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/global-styles";
import { lightTheme, darkTheme } from "./config/Themes";
import ThemeChangerButton from "./components/theme-changer-button";
import IconLinks from "./components/links";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (theme) => setTheme(theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ThemeChangerButton theme={theme} onThemeChange={handleThemeChange} />
        <h1>Hello World</h1>
        <IconLinks theme={theme} />
      </>
    </ThemeProvider>
  );
};

export default App;
