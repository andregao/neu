import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterLinks = () => {
  return (
    <Container>
      <p>@WITHME 2016</p>
      <Link to="/page-2/">privacy</Link>
      <Link to="/page-2/">terms</Link>
      <Link to="/page-2/">returns</Link>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  & > * {
    margin-right: 15px;
  }
`;

export default FooterLinks;
