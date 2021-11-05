import { navBarTabs } from "../styling/styled-components";

export const themeToggler = (theme) => (theme === "light" ? "dark" : "light");

export const navBarTabsColor = (theme) =>
  theme === "light"
    ? { color: "black", fontSize: "12px" }
    : { color: "white", fontSize: "12px" };
