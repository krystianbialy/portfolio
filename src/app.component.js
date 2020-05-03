import React from 'react';
import { HeaderComponent } from './components/header/header.component';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';

export const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <InformationComponent />
      <FooterComponent />
    </>
  );
};
