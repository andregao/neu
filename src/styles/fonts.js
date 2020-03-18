import AzoSansRegular from "@fonts/AzoSansRegular.woff"
import AzoSansRegularItalic from "@fonts/AzoSansItalic.woff"
import AzoSansBlack from "@fonts/AzoSansBlack.woff"
import AzoSansBlackItalic from "@fonts/AzoSansBlackItalic.woff"
import AzoSansBold from "@fonts/AzoSansBold.woff"
import AzoSansBoldItalic from "@fonts/AzoSansBoldItalic.woff"
import AzoSansLight from "@fonts/AzoSansLight.woff"
import AzoSansLightItalic from "@fonts/AzoSansLightItalic.woff"
import AzoSansMedium from "@fonts/AzoSansMedium.woff"
import AzoSansMediumItalic from "@fonts/AzoSansMediumItalic.woff"
import AzoSansThin from "@fonts/AzoSansThin.woff"
import AzoSansThinItalic from "@fonts/AzoSansThinItalic.woff"

import { css } from "styled-components"

export const FontFaces = css`
  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: 200;
    src: url(${AzoSansThin}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: 200;
    src: url(${AzoSansThinItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: 300;
    src: url(${AzoSansLight}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: 300;
    src: url(${AzoSansLightItalic}) format('woff');
  }
  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${AzoSansRegular}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: 400;
    src: url(${AzoSansRegularItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: 500;
    src: url(${AzoSansMedium}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: 500;
    src: url(${AzoSansMediumItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${AzoSansBold}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: 700;
    src: url(${AzoSansBoldItalic}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: normal;
    font-weight: 900;
    src: url(${AzoSansBlack}) format('woff');
  }

  @font-face {
    font-family: 'Azo Sans';
    font-style: italic;
    font-weight: 900;
    src: url(${AzoSansBlackItalic}) format('woff');
  }
`

export const fontFamily = "Azo Sans, sans-serif"
