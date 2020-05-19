import React, { useState, useEffect } from 'react';
import { PortfolioSkeleton } from './portfolio.skeleton';
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

export const PortfolioComponent = () => {
  const [loading, setLoading] = useState(true);
  const [projectsData, setProjectsData] = useState([]);

  const apiInitialUrl = './data/projects.data.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiInitialUrl);
        const json = await response.json();
        await setProjectsData(json.projects);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('API response error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {loading && <PortfolioSkeleton />}
      {!loading &&
        projectsData.map((project) => {
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
