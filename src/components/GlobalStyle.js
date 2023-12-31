import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
export const GlobalStyle = createGlobalStyle` * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
  background-color: ${(p) => p.theme.colors.mainBgColor};
  font-family: 'Roboto', sans-serif;
  padding: 1.2rem;

  }

  p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
  
  h3 {
    margin: 0;
    padding: 0;
  }
  
  h5 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }`;
