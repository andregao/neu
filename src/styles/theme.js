import AzoSansRegular from '../fonts/AzoSansRegular.woff';
import AzoSansRegularItalic from '../fonts/AzoSansItalic.woff';
import AzoSansBlack from '../fonts/AzoSansBlack.woff';
import AzoSansBlackItalic from '../fonts/AzoSansBlackItalic.woff';
import AzoSansBold from '../fonts/AzoSansBold.woff';
import AzoSansBoldItalic from '../fonts/AzoSansBoldItalic.woff';
import AzoSansLight from '../fonts/AzoSansLight.woff';
import AzoSansLightItalic from '../fonts/AzoSansLightItalic.woff';
import AzoSansMedium from '../fonts/AzoSansMedium.woff';
import AzoSansMediumItalic from '../fonts/AzoSansMediumItalic.woff';
import AzoSansThin from '../fonts/AzoSansThin.woff';
import AzoSansThinItalic from '../fonts/AzoSansThinItalic.woff';

import { css } from 'styled-components';

export const fontFamily = 'Azo Sans, sans-serif';
const fontWeights = {
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};
export const FontFaces = css`
  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.thin};
    src: url(${AzoSansThin}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.thin};
    src: url(${AzoSansThinItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.light};
    src: url(${AzoSansLight}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.light};
    src: url(${AzoSansLightItalic}) format('woff');
  }
  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.regular};
    src: url(${AzoSansRegular}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.regular};
    src: url(${AzoSansRegularItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.medium};
    src: url(${AzoSansMedium}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.medium};
    src: url(${AzoSansMediumItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.bold};
    src: url(${AzoSansBold}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.bold};
    src: url(${AzoSansBoldItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.black};
    src: url(${AzoSansBlack}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.black};
    src: url(${AzoSansBlackItalic}) format('woff');
  }
`;

const getFontPreset = (weight, size, color = 'black') => `
  font-weight: ${fontWeights[weight]};
  font-size: ${size}px;
  color: ${color === 'white' ? '#FFF' : 'gray' ? '#616161' : '#212121'}
`;

export const fontPresets = {
  heroHeading: getFontPreset('bold', 56, 'white'),
  heroParagraph: getFontPreset('light', 20, 'white'),
  nav: getFontPreset('medium', 14, 'white'),
  button: getFontPreset('medium', 14),
  primaryHeading: getFontPreset('bold', 45),
  primaryParagraph: getFontPreset('light', 20),
  secondaryHeading: getFontPreset('bold', 16),
  secondaryParagraph: getFontPreset('light', 16),
  sidebarTitle: getFontPreset('medium', 14),
  sidebarSubtitle: getFontPreset('regular', 14),
  footer: getFontPreset('medium', 12, 'gray'),
  newsletter: getFontPreset('medium', 16, 'white'),
};

export const colors = {
  bodyBackground: '#F1F1F1',
  bodyText: '#212121',
  highlightBackgroundColor: '#768E66',
  highlightColor: '#DDD',
  linkStandby: '#FFF',
  linkHover: '#DDD',
  footerText: '#616161',
  hr: '#D8D8D8',
};

export const devices = {
  xs: 'max-width: 599px',
  s: 'max-width: 1023px',
  m: 'max-width: 1439px',
  l: 'max-width: 1919px',
  xl: 'min-width: 1920px',
};
