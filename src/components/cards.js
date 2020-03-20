import React from 'react';
import HorizontalCard from './horizontalCard';

const Cards = ({ data: { data, images } }) => {
  console.log(data);
  return data.map((card,index) => (
    <HorizontalCard
      data={card}
      image={images.find(image => image.title === card.imageTitle)}
      key={card.heading}
      reverse={index%2!==0}
    />
  ));
};

export default Cards;
