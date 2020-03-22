import styled from 'styled-components';
import React from 'react';
import Logo from './logo';
import Nav from './nav';
import Button from './button';
import { colors, devices } from '../../styles/theme';

const Header = () => (
  <Container>
    <Main>
      <Logo />
      <Nav />
    </Main>
    <Button
      text="contact"
      variant="light"
      margin="0 0 0 40px"
      path="/contact/"
    />
  </Container>
);

const Container = styled.header`
  //background-color: rgba(0,0,0,0.4); // debug use only
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 60px 80px;
  @media (${devices.s}) {
    padding: calc(var(--body-side-paddings) / 2);
  }
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  z-index: 1;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  //width: 400px;
`;

export default Header;
