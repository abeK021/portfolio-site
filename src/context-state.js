import React, { useState, createContext } from "react";

const UserContext = createContext();

// exports the context providor to the parent
export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [componentsToRender, setComponentsToRender] = useState("home");
  const [prevComponents, setPrevComponents] = useState("");

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  const handleComponentChange = (components) => {
    setPrevComponents(componentsToRender);
    setComponentsToRender(components);
  };

  return (
    <UserContext.Provider
      value={{
        theme,
        componentsToRender,
        changeTheme,
        handleComponentChange,
        prevComponents,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
