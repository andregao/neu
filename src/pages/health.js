import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import PrimaryText, { PrimaryTextRightMargin } from '../components/primaryText';
import SideBar from '../components/sidebar';
import styled from 'styled-components';
import Cards from '../components/cards';
import { colors, fontPresets } from '../styles/theme';
import HealthVideo from '../assets/health.mp4';
import {
  BodyContainer,
  FullWidthSection,
  Section,
  Background,
  HeroSection,
  SectionWithSidebar,
} from '../styles/common';
import { compareSections } from '../utils';
import Video from '../components/video';
import BackgroundWithPrimaryText from '../components/backgroundWithPrimaryText';

const IndexPage = ({ data: { hero, allPrimaryText, sidebar, allCards } }) => {
  const { heading: heroHeading, background: heroBackground } = hero;
  const primaryText = [...allPrimaryText.nodes].sort(compareSections);
  const cards = [...allCards.nodes].sort(compareSections);

  return (
    <Layout>
      <SEO title="health care" />
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
          <SectionWithSidebar>
            <PrimaryTextRightMargin
              heading={primaryText[0].heading}
              paragraph={primaryText[0].paragraph.paragraph}
              flex="2 1 400px"
            />
            <SideBar data={sidebar} flex="1 1 266px" />
          </SectionWithSidebar>
        </Section>
        <Section>
          <PrimaryText
            heading={primaryText[1].heading}
            paragraph={primaryText[1].paragraph.paragraph}
          />
          <Cards data={cards[0]} variant="horizontal" />
        </Section>
        <FullWidthSection>
          <Video src={HealthVideo} autoplay={true} />
          <ForthSectionCards data={cards[2]} />
        </FullWidthSection>
        <FullWidthSection>
          <BackgroundWithPrimaryText
            fluid={primaryText[5].images[0].fluid}
            heading={primaryText[5].heading}
            paragraph={primaryText[5].paragraph.paragraph}
            variant="right"
          />
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

const ForthSectionCards = styled(Cards)`
  padding: 55px var(--body-side-paddings); // set padding again because full width background color
  background-color: ${colors.white};
`;

export default IndexPage;

export const pageQuery = graphql`
  query($pageName: String = "health") {
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
