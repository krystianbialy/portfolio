import styled from 'styled-components';

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 50px;
  color: #fff;
  background: linear-gradient(
    220deg,
    rgba(46, 134, 166, 1) 0%,
    rgba(0, 0, 0, 1) 71%
  );
`;

export const FooterText = styled.p`
  font-size: 15px;
  margin-top: 15px;

  @media (min-width: 960px) {
    font-size: 16px;
  }
`;
