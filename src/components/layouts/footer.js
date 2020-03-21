import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';
import SocialLinks from './socialLinks';
import FooterLinks from './footerLinks';
import Newsletter from './newsletter';

const Footer = () => {
  return (
    <Container>
      <Links>
        {/*<SocialLinks />*/}
        <FooterLinks />
      </Links>
      <Newsletter/>
    </Container>
  );
};

const Container = styled.footer`
  height: 250px;
  width: 100%;
  ${fontPresets.footer};
  text-transform: uppercase;
  background-color: ${colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 60px;
`;

export default Footer;
