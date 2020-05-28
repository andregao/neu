import React from 'react';
import styled from 'styled-components';
import { fontFamily, fontPresets } from '../styles/theme';

const LogoTypeHeading = ({ word }) => {
  return (
    <Container>
      <Word>{word.toLowerCase()}</Word>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
`;
const Word = styled.h2`
  ${fontPresets.logoTypeTail};
  :before {
    ${fontPresets.logoTypeHead};
    font-family: ${fontFamily};
    content: 'NEU';
    margin-right: 4px;
  }
`;

export default LogoTypeHeading;
