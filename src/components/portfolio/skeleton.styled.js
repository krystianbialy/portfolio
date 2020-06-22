import styled from 'styled-components';

export const SkeletonGrid = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 600px);
  }
`;

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
