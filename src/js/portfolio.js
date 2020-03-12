import React from 'react';
import UnderConstruction from '../img/under-construction.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Information = () => {
  return (
    <div className="information">
      <img className="img" src={UnderConstruction} alt="#" />
    </div>
  );
};

export const Media = () => {
  return (
    <div className="media">
      <a className="media__icon" href="https://github.com/krystianbialy">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        className="media__icon media__icon--margin"
        href="https://linkedin.com/in/krystian-biały"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        &copy; <span id="footer__date"></span> Krystian Biały
      </p>
    </div>
  );
};

export const GetDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  document.querySelector('#footer__date').innerHTML = year;
};
