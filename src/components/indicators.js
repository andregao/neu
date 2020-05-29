import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../styles/theme';

const Indicators = ({ currentImageIndex, imageCount, className }) => {
  const allIndicators = new Array(imageCount).fill(0);
  return (
    <Container className={className}>
      {allIndicators.map((item, index) => (
        <Bar key={index} isCurrent={currentImageIndex === index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Bar = styled.div`
  //width: 3vw;
  width: ${({ isCurrent }) => (isCurrent ? '8vw' : '3vw')};
  border-bottom: 10px solid
    ${({ isCurrent }) => (isCurrent ? colors.dark : colors.darkTransparent)};
  margin: 0 1vw;
  ${transitions.long};
`;

export default Indicators;
