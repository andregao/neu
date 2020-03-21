import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import PrimaryText from '../components/primaryText';
import SideBar from '../components/sidebar';
import styled from 'styled-components';
import Cards from '../components/cards';
import { devices } from '../styles/theme';

export const query = graphql`
  query($pageName: String = "open-a-store") {
    hero: contentfulHero(page: { eq: $pageName }) {
      page
      heading
      paragraph {
        paragraph
      }
      background {
        fluid(maxWidth: 1800, quality: 75) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allPrimaryText: allContentfulPrimaryText(
      filter: { page: { eq: $pageName } }
    ) {
      nodes {
        section
        heading
        paragraph {
          paragraph
        }
      }
    }
    sidebar: contentfulSidebar(page: { eq: $pageName }) {
      heading
      data {
        title
        subtitle
        imageTitle
      }
      images {
        title
        fluid(maxWidth: 200, quality: 75) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allCards: allContentfulCards(filter: { page: { eq: $pageName } }) {
      nodes {
        section
        data {
          heading
          paragraph
          imageTitle
          button {
            text
            url
          }
        }
        images {
          title
          fluid(maxWidth: 660, quality: 75) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data: { hero, allPrimaryText, sidebar, allCards } }) => {
  const { heading, background } = hero;
  const primaryText = [...allPrimaryText.nodes].sort(
    ({ section: sectionA }, { section: sectionB }) => sectionA - sectionB
  );
  const cards = [...allCards.nodes].sort(
    ({ section: sectionA }, { section: sectionB }) => sectionA - sectionB
  );

  return (
    <Layout>
      <SEO title="open a store" />
      <Hero heading={heading} background={background} />
      <Container>
        <FirstSection>
          <PrimaryText
            heading={primaryText[0].heading}
            paragraph={primaryText[0].paragraph.paragraph}
            width="60%"
          />
          <SideBar data={sidebar} width="30%" />
        </FirstSection>
        <SecondSection>
          <PrimaryText
            heading={primaryText[1].heading}
            paragraph={primaryText[1].paragraph.paragraph}
          />
          <Cards data={cards[0]} variant="horizontal" />
        </SecondSection>
        <ThirdSection>
          <PrimaryText
            heading={primaryText[2].heading}
            paragraph={primaryText[2].paragraph.paragraph}
          />
          <Cards data={cards[1]} />
        </ThirdSection>
      </Container>
    </Layout>
  );
};
const Container = styled.main`
  //display: flex;
  //flex-direction: column;
  padding: 0 200px;
  @media (${devices.s}) {
    padding: 0 80px;
  }
`;
const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 75px 0 0;
`;
const SecondSection = styled.section`
  padding: 75px 0 0;
`;
const ThirdSection = styled.section`
  padding: 75px 0 0;
`;

export default IndexPage;
