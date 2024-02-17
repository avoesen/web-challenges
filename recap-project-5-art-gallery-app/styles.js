import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    max-width: 700px;
    margin: auto;
    /* background-color: lightgreen; */
  }
`;
