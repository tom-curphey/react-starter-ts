import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${fontFamily};
  }

  html, body, #root {
  height: 100%;
  }
`;
