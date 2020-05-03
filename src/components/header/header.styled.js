import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  color: #fff;
  background: linear-gradient(
    30deg,
    rgba(46, 134, 166, 1) 0%,
    rgba(0, 0, 0, 1) 71%
  );
`;

export const GeneralInformation = styled.div`
  display: flex;
  padding-top: 18px;

  @media (min-width: 960px) {
    padding-top: 16px;
  }
`;

export const Author = styled.p`
  font-family: 'Russo One';
  font-size: 16px;
  margin-left: 10px;
  padding-top: 1px;

  @media (min-width: 328px) {
    font-size: 18px;
  }
  @media (min-width: 960px) {
    font-size: 21px;
  }
`;

export const ContentTitle = styled.p`
  font-family: 'Merienda One';
  font-size: 15px;
  margin-left: 16px;

  @media (min-width: 328px) {
    font-size: 17px;
  }
  @media (min-width: 960px) {
    font-size: 19px;
  }
`;

export const MediaWrapper = styled.div`
  margin-left: auto;
  padding: 11px 15px 0 15px;

  @media (min-width: 328px) {
    padding-top: 12px;
  }
  @media (min-width: 960px) {
    padding-top: 11px;
  }
`;

export const MediaIconGitHub = styled.a`
  font-size: 28px;
  color: #fff;
  outline: none;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 328px) {
    font-size: 30px;
  }
  @media (min-width: 960px) {
    font-size: 32px;
  }
`;

export const MediaIconLinkedin = styled(MediaIconGitHub)`
  && {
    margin-left: 15px;
  }
`;
