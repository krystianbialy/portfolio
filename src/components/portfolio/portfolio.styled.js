import styled from 'styled-components';

export const Container = styled.section``;

export const Project = styled.div`
  width: 90%;
  height: 300px;
  background: #fff;
  margin: 25px auto;
  -webkit-box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
  -moz-box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
  box-shadow: 0px 1px 20px 2px rgba(173, 173, 173, 1);
`;

export const ProjectImg = styled.img``;

export const ProjectName = styled.p``;

export const ProjectDescription = styled.p``;

export const Buttons = styled.div`
  display: flex;
  position: relative;
  top: 183px;
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
`;

export const ButtonCode = styled(ButtonLive)`
  border-right: none;
  border-left: none;
`;

export const ButtonMore = styled(ButtonLive)``;
