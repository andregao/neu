import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import Background from './background';

const Hero = ({ heading, paragraph, buttonText, background }) => {
  const backgroundStack = [
    'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
    background.fluid,
  ];
  return (
    <BackgroundImage fluid={backgroundStack}>
      <Heading>{heading}</Heading>
    </BackgroundImage>
  );
};

const BackgroundImage = styled(Background)`
  max-height: 900px;
  height: 85vh;
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const Heading = styled.h1`
  ${fontPresets.heroHeading};
  margin: 0 var(--body-side-paddings);
`;

export default Hero;
