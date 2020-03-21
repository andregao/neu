import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';

const PrimaryText = ({ heading, paragraph, width, className }) => {
  return (
    <Container width={width} className={className}>
      <Heading>{heading}</Heading>
      {paragraph && <Paragraph>{paragraph}</Paragraph>}
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width || '100%')};
`;
const Heading = styled.h2`
  ${fontPresets.primaryHeading};
  margin-bottom: 30px;
`;
const Paragraph = styled.p`
  ${fontPresets.primaryParagraph};
  line-height: 32px;
`;

export default PrimaryText;
