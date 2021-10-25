import React, { useState, useEffect, useContext } from "react";
import { themeToggler } from "../../utils/utils";
import DarkModeToggle from "react-dark-mode-toggle";
import "../../styling/theme-mode-toggler.css";
import UserContext from "../../context-state";

const ThemeChangerButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const { theme, changeTheme } = useContext(UserContext);

  useEffect(() => {
    changeTheme(themeToggler(theme));
  }, [isDarkMode]);

  return (
    <div className="theme-mode-toggler-container">
      <DarkModeToggle
        className="theme-mode-toggler"
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={50}
      />
    </div>
  );
};

export default ThemeChangerButton;
