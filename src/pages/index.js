import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import PrimaryText, { PrimaryTextTwoColumns } from '../components/primaryText';
import SideBar from '../components/sidebar';
import styled from 'styled-components';
import Cards from '../components/cards';
import { fontPresets, transitions } from '../styles/theme';
// import YoutubeVideo from '../components/youtubeVideo';
import {
  Background,
  BodyContainer,
  CardsWhiteBackground,
  FullWidthSection,
  HeroSection,
  Section,
  SectionWithSidebar,
} from '../styles/common';
import { compareSections, getStyle, useObserver } from '../utils';
import BackgroundWithPrimaryText from '../components/backgroundWithPrimaryText';
import ItalyVideo from '../assets/italy.mp4';
import Video from '../components/video';

const IndexPage = ({ data: { hero, allPrimaryText, sidebar, allCards } }) => {
  const { heading: heroHeading, background: heroBackground } = hero;
  const primaryText = [...allPrimaryText.nodes].sort(compareSections);
  const cards = [...allCards.nodes].sort(compareSections);

  // scroll reveal
  const heroTextRef = useRef(null);
  const [heroTextEntry, heroTextSetTarget] = useObserver();
  useEffect(() => {
    heroTextSetTarget(heroTextRef.current);
  }, []);

  return (
    <Layout>
      <SEO title="open a store" />
      <BodyContainer>
        <HeroSection>
          <HeroBackground
            fluid={[
              'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
              heroBackground.fluid,
            ]}
          >
            <HeroHeading ref={heroTextRef} style={getStyle(heroTextEntry)}>
              {heroHeading}
            </HeroHeading>
          </HeroBackground>
        </HeroSection>
        <Section>
          <SectionWithSidebar>
            <PrimaryTextTwoColumns
              heading={primaryText[0].heading}
              paragraph={primaryText[0].paragraph.paragraph}
            />
            <SideBar data={sidebar} />
          </SectionWithSidebar>
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
          {/*<YoutubeVideo id="Ax_YH4ASu_I" />*/}
          <Video
            src={ItalyVideo}
            poster="https://i3.ytimg.com/vi/Ax_YH4ASu_I/maxresdefault.jpg"
          />
          <CardsWhiteBackground data={cards[2]} />
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
  ${transitions.long};
  margin: 0 var(--body-side-padding);
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
