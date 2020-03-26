import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <Container>
      <Link to="/living/" activeStyle={activeStyle}>living</Link>
      <Link to="/health/" activeStyle={activeStyle}>health care</Link>
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

const activeStyle = {
  borderBottom:'solid 1px'
}

export default Nav;
