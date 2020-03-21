import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <Container>
      <Link to="/page-2/">locations</Link>
      <Link to="/page-2/">open a store</Link>
    </Container>
  );
};
const Container = styled.nav`
  ${fontPresets.nav};
  color: ${colors.white};
  & > * {
    margin-left: 40px;
  }
`;
export default Nav;
