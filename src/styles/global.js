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
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: 'Nunito';
  }
`