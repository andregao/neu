import React from 'react';
import styled from 'styled-components';
import { devices, fontPresets } from '../styles/theme';
import { Hr } from '../styles/common';

const SecondaryText = ({ heading, paragraph, className }) => {
  return (
    <Container className={className}>
      {heading && (
        <>
          <Heading>{heading}</Heading>
          <Hr />
        </>
      )}
      <Paragraph>{paragraph}</Paragraph>
    </Container>
  );
};
const Container = styled.section`
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
