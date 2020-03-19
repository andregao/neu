import React from 'react';
import TwitterIcon from '../icons/twitter';
import SvgIcon from '../icons/svgIcon';
import FacebookIcon from '../icons/facebook';
import styled from 'styled-components';
import InstagramIcon from '../icons/instagram';
import LinkedinIcon from '../icons/linkedin';

const SocialLinks = () => {
  return (
    <Container>
      <SvgIcon>
        <TwitterIcon />
      </SvgIcon>
      <SvgIcon>
        <FacebookIcon />
      </SvgIcon>
      <SvgIcon>
        <InstagramIcon />
      </SvgIcon>
      <SvgIcon>
        <LinkedinIcon />
      </SvgIcon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  & > * {
    margin-right: 20px;
  }
`;

export default SocialLinks;
