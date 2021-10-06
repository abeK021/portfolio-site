import react, { useState, useEffect } from "react";
import { themeToggler } from "../utils/utils";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeChangerButton = ({ theme, onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  useEffect(() => {
    onThemeChange(themeToggler(theme));
  }, [isDarkMode]);

  return (
    <DarkModeToggle
      className="dark-mode-toggler"
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
    />
  );
};

export default ThemeChangerButton;
