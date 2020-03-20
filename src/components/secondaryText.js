import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import Hr from './Hr';

const SecondaryText = ({ heading, paragraph, width, minWidth, padding }) => {
  return (
    <Container width={width} minWidth={minWidth} padding={padding}>
      <Heading>{heading}</Heading>
      <Hr/>
      <Paragraph>{paragraph}</Paragraph>
    </Container>
  );
};
const Container = styled.section`
  padding: 0 ${({padding})=>padding?padding:'60px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: ${({ width }) => (width ? width : 'auto')};
  //min-width: 280px;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};;
`;
const Heading = styled.h2`
  ${fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;
const Paragraph = styled.p`
  ${fontPresets.secondaryParagraph};
  margin-top: 20px;
  line-height: 24px;
`;

export default SecondaryText;
