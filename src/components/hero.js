import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';

const Hero = ({ heading, paragraph, buttonText, background }) => {
  const backgroundStack = [
    'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))',
    background.fluid,
  ];
  return (
    <Background fluid={backgroundStack}>
      <Heading>{heading}</Heading>
    </Background>
  );
};

const Background = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  max-height: 900px;
  height: 85vh;
  display: flex;
  padding: 10% 15%;
  align-items: center;
`;

const Heading = styled.h1`
  ${fontPresets.heroHeading};
`;

export default Hero;
