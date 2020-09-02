import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
 
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
     
    font-family: 'Roboto', sans-serif;

  }

`;
