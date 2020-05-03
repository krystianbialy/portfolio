import React from 'react';
import { Footer, FooterText } from './footer.styled';

export const FooterComponent = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Footer>
      <FooterText>&copy; {year} Krystian Biały</FooterText>
    </Footer>
  );
};
