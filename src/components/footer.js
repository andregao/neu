import React from 'react';
import styled from 'styled-components';
import { colors, devices, fontPresets } from '../styles/theme';
import FooterLinks from './footerLinks';
import Button from './button';
import Logo from './icons/logo';
import NewLogo from '../assets/logo.svg';

const Footer = () => {
  return (
    <Container>
      {/*<Links>*/}
      {/*<SocialLinks />*/}
      {/*<FooterLinks />*/}
      <Left>
        <LogoContainer>
          <Logo fill={colors.light} />
        </LogoContainer>
        <CopyRight>
          &copy; 2020 NEU Communities, Inc. All Rights Reserved.
        </CopyRight>
      </Left>
      {/*</Links>*/}
      {/*<Newsletter/>*/}
      <Button text="contact" variant="light" path="/contact/" />
    </Container>
  );
};

const Container = styled.footer`
  min-height: 100px;
  width: 100%;
  ${fontPresets.footer};
  text-transform: uppercase;
  background-color: ${colors.dark};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (${devices.xs}) {
    flex-direction: column;
    align-items: center;
  }
  padding: calc(var(--content-padding-y) * 1.5)
    calc(var(--content-padding-x) * 1.5);
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  height: 20px;
  width: 168px;
  margin-bottom: 8px;
`;
const CopyRightSymbol = styled.span`
  font-size: 22px;
`;
const CopyRight = styled.p`
  font-size: 10px;
`;
// const Links = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-end;
//   height: 60px;
// `;

export default Footer;
