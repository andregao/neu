import React from 'react';
import HorizontalCard from './horizontalCard';
import VerticalCard from './verticalCard';
import styled from 'styled-components';

const Cards = ({ data: { data, images }, variant }) => {
  console.log(data);
  return (
    <Container variant={variant}>
      {data.map((card, index) =>
        variant === 'horizontal' ? (
          <HorizontalCard
            data={card}
            image={images.find(image => image.title === card.imageTitle)}
            reverse={index % 2 !== 0}
            key={card.heading}
          />
        ) : (
          <VerticalCard
            data={card}
            image={images.find(image => image.title === card.imageTitle)}
            key={card.heading}
          />
        )
      )}
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === 'horizontal' ? 'column' : 'row'};
  justify-content: space-between;
`;

export default Cards;
