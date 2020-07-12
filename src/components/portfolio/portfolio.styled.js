import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 600px);
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const Project = styled.div`
  width: 90%;
  height: auto;
  background: #fff;
  margin: 25px auto 0 auto;
  padding-bottom: 20px;
  -webkit-box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
  -moz-box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
  box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
`;

export const ProjectImg = styled.picture`
  source,
  img {
    width: 100%;
    height: auto;
    border-bottom: 6px solid #d3d3d3;
  }
`;

export const ProjectTechnologies = styled.div`
  margin: 20px 12px;
`;

export const ProjectTechnology = styled.picture`
  source,
  img {
    width: auto;
    height: 35px;
    margin-right: 15px;
  }
`;

export const ProjectDescription = styled.p`
  font-family: Roboto;
  font-size: 17px;
  margin: 0 12px;
`;

export const Buttons = styled.div`
  font-family: Roboto;
  display: flex;
  width: 90%;
  margin: 0 auto 25px auto;
  -webkit-box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
  -moz-box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
  box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
`;

export const ButtonLive = styled.a`
  display: flex;
  width: 33.33%;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: #000;
  background: #fff;
  border: 2px solid #577284;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  &:focus {
    text-decoration: none;
    outline: none;
  }

  &:hover {
    background: #578ca9;
    color: #fff;
  }
`;

export const ButtonCode = styled(ButtonLive)`
  border-right: none;
  border-left: none;
`;

export const ButtonMore = styled(ButtonLive)``;
