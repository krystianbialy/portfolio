import React from 'react';
import ReactDom from 'react-dom';
import './main.scss';
import { Information, Media, Footer, GetDate } from './js/portfolio';

ReactDom.render(<Information />, document.querySelector('#information'));
ReactDom.render(<Media />, document.querySelector('#media'));
ReactDom.render(<Footer />, document.querySelector('#footer'));

GetDate();
