import React from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../styles/theme';

const Indicators = ({
  currentImageIndex,
  goToIndex,
  imageCount,
  className,
}) => {
  const allIndicators = new Array(imageCount).fill(0);
  return (
    <Container className={className}>
      {allIndicators.map((item, index) => (
        <Bar
          key={index}
          isCurrent={currentImageIndex === index}
          onClick={() =>
            currentImageIndex === index ? null : goToIndex(index)
          }
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Bar = styled.div`
  width: ${({ isCurrent }) => (isCurrent ? '8vw' : '3vw')};
  min-width: ${({ isCurrent }) => (isCurrent ? '70px' : '30px')};
  border-bottom: 10px solid
    ${({ isCurrent }) =>
      isCurrent ? colors.offWhite : colors.offWhiteTransparent};
  cursor: ${({ isCurrent }) => (isCurrent ? 'auto' : 'pointer')};

  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.6);
  margin: 0 1vw;
  ${transitions.long};
`;

export default Indicators;
