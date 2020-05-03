import React from 'react';
import ReactDom from 'react-dom';
import './theme/fonts.css';
import { GlobalStyle } from './theme/global';
import { AppComponent } from './app.component';

const rootElement = document.querySelector('#root');

ReactDom.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppComponent />
  </React.StrictMode>,
  rootElement
);
