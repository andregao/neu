import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, devices } from '../styles/theme';
import { activeStyle } from './nav';

const FooterLinks = () => {
  return (
    <Container>
      <Link to="/living/" activeStyle={activeStyle}>
        living
      </Link>
      <Link to="/retail/" activeStyle={activeStyle}>
        retail
      </Link>
      <Link to="/health/" activeStyle={activeStyle}>
        healthcare
      </Link>
    </Container>
  );
};
const Container = styled.div`
  @media (${devices.xs}) {
    margin-bottom: 20px;
  }
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & > * {
    &:not(:last-child) {
      margin-right: 15px;
    }
    // &:not(:first-child):hover {
    //   color: ${colors.light};
    // }
    &:hover {
      color: ${colors.light};
    }
  }
`;

export default FooterLinks;
