import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fontPresets, transitions } from '../styles/theme';
import { getStyle, useObserver } from '../utils';
import LogoTypeHeading from './logoTypeHeading';

const PrimaryText = ({ heading, paragraph, className }) => {
  // scroll reveal
  const ref = useRef(null);
  const [entry, setTarget] = useObserver();
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  const words = heading.split(' ');
  const logoType = words.length === 2 && words[0] === 'NEU';
  return (
    <Container className={className} ref={ref} style={getStyle(entry)}>
      {logoType ? (
        <LogoTypeHeading word={words[1]} />
      ) : (
        <Heading>
          {heading.split('\\n').map((segment, index) => (
            <span key={index}>
              {segment}
              <br />
            </span>
          ))}
        </Heading>
      )}
      {paragraph && <Paragraph>{paragraph.paragraph}</Paragraph>}
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  ${transitions.long};
`;
const Heading = styled.h2`
  ${fontPresets.primaryHeading};
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  ${fontPresets.primaryParagraph};
  line-height: 32px;
`;

export const PrimaryTextTwoColumns = styled(PrimaryText)`
  grid-column: span 2;
`;

export default PrimaryText;
