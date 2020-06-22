import React from 'react';
import { fetchPortfolio } from './api';
import {
  Container,
  ProjectWrapper,
  Project,
  ProjectImg,
  ProjectDescription,
  ProjectTechnologies,
  ProjectTechnology,
  Buttons,
  ButtonLive,
  ButtonCode,
  ButtonMore
} from './portfolio.styled';

const portfolio = fetchPortfolio();

const PortfolioComponent = () => {
  const projectsData = portfolio.data.read();

  return (
    <Container>
      {projectsData.map((project) => {
        return (
          <ProjectWrapper key={project.id}>
            <Project>
              <ProjectImg src={project.image} />
              <ProjectTechnologies>
                {Object.values(project.technologies).map(
                  (technology, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ProjectTechnology src={technology} key={index} />;
                  }
                )}
              </ProjectTechnologies>
              <ProjectDescription>{project.description}</ProjectDescription>
            </Project>
            <Buttons>
              <ButtonLive href={project.live_link}>Live</ButtonLive>
              <ButtonCode href={project.code_link}>Code</ButtonCode>
              <ButtonMore href={project.more_link}>More</ButtonMore>
            </Buttons>
          </ProjectWrapper>
        );
      })}
    </Container>
  );
};

export default PortfolioComponent;
