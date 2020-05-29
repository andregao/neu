import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  Background,
  BodyContainer,
  DarkBackground,
  FullWidthSection,
  HeroSection,
  SectionWithSidebar,
} from '../styles/common';
import styled from 'styled-components';
import PrimaryText from '../components/primaryText';
import { colors } from '../styles/theme';
import { compareSections } from '../utils';
import SideBar from '../components/sidebar';
import ContactForm from '../components/contactForm';

const ContactPage = ({ data: { hero, allPrimaryText, allSidebars } }) => {
  const primaryText = [...allPrimaryText.nodes].sort(compareSections);
  const sidebars = [...allSidebars.nodes].sort(compareSections);

  return (
    <Layout>
      <SEO title="Contact Us" />
      <BodyContainer>
        <HeroSection>
          <HeroBackground
            fluid={[
              'linear-gradient(rgba(0, 0, 0, 0.7) 0%, transparent 30%)',
              hero.background.fluid,
            ]}
          />
        </HeroSection>
        <FirstSection>
          <FirstSectionPrimaryText
            heading={primaryText[0].heading}
            paragraph={primaryText[0].paragraph}
          />
        </FirstSection>
        <SectionWithSidebar>
          <LeftSide>
            <SideBar data={{ heading: 'GET IN TOUCH' }} />
            <ContactForm />
          </LeftSide>
          <RightSide>
            <SideBar data={sidebars[0]} />
          </RightSide>
        </SectionWithSidebar>
      </BodyContainer>
    </Layout>
  );
};

const HeroBackground = styled(Background)`
  //background-position: 49% 18%; // model's face position
  min-height: 400px;
  max-height: 400px;
`;
const FirstSection = styled(FullWidthSection)`
  margin-top: 0; // remove margin to fill background color
`;

const FirstSectionPrimaryText = styled(PrimaryText)`
  padding: 75px var(--body-side-padding);
  background-color: ${colors.white};
`;

const LeftSide = styled.section`
  grid-column: span 2;
  margin-bottom: 30px;
`;
const RightSide = styled.section`
  grid-column: span 1;
`;

export default ContactPage;

export const pageQuery = graphql`
  query($pageName: String = "contact") {
    hero: contentfulHero(page: { eq: $pageName }) {
      background {
        fluid(maxWidth: 2880, quality: 75) {
          ...GatsbyContentfulFluid_withWebp_noBase64
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
    allSidebars: allContentfulSidebar(filter: { page: { eq: $pageName } }) {
      nodes {
        section
        heading
        #        paragraph {
        #          paragraph
        #        }
        data {
          title
          subtitle
          #          imageTitle
        }
      }
    }
  }
`;
