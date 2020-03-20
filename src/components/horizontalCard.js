import React from 'react';
import styled from 'styled-components';
import SecondaryText from './secondaryText';
import GatsbyImage from 'gatsby-image';

const HorizontalCard = ({ data: { heading, paragraph }, image, reverse }) => {
  return (
    <Container reverse={reverse}>
      <SecondaryText heading={heading} paragraph={paragraph} width="33%" minWidth="280px" />
      <Image fluid={image.fluid}/>
    </Container>
  );
};
const Container = styled.article`
  width: 100%;
  height: 400px;
  border: 16px solid white;
  margin: 25px 0;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
`;
const Image = styled(GatsbyImage)`
  flex-basis: 66%;
`;

export default HorizontalCard;
