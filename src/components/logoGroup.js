import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const LogoGroup = ({ images }) => {
  return (
    <Container>
      {images.map((image, index) => (
        <Image fluid={image.fluid} key={index} />
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  justify-items: center;
`;
const Image = styled(GatsbyImage)`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

export default LogoGroup;
