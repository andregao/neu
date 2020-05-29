import React from 'react';
import styled from 'styled-components';
import { colors, devices, fontPresets } from '../styles/theme';
import ArrowIcon from './icons/arrow';
import { Link } from 'gatsby';

const NavBox = ({ mid, left, right }) => {
  return (
    <Container>
      <List>
        <Left to={left.path}>
          <IconContainer>
            <ArrowIcon variant="left" fill={colors.arrow} />
          </IconContainer>
          <NavText>{left.text}</NavText>
        </Left>
        <Right to={right.path}>
          <NavText>{right.text}</NavText>
          <IconContainer>
            <ArrowIcon variant="right" fill={colors.arrow} />
          </IconContainer>
        </Right>
        {/*<Mid to={mid.path}>*/}
        {/*  <NavText>{mid.text}</NavText>*/}
        {/*  <IconContainer>*/}
        {/*    <ArrowIcon variant="down" fill={colors.arrow} />*/}
        {/*  </IconContainer>*/}
        {/*</Mid>*/}
      </List>
    </Container>
  );
};
const Container = styled.nav`
  height: auto;
  width: 100%;
  margin-bottom: 75px;
  border: ${colors.white} solid 16px;
  padding: var(--cards-margin);
`;
const List = styled.div`
  display: grid;
  grid-gap: calc(var(--cards-margin) / 2);
  //grid-template: none/ repeat(3, 1fr);
  //grid-template-areas: 'left mid right';
  grid-template: none / repeat(2, 1fr);
  grid-template-areas: 'left right';
  justify-items: center;
  @media (${devices.xs}) {
    //grid-template: repeat(3, 1fr) / none;
    //grid-template-areas:
    //  'right'
    //  'left'
    //  'mid';
    grid-template: repeat(2, 1fr) / none;
    grid-template-areas:
      'right'
      'left';
  }
  ${fontPresets.infoSquareTitle};
  @media (${devices.s}) {
    ${fontPresets.infoSquareInfo};
  }
  > * {
    display: flex;
    align-items: center;
  }
`;
const Left = styled(Link)`
  grid-area: left;
  > :last-child {
    margin-left: 10px;
  }
  @media (${devices.xs}) {
    flex-direction: row-reverse;
    > :last-child {
      margin-left: 0;
      margin-right: 10px;
    }
  }
`;
const Right = styled(Link)`
  grid-area: right;
  > :first-child {
    margin-right: 10px;
  }
`;
const Mid = styled(Link)`
  grid-area: mid;
  flex-direction: column;
  > :first-child {
    margin-bottom: 10px;
  }
  @media (${devices.xs}) {
    flex-direction: row;
    > :first-child {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
`;
const IconContainer = styled.div`
  width: 1.5em;
  height: 1.5em;
  padding-bottom: 3px;
`;
const NavText = styled.span`
  text-align: center;
`;

export default NavBox;
