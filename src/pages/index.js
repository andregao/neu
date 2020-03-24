import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import PrimaryText from '../components/primaryText';
import SideBar from '../components/sidebar';
import styled from 'styled-components';
import Cards from '../components/cards';
import { colors, devices, fontPresets } from '../styles/theme';
import Background from '../components/background';
import LogoGroup from '../components/logoGroup';
import YoutubeVideo from '../components/youtubeVideo';

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

const IndexPage = ({ data: { hero, allPrimaryText, sidebar, allCards } }) => {
  const { heading: heroHeading, background: heroBackground } = hero;
  const primaryText = [...allPrimaryText.nodes].sort(
    ({ section: sectionA }, { section: sectionB }) => sectionA - sectionB
  );
  const cards = [...allCards.nodes].sort(
    ({ section: sectionA }, { section: sectionB }) => sectionA - sectionB
  );

  return (
    <Layout>
      <SEO title="open a store" />
      <Container>
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
              width="20%"
            />
          </SeventhSectionBackground>
        </FullWidthSection>
      </Container>
    </Layout>
  );
};
const Container = styled.main`
  padding: 0 var(--body-side-paddings);
`;
const Section = styled.article`
  padding: 75px 0 0;
`;
const FullWidthSection = styled(Section)`
  margin: 0 calc(-1 * var(--body-side-paddings));
`;
const HeroSection = styled(FullWidthSection)`
  padding: 0;
`;
const HeroBackground = styled(Background)`
  max-height: 900px;
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
  & > :first-child {
    margin-bottom: 10px; // set new primary heading margin
  }
`;

export default IndexPage;
