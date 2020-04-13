import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Section } from '../styles/common';
import { colors } from '../styles/theme';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist</p>
    </Container>
  </Layout>
);

const Container = styled(Section)`
  margin: 0;
  padding: 80px var(--body-side-padding);
  color: ${colors.white};
  background-color: ${colors.dark};
`;

export default NotFoundPage;
