import React from 'react';
import HorizontalCard from './horizontalCard';
import VerticalCard from './verticalCard';
import styled from 'styled-components';

const Cards = ({ data: { data, images }, variant, className }) => {
  return (
    <Container variant={variant} className={className}>
      {data.map((card, index) =>
        variant === 'horizontal' ? (
          <HorizontalCard
            data={card}
            image={
              images && images.find((image) => image.title === card.imageTitle)
            }
            reverse={index % 2 !== 0}
            key={card.heading}
          />
        ) : (
          <VerticalCard
            data={card}
            image={
              images && images.find((image) => image.title === card.imageTitle)
            }
            key={card.heading}
          />
        )
      )}
    </Container>
  );
};
const Container = styled.section`
  padding-top: 20px;
  width: 100%;
  display: grid;
  grid-gap: var(--cards-margin);
  grid-template-columns: ${({ variant }) =>
    variant === 'horizontal' ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))'};
`;

export default Cards;
