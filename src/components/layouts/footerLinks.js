import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

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
  display: flex;
  align-items: flex-start;
  & > * {
    margin-right: 15px;
    &:hover {
      color: ${colors.light};
    }
  }
`;

export default FooterLinks;
