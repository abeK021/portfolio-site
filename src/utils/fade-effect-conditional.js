import React, { useContext, Fragment } from "react";
import UserContext from "../context-state";
import { Fade } from "react-reveal";

const NavBarFade = ({ children }) => {
  const { componentsToRender, prevComponents } = useContext(UserContext);

  return prevComponents === "HOME" || prevComponents === "" ? (
    <Fade right> {children}</Fade>
  ) : (
    <div>{children}</div>
  );
};

export default NavBarFade;
