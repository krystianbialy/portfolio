import RussoOneRegularWoff2 from '../fonts/RussoOne-Regular/RussoOne-Regular.woff2';
import RussoOneRegularWoff from '../fonts/RussoOne-Regular/RussoOne-Regular.woff';

import MeriendaOneRegularWoff2 from '../fonts/MeriendaOne-Regular/MeriendaOne-Regular.woff2';
import MeriendaOneRegularWoff from '../fonts/MeriendaOne-Regular/MeriendaOne-Regular.woff';

import RobotoRegularWoff2 from '../fonts/Roboto-Regular/Roboto-Regular.woff2';
import RobotoRegularWoff from '../fonts/Roboto-Regular/Roboto-Regular.woff';

export const Fonts = `
  /* russo-one-regular - latin-ext_latin */
  @font-face {
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    src: local('Russo One'), local('RussoOne-Regular'),
      url(${RussoOneRegularWoff2}) format('woff2'), 
      url(${RussoOneRegularWoff}) format('woff');
  }

  /* merienda-one-regular - latin */
  @font-face {
    font-family: 'Merienda One';
    font-style: normal;
    font-weight: 400;
    src: local('Merienda One'), local('MeriendaOne-Regular'),
      url(${MeriendaOneRegularWoff2}) format('woff2'),
      url(${MeriendaOneRegularWoff}) format('woff');
  }

  /* roboto-regular - latin-ext_latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
      url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
  }
`;
