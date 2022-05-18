import React from "react";
import stepsSvg from "../../externals/svgs/layered-steps.svg";

import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 0;
  background-color: #ff5500;
  width: 100vw;
  height: 120px;
  z-index: -1;
`;

const BackgroundColorHeading = () => {
  return <Div />;
};

export default BackgroundColorHeading;
