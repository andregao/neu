import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import {
  Background,
  BodyContainer,
  FullWidthSection,
  HeroSection,
  Section,
} from '../styles/common';
import styled, { css } from 'styled-components';
import PrimaryText from '../components/primaryText';
import { colors, fontPresets } from '../styles/theme';
import {
  compareSections,
  sendToDatabase,
  validateForm,
} from '../utils';
import SideBar from '../components/sidebar';
import SecondaryText from '../components/secondaryText';
import Button from '../components/layouts/button';

const SecondPage = ({ data: { hero, allPrimaryText, allSidebars } }) => {
  const primaryText = [...allPrimaryText.nodes].sort(compareSections);
  const sidebars = [...allSidebars.nodes].sort(compareSections);
  const [formData, setFormData] = useState({ companyType: 'none-selected' });
  const [errors, setErrors] = useState({ email: '', company: '' });
  const [formIsValid, setFormIsValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('standby');
  const [profile, setProfile] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleBlur = ({ target: { name, value } }) => {
    setErrors(validateForm(name, value, errors));
  };
  const handleSubmit = e => {
    setSubmitStatus('pending');
    sendToDatabase(formData, profile)
      .then(status => {
        console.log('200?', status);
        if (status === 200) {
          setSubmitStatus('success');
        } else {
          setSubmitStatus('fail');
        }
      })
      .catch(e => {
        setSubmitStatus('fail');
        console.error('form submit network failure:', e);
      });

    e.preventDefault();
  };
  // update errors state
  useEffect(() => {
    Object.keys(errors).length === 0
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [errors]);
  // get user profile
  useEffect(() => {
    fetch('https://api.ipify.org')
      .then(response => response.text())
      .then(ip =>
        setProfile({ ip, lang: navigator.language, agent: navigator.userAgent })
      );
  }, []);
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
        <SecondSection>
          <LeftSide>
            <SideBar data={{ heading: 'GET IN TOUCH' }} />
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName || ''}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName || ''}
              />
              <Input
                type="email"
                name="email"
                required
                placeholder="Business Email*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.email || ''}
                error={errors.email}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={formData.phone || ''}
              />
              <Input
                type="text"
                name="company"
                required
                placeholder="Company Name*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.company || ''}
                error={errors.company}
              />
              <Select
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
              >
                <option value="none-selected" disabled hidden>
                  company type
                </option>
                <option value="hospital">Hospital</option>
                <option value="real-estate">Real-estate</option>
                <option value="retailer">Retailer</option>
                <option value="other">Other</option>
              </Select>
              <Textarea
                name="message"
                placeholder="how can we help you?"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              <Errors>
                <pre>
                  {Object.keys(errors)
                    .map(name => errors[name])
                    .join('\n')
                    .toLowerCase()}
                </pre>
              </Errors>
              <Button
                text="submit"
                variant="dark"
                type="submit"
                disabled={!formIsValid || submitStatus !== 'standby'}
              />
              {submitStatus === 'success' && (
                <SubmitResult>
                  <PrimaryText
                    heading="Thank you"
                    paragraph="We have received your message and will get back to you soon"
                  />
                </SubmitResult>
              )}
              {submitStatus === 'fail' && (
                <SubmitResult>
                  <PrimaryText
                    heading="uh-oh"
                    paragraph="Something went wrong. Please try again later or email us directly"
                  />
                </SubmitResult>
              )}
            </Form>
          </LeftSide>
          <RightSide>
            <SideBar data={sidebars[0]} />
          </RightSide>
        </SecondSection>
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
  padding: 75px var(--body-side-paddings);
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
  //width: 55%;
  padding: 0 100px 50px 0;
  flex: 1 0 450px;
  //min-width: 350px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
const RightSide = styled.section`
  flex: 0 0 280px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Form = styled.form`
  margin-top: 40px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 40px;
  position: relative;
`;

const inputStyles = css`
  background: none;
  border: 1px solid ${({ error }) => (error ? colors.error : colors.hr)};
  &::placeholder {
    ${fontPresets.form};
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  height: 48px;
  padding: 0 14px;
  ${inputStyles};
`;

const Textarea = styled.textarea`
  grid-column: 1 / span 2;
  padding: 25px 14px;
  height: 120px;
  resize: none;
  ${inputStyles};
`;

const Select = styled.select`
  text-transform: uppercase;
  ${inputStyles};
`;

const Errors = styled.div`
  grid-column: 1 / span 2;
  ${fontPresets.formError};
`;

const SecondSidebar = styled(SideBar)`
  margin-top: 45px;
`;

const SubmitResult = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${colors.offWhite};
`;

export default SecondPage;

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
