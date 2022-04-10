import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: auto;
    font-family: 'Circular Std Black';
    font-style: normal;
    src: url('/fonts/CircularStd-Black.otf') format('truetype');
  }

  @font-face {
    font-display: auto;
    font-family: 'Circular Std Medium';
    font-style: normal;
    src: url('/fonts/CircularStd-Medium.otf') format('truetype');
  }

  @font-face {
    font-display: auto;
    font-family: 'Circular Std Book';
    font-style: normal;
    src: url('/fonts/CircularStd-Book.otf') format('truetype');
  }

  @font-face {
    font-display: auto;
    font-family: 'Circular Std Light';
    font-style: normal;
    src: url('/fonts/CircularStd-Light.otf') format('truetype');
  }

  * {
    box-sizing: border-box;
    font-family: 'Circular Std Black', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
