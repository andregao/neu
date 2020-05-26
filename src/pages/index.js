import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  BodyContainer,
  HeroBackground,
  HeroContent,
  HeroSection,
} from '../styles/common';
import { getStyle, useObserver } from '../utils';
import Button from '../components/button';

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
      <SEO title="open a store" />
      <BodyContainer>
        <HeroSection>
          <HeroBackground
            fluid={[
              'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
              heroBackground.fluid,
            ]}
          >
            <HeroContent ref={heroTextRef} style={getStyle(heroTextEntry)}>
              <h1>{heroHeading}</h1>
              <p>{heroParagraph.paragraph}</p>
              <Button text={heroButtonText} variant="white" path="/living/" />
            </HeroContent>
          </HeroBackground>
        </HeroSection>
      </BodyContainer>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query($pageName: String = "home") {
    hero: contentfulHero(page: { eq: $pageName }) {
      page
      heading
      paragraph {
        paragraph
      }
      buttonText
      background {
        fluid(maxWidth: 2880, quality: 75) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
