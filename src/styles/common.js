import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { colors } from './theme';

export const BodyContainer = styled.main`
  padding: 0 var(--body-side-paddings);
`;
export const Section = styled.article`
  margin-top: 75px;
`;
export const FullWidthSection = styled(Section)`
  --side-margin: calc(-1 * var(--body-side-paddings));
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
  width: 100vw;
  display: flex;
`;
export const Hr = styled.hr`
  border-top: ${({ variant }) => (variant === 'thin' ? '1px' : '2px')} solid
    ${colors.hr};
  //margin-bottom: 40px;
  width: 100%;
`;
