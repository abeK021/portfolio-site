import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
        font-family: "Inter", sans-serif;
    transition: all 0.50s linear;
    overflow: auto;

  }
 
`;

export const HeadingBar = styled.div`
  background-color: #8;
  background-color: #81e114;
  height: 27px;
  width: 7px;
`;
