import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ArrowIcon from './icons/arrow';
import { colors, transitions } from '../styles/theme';
import Indicators from './indicators';

const Carousel = ({ imageTitles, images }) => {
  const [currentImageIndex, setCurrentImagIndex] = useState(0);
  const imageCount = imageTitles.length;
  const currentImageTitle = imageTitles[currentImageIndex];
  const currentImage = images.find(
    (image) => image.title === currentImageTitle
  );
  const handleLeft = () =>
    setCurrentImagIndex((prev) => (prev === 0 ? imageCount - 1 : --prev));
  const handleRight = () =>
    setCurrentImagIndex((prev) => (prev === imageCount - 1 ? 0 : ++prev));
  useEffect(() => setCurrentImagIndex(0), [imageTitles]);

  // fade out controls
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const ref = setTimeout(() => setOpacity(0), 1500);
    return () => {
      clearTimeout(ref);
      setOpacity(1);
    };
  }, [imageTitles]);

  return (
    <Container>
      <Slide fluid={currentImage.fluid} />
      {imageCount > 1 && (
        <FadeInOnHover opacity={opacity}>
          <NavOverlay />
          <StyledIndicators
            imageCount={imageCount}
            currentImageIndex={currentImageIndex}
          />
          <NavContainer variant="left" onClick={handleLeft}>
            <ArrowIconWithShadow variant="left" fill={colors.offWhite} />
          </NavContainer>
          <NavContainer onClick={handleRight}>
            <ArrowIconWithShadow variant="right" fill={colors.offWhite} />
          </NavContainer>
        </FadeInOnHover>
      )}
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 800px;
  max-height: 100vmin;
  position: relative;
`;
const Slide = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`;
const NavContainer = styled.div`
  width: 8%;
  height: 8%;
  max-width: 60px;
  max-height: 60px;
  margin: 0 3%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ variant }) => (variant === 'left' ? 'left:0' : 'right:0')};
  cursor: pointer;
`;
const NavOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(33, 33, 33, 0.5) 0%,
    transparent 12%,
    transparent 88%,
    rgba(33, 33, 33, 0.5) 100%
  );
`;
const ArrowIconWithShadow = styled(ArrowIcon)`
  filter: drop-shadow(0 0 14px rgba(0, 0, 0, 0.8));
`;
const StyledIndicators = styled(Indicators)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const FadeInOnHover = styled.div`
  ${transitions.long};
  opacity: ${({ opacity }) => opacity};
  :hover {
    opacity: 1;
  }
`;
export default Carousel;
