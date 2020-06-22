import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Grid, GridColumn } from '../../theme/grid';
import {
  Header,
  GeneralInformation,
  Author,
  ContentTitle,
  MediaWrapper,
  MediaIconGitHub,
  MediaIconLinkedin
} from './header.styled';

const HeaderComponent = () => {
  return (
    <Header>
      <Grid>
        <GridColumn>
          <GeneralInformation>
            <Author>Krystian Biały</Author>
            <ContentTitle>Portfolio</ContentTitle>
          </GeneralInformation>
          <MediaWrapper>
            <MediaIconGitHub href="https://github.com/krystianbialy">
              <FontAwesomeIcon icon={faGithubSquare} />
            </MediaIconGitHub>
            <MediaIconLinkedin href="https://linkedin.com/in/krystian-biały">
              <FontAwesomeIcon icon={faLinkedin} />
            </MediaIconLinkedin>
          </MediaWrapper>
        </GridColumn>
      </Grid>
    </Header>
  );
};

export default HeaderComponent;
