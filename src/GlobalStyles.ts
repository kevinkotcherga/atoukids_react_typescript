import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
`;

export default GlobalStyles;
