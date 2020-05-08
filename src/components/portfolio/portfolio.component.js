import React, { useState, useEffect } from 'react';
import {
  Container,
  Project,
  ProjectImg,
  ProjectName,
  ProjectDescription,
  Buttons,
  ButtonLive,
  ButtonCode,
  ButtonMore
} from './portfolio.styled';

export const PortfolioComponent = () => {
  const [projectsData, setProjectsData] = useState([]);

  const apiInitialUrl = '/src/data/projects.data.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiInitialUrl);
        const json = await response.json();
        setProjectsData(json.projects);
      } catch (error) {
        console.error('API response error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {projectsData.map((project) => {
        return (
          <Project key={project.id}>
            <ProjectImg />
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Buttons>
              <ButtonLive href={project.live_link}>Live</ButtonLive>
              <ButtonCode href={project.code_link}>Code</ButtonCode>
              <ButtonMore href={project.more_link}>More</ButtonMore>
            </Buttons>
          </Project>
        );
      })}
    </Container>
  );
};
