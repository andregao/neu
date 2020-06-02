import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ArrowIcon from './icons/arrow';
import { colors, logStyles, transitions } from '../styles/theme';
import Indicators from './indicators';
import { useHorizontalSwipe } from '../utils';

const Carousel = ({ imageTitles, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCount = imageTitles.length;
  const currentImageTitle = imageTitles[currentImageIndex];
  const currentImage = images.find(
    (image) => image.title === currentImageTitle
  );

  // controls
  const [isAuto, setAuto] = useState(imageCount > 1);
  const goToIndex = (index) => {
    setAuto(false);
    setCurrentImageIndex(index);
  };
  const goLeft = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? imageCount - 1 : --prev));
  const goRight = () =>
    setCurrentImageIndex((prev) => (prev === imageCount - 1 ? 0 : ++prev));
  const handleLeft = () => {
    goLeft();
    setAuto(false);
  };
  const handleRight = () => {
    goRight();
    setAuto(false);
  };

  // reset to display first image when tab changes
  useEffect(() => setCurrentImageIndex(0), [imageTitles]);

  // briefly shows the controls
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const ref = setTimeout(() => setOpacity(0), 2000);
    return () => {
      clearTimeout(ref);
      setOpacity(1);
    };
  }, [imageTitles]);

  //auto go right
  useEffect(() => {
    let ref;
    isAuto && (ref = setInterval(goRight, 7000));
    return () => (isAuto ? clearInterval(ref) : setAuto(true));
  }, [imageTitles, isAuto]);

  // mobile swipe
  const [elementStyle, touchHandlers] = useHorizontalSwipe({
    handleLeft,
    handleRight,
  });

  return (
    <Container {...touchHandlers}>
      <Slide fluid={currentImage.fluid} style={elementStyle} />
      {imageCount > 1 && (
        <FadeInOnHover opacity={opacity}>
          <NavOverlay />
          <StyledIndicators
            imageCount={imageCount}
            currentImageIndex={currentImageIndex}
            goToIndex={goToIndex}
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
  overflow: hidden;
`;
const Slide = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  animation: fadein 0.4s ease-out;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  bottom: 5%;
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
