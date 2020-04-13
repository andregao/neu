import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import {
  Background,
  BodyContainer,
  FullWidthSection,
  HeroSection,
  Section,
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
            paragraph={primaryText[0].paragraph.paragraph}
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
`;
const FirstSection = styled(FullWidthSection)`
  margin-top: 0; // remove margin to fill background color
`;

const FirstSectionPrimaryText = styled(PrimaryText)`
  padding: 75px var(--body-side-padding);
  background-color: ${colors.white};
`;

const SecondSection = styled(Section)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const LeftSide = styled.section`
  //padding: 0 100px 50px 0;
  //flex: 1 0 450px;
  //max-width: 700px;
  //display: flex;
  //flex-direction: column;
  //justify-content: flex-start;
  //align-items: stretch;
  grid-column: span 2;
  margin-bottom: 30px;
`;
const RightSide = styled.section`
  //flex: 0 0 280px;
  //margin-bottom: 50px;
  //display: flex;
  //flex-direction: column;
  //justify-content: flex-start;
  //align-items: flex-start;
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
        paragraph {
          paragraph
        }
        data {
          title
          subtitle
          imageTitle
        }
      }
    }
  }
`;
