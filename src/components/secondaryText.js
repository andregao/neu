import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import { Hr } from '../styles/common';

const SecondaryText = ({ heading, paragraph, className, theme, hrVariant }) => {
  return (
    <Container className={className}>
      {heading && (
        <>
          <Heading theme={theme}>{heading}</Heading>
          <Hr variant={hrVariant} />
        </>
      )}
      <Paragraph theme={theme}>{paragraph}</Paragraph>
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
  ${({ theme }) =>
    theme === 'dark'
      ? fontPresets.secondaryHeadingWhite
      : fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;
const Paragraph = styled.p`
  ${({ theme }) =>
    theme === 'dark'
      ? fontPresets.sesecondaryHeadingWhite
      : fontPresets.secondaryParagraph};
  margin-top: 20px;
  line-height: 24px;
`;

export default SecondaryText;
