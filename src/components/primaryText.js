import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';

const PrimaryText = ({ heading, paragraph, flex, className }) => {
  return (
    <Container flex={flex} className={className}>
      <Heading>{heading}</Heading>
      {paragraph && <Paragraph>{paragraph}</Paragraph>}
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  ${({ flex }) => 'flex: ' + flex || ''};
  margin-bottom: 30px;

`;
const Heading = styled.h2`
  ${fontPresets.primaryHeading};
  margin-bottom: 30px;
`;
const Paragraph = styled.p`
  ${fontPresets.primaryParagraph};
  line-height: 32px;
`;

export const PrimaryTextRightMargin = styled(PrimaryText)`
    margin-right: var(--content-margin);
`

export default PrimaryText;
