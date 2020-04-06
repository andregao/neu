import AzoSansRegular from '../assets/fonts/AzoSansRegular.woff';
import AzoSansRegular2 from '../assets/fonts/AzoSansRegular.woff2';
import AzoSansRegularItalic from '../assets/fonts/AzoSansItalic.woff';
import AzoSansRegularItalic2 from '../assets/fonts/AzoSansItalic.woff2';
import AzoSansBlack from '../assets/fonts/AzoSansBlack.woff';
import AzoSansBlack2 from '../assets/fonts/AzoSansBlack.woff2';
import AzoSansBlackItalic from '../assets/fonts/AzoSansBlackItalic.woff';
import AzoSansBlackItalic2 from '../assets/fonts/AzoSansBlackItalic.woff2';
import AzoSansBold from '../assets/fonts/AzoSansBold.woff';
import AzoSansBold2 from '../assets/fonts/AzoSansBold.woff2';
import AzoSansBoldItalic from '../assets/fonts/AzoSansBoldItalic.woff';
import AzoSansBoldItalic2 from '../assets/fonts/AzoSansBoldItalic.woff2';
import AzoSansLight from '../assets/fonts/AzoSansLight.woff';
import AzoSansLight2 from '../assets/fonts/AzoSansLight.woff2';
import AzoSansLightItalic from '../assets/fonts/AzoSansLightItalic.woff';
import AzoSansLightItalic2 from '../assets/fonts/AzoSansLightItalic.woff2';
import AzoSansMedium from '../assets/fonts/AzoSansMedium.woff';
import AzoSansMedium2 from '../assets/fonts/AzoSansMedium.woff2';
import AzoSansMediumItalic from '../assets/fonts/AzoSansMediumItalic.woff';
import AzoSansMediumItalic2 from '../assets/fonts/AzoSansMediumItalic.woff2';
import AzoSansThin from '../assets/fonts/AzoSansThin.woff';
import AzoSansThin2 from '../assets/fonts/AzoSansThin.woff2';
import AzoSansThinItalic from '../assets/fonts/AzoSansThinItalic.woff';
import AzoSansThinItalic2 from '../assets/fonts/AzoSansThinItalic.woff2';

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
    src: url(${AzoSansThin2}) format('woff2'),
      url(${AzoSansThin}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.thin};
    src: url(${AzoSansThinItalic2}) format('woff2'),
      url(${AzoSansThinItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.light};
    src: url(${AzoSansLight2}) format('woff2'),
      url(${AzoSansLight}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.light};
    src: url(${AzoSansLightItalic2}) format('woff2'),
      url(${AzoSansLightItalic}) format('woff');
  }
  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.regular};
    src: url(${AzoSansRegular2}) format('woff2'),
      url(${AzoSansRegular}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.regular};
    src: url(${AzoSansRegularItalic2}) format('woff2'),
      url(${AzoSansRegularItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.medium};
    src: url(${AzoSansMedium2}) format('woff2'),
      url(${AzoSansMedium}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.medium};
    src: url(${AzoSansMediumItalic2}) format('woff2'),
      url(${AzoSansMediumItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.bold};
    src: url(${AzoSansBold2}) format('woff2'),
      url(${AzoSansBold}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.bold};
    src: url(${AzoSansBoldItalic2}) format('woff2'),
      url(${AzoSansBoldItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: ${fontWeights.black};
    src: url(${AzoSansBlack2}) format('woff2'),
      url(${AzoSansBlack}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: ${fontWeights.black};
    src: url(${AzoSansBlackItalic2}) format('woff2'),
      url(${AzoSansBlackItalic}) format('woff');
  }
`;

export const colors = {
  warmGreen: '#c2cba5',
  gray: '#616161',
  white: '#FFF',
  offWhite: '#F1F1F1',
  light: '#DDD',
  hr: '#D8D8D8',
  dark: '#212121',
  error: 'orangered',
};
export const devices = {
  xs: 'max-width: 599px',
  s: 'max-width: 1023px',
  m: 'max-width: 1439px',
  l: 'max-width: 1919px',
  xl: 'min-width: 1920px',
};

const getFontPreset = (weight, size, color = 'black') => css`
  font-weight: ${fontWeights[weight]};
  font-size: ${size}px;
  color: ${color ? colors[color] : colors.dark};
  @media (${devices.s}) {
    font-size: ${size >= 30 ? size / 1.3 : size}px;
  }
  @media (${devices.xs}) {
    font-weight: ${size / 1.6 < 20 && (weight === 'light' || weight === 'thin')
      ? fontWeights.regular
      : fontWeights[weight]};
  }
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
  form: getFontPreset('regular', 12, 'gray'),
  formError: css`
    color: ${colors.error};
    font-size: 14px;
    font-weight: 500;
  `,
};
