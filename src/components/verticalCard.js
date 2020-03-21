import React from 'react';
import SecondaryText from './secondaryText';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Button from './layouts/button';

const VerticalCard = ({ data: { heading, paragraph, button }, image }) => {
  return (
    <Container>
      {image && <Image fluid={image.fluid} />}
      <SecondaryText heading={heading} paragraph={paragraph} padding="0" />
      {button && <Button variant="dark" text={button.text} margin="20px 0 0" />}
    </Container>
  );
};
const Container = styled.article`
  flex: 1;
  margin: 25px 0;
  &:not(:last-child) {
    margin-right: 30px;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export default VerticalCard;
