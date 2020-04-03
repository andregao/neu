import React from 'react';
import SecondaryText from './secondaryText';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Button from './layouts/button';

const VerticalCard = ({ data: { heading, paragraph, button }, image }) => {
  return (
    <Container>
      {image && <Image fluid={image.fluid} />}
      <StyledSecondaryText heading={heading} paragraph={paragraph} />
      {button && <Button variant="dark" path={button.path} text={button.text} margin="20px 0 0" />}
    </Container>
  );
};
const Container = styled.article`
  //&:not(:last-child) {
  //  margin-right: 100px;
  //}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const StyledSecondaryText = styled(SecondaryText)`
padding: 0;
`
const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export default VerticalCard;
