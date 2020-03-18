import { createGlobalStyle } from "styled-components"
import { FontFaces, fontFamily } from "./fonts"

export const GlobalStyles = createGlobalStyle`
  ${FontFaces}
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fontFamily};
    font-weight: 300;
  }

`
