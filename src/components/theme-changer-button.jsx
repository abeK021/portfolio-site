import react, { useState, useEffect } from "react";
import { themeToggler } from "../utils/utils";
import DarkModeToggle from "react-dark-mode-toggle";
import "../styling/theme-mode-toggler.css";

const ThemeChangerButton = ({ theme, onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  useEffect(() => {
    onThemeChange(themeToggler(theme));
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
