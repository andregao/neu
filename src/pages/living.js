import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import PrimaryText from '../components/primaryText';
import SideBar from '../components/sidebar';
import styled from 'styled-components';
import Cards from '../components/cards';
import { colors, fontPresets } from '../styles/theme';
import YoutubeVideo from '../components/youtubeVideo';
import {
  BodyContainer,
  FullWidthSection,
  Section,
  Background,
  HeroSection,
} from '../styles/common';
import { compareSections } from '../components/utils';

const IndexPage = ({ data: { hero, allPrimaryText, sidebar, allCards } }) => {
  const { heading: heroHeading, background: heroBackground } = hero;
  const primaryText = [...allPrimaryText.nodes].sort(compareSections);
  const cards = [...allCards.nodes].sort(compareSections);

  return (
    <Layout>
      <SEO title="living" />
      <BodyContainer>
        <HeroSection>
          <HeroBackground
            fluid={[
              'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
              heroBackground.fluid,
            ]}
          >
            <HeroHeading>{heroHeading}</HeroHeading>
          </HeroBackground>
        </HeroSection>
        <Section>
          <FirstSection>
            <PrimaryText
              heading={primaryText[0].heading}
              paragraph={primaryText[0].paragraph.paragraph}
              width="60%"
            />
            <SideBar data={sidebar} width="30%" />
          </FirstSection>
        </Section>
        <Section>
          <PrimaryText
            heading={primaryText[1].heading}
            paragraph={primaryText[1].paragraph.paragraph}
          />
          <Cards data={cards[0]} variant="horizontal" />
        </Section>
        <Section>
          <PrimaryText
            heading={primaryText[2].heading}
            paragraph={primaryText[2].paragraph.paragraph}
          />
          <Cards data={cards[1]} variant="vertical" />
        </Section>
        <FullWidthSection>
          <YoutubeVideo id="Ax_YH4ASu_I" />
          <ForthSectionCards data={cards[2]} />
        </FullWidthSection>
        <FullWidthSection>
          <SeventhSectionBackground fluid={primaryText[5].images[0].fluid}>
            <SeventhSectionPrimaryText
              heading={primaryText[5].heading}
              paragraph={primaryText[5].paragraph.paragraph}
            />
          </SeventhSectionBackground>
        </FullWidthSection>
      </BodyContainer>
    </Layout>
  );
};

const HeroBackground = styled(Background)`
  justify-content: stretch;
  align-items: center;
`;
const HeroHeading = styled.h1`
  ${fontPresets.heroHeading};
  margin: 0 var(--body-side-paddings);
`;
const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
const ForthSectionCards = styled(Cards)`
  padding: 55px var(--body-side-paddings); // set padding again because full width background color
  background-color: ${colors.white};
`;

const SeventhSectionBackground = styled(Background)`
  max-height: 800px;
  align-items: center;
  justify-content: flex-end;
`;
const SeventhSectionPrimaryText = styled(PrimaryText)`
  color: ${colors.dark};
  margin-right: var(--body-side-paddings);
  width: 20%;
  & > :first-child {
    margin-bottom: 10px; // set new primary heading margin
  }
`;

export default IndexPage;

export const pageQuery = graphql`
  query($pageName: String = "open-a-store") {
    hero: contentfulHero(page: { eq: $pageName }) {
      page
      heading
      paragraph {
        paragraph
      }
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
          ...GatsbyContentfulFluid_withWebp
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
            path
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