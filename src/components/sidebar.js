import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import { Hr } from '../styles/common';
import SidebarList from './sidebarList';

const SideBar = ({ data, width: flex, children, className }) => {
  const { heading, data: list, images } = data;
  return (
    <Container flex={flex} className={className}>
      <Heading>{heading}</Heading>
      <Hr />
      {list && <SidebarList list={list} images={images} />}
      {children}
    </Container>
  );
};

const Container = styled.aside`
  flex: ${({ flex }) => flex};
  margin-right: ;
  min-width: 250px;
`;
const Heading = styled.h3`
  ${fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;


export default SideBar;
