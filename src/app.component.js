import React, { Suspense, lazy } from 'react';
import { PortfolioSkeleton } from './components/portfolio/portfolio.skeleton';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';

const PortfolioComponent = lazy(() =>
  import('./components/portfolio/portfolio.component')
);

export const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Suspense fallback={<PortfolioSkeleton />}>
        <PortfolioComponent />
      </Suspense>
      <FooterComponent />
    </>
  );
};
