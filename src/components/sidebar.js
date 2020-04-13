import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fontPresets, transitions } from '../styles/theme';
import { Hr } from '../styles/common';
import SidebarList from './sidebarList';
import { getStyle, useObserver } from '../utils';

const SideBar = ({ data, children }) => {
  const { heading, data: list, images } = data;

  // scroll reveal
  const ref = useRef(null);
  const [entry, setTarget] = useObserver(0.15);
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  return (
    <Container ref={ref} style={getStyle(entry)}>
      <Heading>{heading}</Heading>
      <Hr />
      {list && <SidebarList list={list} images={images} />}
      {children}
    </Container>
  );
};

const Container = styled.aside`
  grid-column: span 1;
  ${transitions.long};
`;
const Heading = styled.h3`
  ${fontPresets.secondaryHeading};
  margin-bottom: 20px;
`;

export default SideBar;
