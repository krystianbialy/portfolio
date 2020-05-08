import React from 'react';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';

export const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <PortfolioComponent />
      <FooterComponent />
    </>
  );
};
