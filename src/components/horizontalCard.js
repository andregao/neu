import React from 'react';
import styled from 'styled-components';
import SecondaryText from './secondaryText';
import GatsbyImage from 'gatsby-image';
import { devices } from '../styles/theme';

const HorizontalCard = ({ data: { heading, paragraph }, image, reverse }) => {
  return (
    <Container reverse={reverse}>
      <StyledSecondaryText heading={heading} paragraph={paragraph} />
      <Image fluid={image.fluid} />
    </Container>
  );
};
const Container = styled.article`
  width: 100%;
  //height: 400px;
  border: 16px solid white;
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
`;

const StyledSecondaryText = styled(SecondaryText)`
  flex: 1 0 200px;
  padding: var(--content-padding-y) var(--content-padding-x);
  justify-content: center;
`;
const Image = styled(GatsbyImage)`
  flex: 2 1 400px;
`;

export default HorizontalCard;
