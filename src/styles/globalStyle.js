import { createGlobalStyle } from 'styled-components';
import { colors, devices, FontFaces, fontFamily, fontPresets } from './theme';

export const GlobalStyles = createGlobalStyle`
  ${FontFaces}
  
  html {
    box-sizing: border-box;
    width: 100%;
  }
  .scroll-lock{
    overflow: hidden;
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
    list-style: none;
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
    --body-side-padding: 200px;
    @media (${devices.l}) {
      --body-side-padding: 140px;
    }
    @media (${devices.m}) {
      --body-side-padding: 100px;
    }
    @media (${devices.s}) {
      --body-side-padding: 60px;
    }
    @media (${devices.xs}) {
      --body-side-padding: 40px;
    }
    
    --header-desktop-padding-y: calc(var(--body-side-padding) / 3.3);
    --header-desktop-padding-x: calc(var(--body-side-padding) / 2.5);
    
    --header-mobile-padding-y: calc(var(--body-side-padding) / 2);
    --header-mobile-padding-x: calc(var(--body-side-padding) / 1.5);
    
    --content-margin: 160px;
    @media (${devices.m}) {
      --content-margin: 100px;
    }
    @media (${devices.s}) {
      --content-margin: 50px;
    }
    @media (${devices.xs}) {
      --content-margin: 20px;
    }
    
    --cards-margin: 100px;
    @media (${devices.m}) {
      --cards-margin: 80px;
    }
    @media (${devices.s}) {
      --cards-margin: 60px;
    }
    @media (${devices.xs}) {
      --cards-margin: 40px;
    }
    
    --content-padding-y: 30px;
    --content-padding-x: 60px;
    @media (${devices.s}) {
      --content-padding-y: 20px;
      --content-padding-x: 40px;
    }
    @media (${devices.xs}) {
      --content-padding-y: 20px;
      --content-padding-x: 20px;
    }
  }
`;
