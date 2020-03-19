import { createGlobalStyle } from 'styled-components';
import { FontFaces, fontFamily, colors, fontPresets } from './theme';

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
    font-family: ${fontFamily};
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.bodyBackground};
    color: ${colors.bodyText};
  }
  
  ::selection {
    background-color: ${colors.highlight};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.linkHover};
    }
  }
  
  button {
    cursor: pointer;
    ${fontPresets.button};
    border-radius: 0;
    background-color: transparent;
    color: ${colors.linkStandby};
    text-transform: uppercase;
    &:hover{
      color: ${colors.linkHover};
    }
    &:focus,
    &:active {
      outline-color: ${colors.bodyText};
    }
  }
  
`;
