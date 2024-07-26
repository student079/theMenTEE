import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard Variable', sans-serif;
    background: linear-gradient(to bottom, #f0f4ff, #d6e4ff);
    font-weight: 500;
  }

  input, button {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyle;
