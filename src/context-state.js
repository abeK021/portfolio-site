import React, { useState, createContext } from "react";

const UserContext = createContext();

// exports the context providor to the parent
export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [componentsToRender, setComponentsToRender] = useState("main");

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  const handleComponentChange = (components) => {
    debugger;
    setComponentsToRender(components);
  };

  return (
    <UserContext.Provider
      value={{
        theme,
        componentsToRender,
        changeTheme,
        handleComponentChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
