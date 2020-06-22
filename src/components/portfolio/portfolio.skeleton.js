import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { SkeletonGrid, SkeletonOverlay } from './skeleton.styled';

export const PortfolioSkeleton = () => {
  return (
    <SkeletonGrid>
      {Array(5)
        .fill()
        .map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SkeletonOverlay key={index}>
              <Skeleton width="100%" height="100%" />
            </SkeletonOverlay>
          );
        })}
    </SkeletonGrid>
  );
};
