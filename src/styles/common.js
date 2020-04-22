import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { colors, fontPresets, transitions } from './theme';
import Cards from '../components/cards';

export const BodyContainer = styled.main`
  padding: 0 var(--body-side-padding);
  width: 100%;
`;
export const Section = styled.article`
  margin-top: 75px;
  ${transitions.long};
`;
export const FullWidthSection = styled(Section)`
  --side-margin: calc(-1 * var(--body-side-padding));
  margin-left: var(--side-margin);
  margin-right: var(--side-margin);
`;
export const HeroSection = styled(FullWidthSection)`
  margin-top: 0;
`;
export const Background = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  height: 85vh;
  max-height: 900px;
  min-height: 620px;
  width: 100vw;
  display: flex;
`;
export const Hr = styled.hr`
  border-top: ${({ variant }) => (variant === 'thin' ? '1px' : '2px')} solid
    ${colors.hr};
  width: 100%;
`;
export const SectionWithSidebar = styled.section`
  display: grid;
  grid-column-gap: var(--content-margin);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;
export const CardsWhiteBackground = styled(Cards)`
  padding: 55px var(--body-side-padding); // set padding because full width background color
  background-color: ${colors.white};
  margin-bottom: -75px; // offset common section margin top
`;

export const HeroBackground = styled(Background)`
  justify-content: stretch;
  align-items: center;
`;
export const HeroHeading = styled.h1`
  ${fontPresets.heroHeading};
  ${transitions.long};
  margin: 0 var(--body-side-padding);
`;
