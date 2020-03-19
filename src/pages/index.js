import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';

export const query = graphql`
  {
    hero: contentfulHero(page: { eq: "open-a-store" }) {
      page
      heading
      paragraph {
        paragraph
      }
      background {
    fluid(maxWidth:1800,quality:75){
      ...GatsbyContentfulFluid_withWebp
    }
      }
    }
  }
`;

const IndexPage = ({ data: { hero } }) => {
  const { heading, background } = hero;
  return (
    <Layout>
      <SEO title="open a store" />
      <Hero heading={heading} background={background} />
    </Layout>
  );
};

export default IndexPage;
