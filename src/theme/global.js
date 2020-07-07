import { createGlobalStyle } from 'styled-components';
import { Fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
${Fonts}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
