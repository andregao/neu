import React from 'react';
import styled from 'styled-components';
import { colors, devices, fontPresets } from '../../styles/theme';
import SocialLinks from './socialLinks';
import FooterLinks from './footerLinks';
import Newsletter from './newsletter';
import Button from './button';

const Footer = () => {
  return (
    <Container>
      {/*<Links>*/}
      {/*<SocialLinks />*/}
      <FooterLinks />
      {/*</Links>*/}
      {/*<Newsletter/>*/}
      <Button text="contact" variant="gray" path="/contact/" />
    </Container>
  );
};

const Container = styled.footer`
  min-height: 150px;
  width: 100%;
  ${fontPresets.footer};
  text-transform: uppercase;
  background-color: ${colors.dark};
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  @media (${devices.xs}) {
    flex-direction: column;
    align-items: center;
  }
  padding: 60px 80px;
`;

// const Links = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-end;
//   height: 60px;
// `;

export default Footer;
