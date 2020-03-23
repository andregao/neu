import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <Container>
      <Link to="/page-2/">living</Link>
      <Link to="/page-2/">health care</Link>
      <Link to="/page-2/">mixed-use</Link>
    </Container>
  );
};
const Container = styled.nav`
  ${fontPresets.nav};
  color: ${colors.white};
  & > * {
    margin-left: 40px;
    &:hover {
      color: ${colors.light};
    }
  }
  display: flex;
`;
export default Nav;
