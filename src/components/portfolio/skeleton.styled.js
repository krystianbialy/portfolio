import styled from 'styled-components';

export const SkeletonOverlay = styled.div`
  width: 90%;
  height: 371px;
  margin: 25px auto;

  @media (min-width: 465px) and (max-width: 699px) {
    height: 406px;
  }

  @media (min-width: 950px) and (max-width: 1199px) {
    height: 426px;
  }

  @media (min-width: 1200px) {
    height: 471px;
  }
`;
