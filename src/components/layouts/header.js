import styled from 'styled-components';
import React from 'react';
import { Link } from 'gatsby';
import Logo from './logo';
import Nav, { activeStyle } from './nav';
import Button from './button';
import { colors, devices, fontPresets } from '../../styles/theme';
import HamburgerIcon from '../icons/hamburger';

const Header = () => (
  <>
    <DesktopContainer>
      <Main>
        <Logo />
        <Nav />
      </Main>
      <ContactButton text="contact" variant="white" path="/contact/" />
    </DesktopContainer>
    <MobileContainer>
      <Logo />
      <NavGroup>
        <a tabIndex="0">
          <HamburgerIcon />
        </a>
        <Dropdown>
          <li>
            <Link to="/" tabIndex="0" activeStyle={activeStyle}>
              home
            </Link>
          </li>
          <li>
            <Link to="/living/" tabIndex="0" activeStyle={activeStyle}>
              living
            </Link>
          </li>
          <li>
            <Link to="/health/" tabIndex="0" activeStyle={activeStyle}>
              health care
            </Link>
          </li>
          <li>
            <Link to="/contact/" tabIndex="0">
              <Button text="contact" variant="white" margin="0" />
            </Link>
          </li>
        </Dropdown>
      </NavGroup>
    </MobileContainer>
  </>
);

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  //background-color: rgba(0,0,0,0.4); // debug only
`;

const DesktopContainer = styled(Container)`
  padding: var(--header-desktop-padding-y) var(--header-desktop-padding-x);
  @media (${devices.xs}) {
    display: none;
  }
`;

const ContactButton = styled(Button)`
  margin: 0 0 0 40px;
`;

const MobileContainer = styled(Container)`
  padding: var(--header-mobile-padding-y) var(--header-mobile-padding-x);
  display: none;
  @media (${devices.xs}) {
    display: flex;
  }
`;

const Main = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  //width: 400px;
`;

const NavGroup = styled.div`
  &:focus-within ul {
    opacity: 1;
    transform: none;
  }
  & a:hover {
    color: ${colors.light};
  }
`;

const Dropdown = styled.ul`
  background-color: rgba(33, 33, 33, 0.85);
  box-shadow: 0 -15px 15px 34px rgba(33, 33, 33, 0.85);
  border: none;
  position: absolute;
  right: 0;
  width: 100%;
  height: 145px;
  z-index: 1;
  opacity: 0;
  transform: translateY(-130%);
  transition: all 0.4s ease;
  ${fontPresets.nav};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  padding-right: var(--header-mobile-padding-x);
`;

// const HamburgerSvg = ({ className }) => (
//   <svg
//     aria-hidden="true"
//     // focusable="false"
//     role="img"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 448 512"
//     height="20"
//     className={className}
//   >
//     <title>hamburger icon</title>
//     <path
//       fill={colors.white}
//       d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
//     ></path>
//   </svg>
// );
// const HamburgerIcon = styled(HamburgerSvg)`
//   &:hover {
//     filter: brightness(0.7);
//   }
// `;

export default Header;
