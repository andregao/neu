import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PrimaryText from '../components/primaryText';
import styled from 'styled-components';
import {
  Background,
  BodyContainer,
  FullWidthSection,
  HeroSection,
  Section,
} from '../styles/common';
import { compareSections } from '../utils';
import BackgroundImage from 'gatsby-background-image';
import ExpansionGroup from '../components/expansionGroup';
import InfoSquare from '../components/infoSquare';
import NavBox from '../components/navBox';

const HealthPage = ({ data: { hero, allPrimaryText, allCards } }) => {
  const { background: heroBackground } = hero;
  const primaryText = [...allPrimaryText.nodes].sort(compareSections);
  const cards = [...allCards.nodes].sort(compareSections);

  return (
    <Layout>
      <SEO title="Healthcare" />
      <BodyContainer>
        <HeroSection>
          <HeroBackground
            fluid={[
              'linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0,0,0,0.5) 14%,transparent 30%)',
              heroBackground.fluid,
            ]}
          />
        </HeroSection>
        <Section>
          <PrimaryText heading={primaryText[0].heading} />
          <ExpansionGroup data={cards[0].data} images={cards[0].images} />
        </Section>
        <SectionTwoOneSplit>
          <PrimaryTextTwoThirds
            heading={primaryText[1].heading}
            paragraph={primaryText[1].paragraph}
          />
          <StyledInfoSquare data={primaryText[1].sidebar} />
        </SectionTwoOneSplit>
        <FullWidthSection>
          <CaseStudyBackground fluid={primaryText[1].images[0].fluid} />
        </FullWidthSection>
        <Section>
          <NavBox
            left={{ path: '/retail/', text: 'Retail' }}
            right={{ path: '/living/', text: 'Living' }}
            mid={{ path: '/environments/', text: 'NEU Environments' }}
          />
        </Section>
      </BodyContainer>
    </Layout>
  );
};

const HeroBackground = styled(Background)`
  justify-content: stretch;
  align-items: center;
  // reset common Background styles
  min-height: 400px;
  max-height: 400px;
`;

const SectionTwoOneSplit = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
`;

const PrimaryTextTwoThirds = styled(PrimaryText)`
  flex: 2 0 240px;
  margin-right: var(--cards-margin);
`;

const StyledInfoSquare = styled(InfoSquare)`
  flex: 1 0 240px;
  max-width: 400px;
`;

const CaseStudyBackground = styled(BackgroundImage)`
  width: 100vw;
  height: 640px;
  max-height: 90vmin;
`;

export default HealthPage;

export const pageQuery = graphql`
  query($pageName: String = "health-v2") {
    hero: contentfulHero(page: { eq: $pageName }) {
      background {
        fluid(maxWidth: 2880, quality: 75) {
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
        images {
          fluid(maxWidth: 1440, quality: 75) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        sidebar {
          title
          subtitle
          info
          note
        }
      }
    }
    allCards: allContentfulCards(filter: { page: { eq: $pageName } }) {
      nodes {
        section
        data {
          heading
          paragraph
          imageTitles
          cards {
            heading
            paragraph
          }
          floorPlan {
            size
            type
            installTime
            mapImage
            detailImage
            downloadUrl
          }
        }
        images {
          title
          fluid(maxWidth: 2048, quality: 75) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;
