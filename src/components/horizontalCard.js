import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SecondaryText from './secondaryText';
import GatsbyImage from 'gatsby-image';
import { getStyle, useObserver } from '../utils';
import { transitions } from '../styles/theme';

const HorizontalCard = ({ data: { heading, paragraph }, image, reverse }) => {
  // scroll reveal
  const ref = useRef(null);
  const [entry, setTarget] = useObserver(0.1);
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  return (
    <Container reverse={reverse} ref={ref} style={getStyle(entry)}>
      <StyledSecondaryText heading={heading} paragraph={paragraph} />
      <Image fluid={image.fluid} />
    </Container>
  );
};
const Container = styled.article`
  width: 100%;
  border: 16px solid white;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  ${transitions.long};
`;

const StyledSecondaryText = styled(SecondaryText)`
  flex: 1 0 200px;
  padding: var(--content-padding-y) var(--content-padding-x);
  justify-content: center;
`;
const Image = styled(GatsbyImage)`
  flex: 2 1 400px;
`;

export default HorizontalCard;
