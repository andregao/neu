import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../styles/theme';
import NewLogo from '../../assets/new.svg';

const Logo = () => (
  <Link to={'/'}>
    <SiteLogo src={NewLogo}/>
  </Link>
);

const SiteLogo = styled.img`
  height: 20px;
  &:hover {
    filter: brightness(0.7);
  }
`;

export default Logo;
