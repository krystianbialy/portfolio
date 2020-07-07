export const Fonts = `
/* russo-one-regular - latin-ext_latin */
@font-face {
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  src: local('Russo One'), local('RussoOne-Regular'),
       url(${require('../fonts/RussoOne-Regular/RussoOne-Regular.woff2')}) format('woff2'),
       url(${require('../fonts/RussoOne-Regular/RussoOne-Regular.woff')}) format('woff');
}

/* merienda-one-regular - latin */
@font-face {
  font-family: 'Merienda One';
  font-style: normal;
  font-weight: 400;
  src: local('Merienda One'), local('MeriendaOne-Regular'),
       url(${require('../fonts/MeriendaOne-Regular/MeriendaOne-Regular.woff2')}) format('woff2'),
       url(${require('../fonts/MeriendaOne-Regular/MeriendaOne-Regular.woff')}) format('woff');
}

/* roboto-regular - latin-ext_latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
       url(${require('../fonts/Roboto-Regular/Roboto-Regular.woff2')}) format('woff2'),
       url(${require('../fonts/Roboto-Regular/Roboto-Regular.woff')}) format('woff');
}
`;
