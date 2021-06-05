// global.js
import { createGlobalStyle } from 'styled-components';
import Nunito from '../fonts/Nunito-Black.ttf';
import NunitoRegular from '../fonts/Nunito-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Nunito';
  src: url(${Nunito}) format('truetype');
  font-display: auto;
}
@font-face {
  font-family: 'Nunito-Regular';
  src: url(${NunitoRegular}) format('truetype');
  font-display: auto;
}

html, body {
    margin: 0;
    padding: 0;
    background: red;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    
  }

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    width: 100%;
    text-rendering: optimizeLegibility;
    font-family: 'Nunito';
  }
`