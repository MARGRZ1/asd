import { createGlobalStyle } from "styled-components";
import RobotoRegular from "src/assets/fonts/roboto.regular.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    font-weight: regular;
    src: url(${RobotoRegular}) format("truetype");
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: "Roboto";
    font-weight: regular;
    overflow-x: hidden;
  }
`;
