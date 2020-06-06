import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  BodyContainer,
  DarkBackground,
  HeroBackground,
  HeroContent,
  HeroSection,
} from '../styles/common';
import { getStyle, useObserver } from '../utils';
import Button from '../components/button';
import { colors, fontFamily, fontPresets } from '../styles/theme';

const IndexPage = ({ data: { hero } }) => {
  const {
    heading: heroHeading,
    background: heroBackground,
    paragraph: heroParagraph,
    buttonText: heroButtonText,
  } = hero;

  // scroll reveal
  const heroTextRef = useRef(null);
  const [heroTextEntry, heroTextSetTarget] = useObserver();
  useEffect(() => {
    heroTextSetTarget(heroTextRef.current);
  }, []);

  return (
    <Layout>
      <DarkBackground />
      <SEO title="Home" />
      <BodyContainer>
        <HeroSection>
          <HeroBackground
            fluid={[
              'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
              heroBackground.fluid,
            ]}
          >
            <HeroContent ref={heroTextRef} style={getStyle(heroTextEntry)}>
              <HeroHeading>
                <LogoType>communities</LogoType>
                {heroHeading}
              </HeroHeading>
              {/*<p>{heroParagraph.paragraph}</p>*/}
              <Button text={heroButtonText} variant="white" path="/living/" />
            </HeroContent>
          </HeroBackground>
        </HeroSection>
      </BodyContainer>
    </Layout>
  );
};

const LogoType = styled.span`
  ${fontPresets.logoTypeHeroTail};
  :before {
    ${fontPresets.logoTypeHeroHead};
    font-family: ${fontFamily};
    content: 'NEU';
    margin-right: 4px;
  }
  :after {
    content: ' ';
  }
`;

const HeroHeading = styled.h1`
  ${fontPresets.heroHeading};
  margin-bottom: 20px;
`;

export default IndexPage;

export const pageQuery = graphql`
  query($pageName: String = "home") {
    hero: contentfulHero(page: { eq: $pageName }) {
      page
      heading
      #      paragraph {
      #        paragraph
      #      }
      buttonText
      background {
        fluid(maxWidth: 2880, quality: 75) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
