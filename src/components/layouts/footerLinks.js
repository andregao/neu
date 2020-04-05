import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, devices } from '../../styles/theme';

const FooterLinks = () => {
  return (
    <Container>
      <p>NEU2020</p>
      <Link to="/page-2/">privacy</Link>
      <Link to="/page-2/">terms</Link>
    </Container>
  );
};
const Container = styled.div`
  width: 220px;
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
    &:not(:first-child):hover {
      color: ${colors.light};
    }
  }
`;

export default FooterLinks;
