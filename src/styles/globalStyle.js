import { createGlobalStyle } from 'styled-components';
import { FontFaces, fontFamily, colors, fontPresets, devices } from './theme';

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
    background-color: ${colors.offWhite};
    color: ${colors.dark};
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
    white-space: pre-wrap;
  }
  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;

    &:focus {
      outline-color: ${colors.warmGreen};
    }
  }
  button {
    cursor: pointer;
    ${fontPresets.button};
    border-radius: 0;
    background-color: transparent;
    text-transform: uppercase;
    &:focus,
    &:active {
      outline-color: ${colors.warmGreen};
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
  hr {
    margin: 0;
  }
  pre{
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${colors.dark};
    background-color: ${colors.warmGreen};
  }
  input:focus, textarea:focus{
    outline: none;
    border: 1px solid ${colors.warmGreen};
    box-shadow: 0 0 5px ${colors.warmGreen};
  }
  
  // variables
  :root {
    --body-side-paddings: 200px;
    @media (${devices.m}) {
      --body-side-paddings: 140px;
    }
    @media (${devices.s}) {
      --body-side-paddings: 80px;
    }
  }
`;
