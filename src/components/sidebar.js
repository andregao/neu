import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import { Hr } from '../styles/common';
import SidebarList from './sidebarList';

const SideBar = ({ data, children }) => {
  const { heading, data: list, images } = data;
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Hr />
      {list && <SidebarList list={list} images={images} />}
      {children}
    </Container>
  );
};

const Container = styled.aside`
  grid-column: span 1;
`;
const Heading = styled.h3`
  ${fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;

export default SideBar;
