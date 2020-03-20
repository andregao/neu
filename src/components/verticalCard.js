import React from 'react';
import SecondaryText from './secondaryText';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const VerticalCard = ({ data: { heading, paragraph }, image }) => {
  return (
    <Container>
      <Image fluid={image.fluid} />
      <SecondaryText heading={heading} paragraph={paragraph} padding="0"/>
    </Container>
  );
};
const Container = styled.article`
  //height: 550px;
  height: auto;
  flex-basis: 33%;
  //width: 281px;
  margin: 25px 0;
  &:not(:last-child) {
    margin-right: 30px;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export default VerticalCard;
