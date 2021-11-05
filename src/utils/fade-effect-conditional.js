import React, { useContext, Fragment } from "react";
import UserContext from "../context-state";
import { Fade } from "react-reveal";

const NavBarFade = ({ children }) => {
  const { componentsToRender, prevComponents } = useContext(UserContext);

  return prevComponents === "home" ? (
    <Fade right> {children}</Fade>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default NavBarFade;
