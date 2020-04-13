import React, { useEffect, useRef } from 'react';
import SecondaryText from './secondaryText';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import Button from './layouts/button';
import { getStyle, useObserver } from '../utils';
import { transitions } from '../styles/theme';

const VerticalCard = ({ data: { heading, paragraph, button }, image }) => {
  // scroll reveal
  const ref = useRef(null);
  const [entry, setTarget] = useObserver(0.1);
  useEffect(() => {
    setTarget(ref.current);
  }, []);
  return (
    <Container ref={ref} style={getStyle(entry)}>
      {image && <Image fluid={image.fluid} />}
      <StyledSecondaryText heading={heading} paragraph={paragraph} />
      {button && (
        <StyledButton variant="dark" path={button.path} text={button.text} />
      )}
    </Container>
  );
};
const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${transitions.long};
`;
const StyledSecondaryText = styled(SecondaryText)`
  padding: 0;
`;
const StyledButton = styled(Button)`
  margin: 20px 0 0;
`;
const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export default VerticalCard;
