import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';
import Hr from './Hr';
import SidebarList from './sidebarList';

const SideBar = ({ data, width }) => {
  const { heading, data:list, images } = data;
  return (
    <Container width={width}>
      <Heading>{heading}</Heading>
      <Hr />
      <SidebarList list={list} images={images}/>
    </Container>
  );
};

const Container = styled.aside`
  width: ${({ width }) => width};
  min-width: 250px;
`;
const Heading = styled.h3`
  ${fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;

export default SideBar;
