import React from 'react';
import styled from 'styled-components';
import { Background } from '../styles/common';
import { colors, devices } from '../styles/theme';
import PrimaryText from './primaryText';

const BackgroundWithPrimaryText = ({ fluid, heading, paragraph, variant }) => {
  return (
    <SectionBackground fluid={fluid} variant={variant}>
      <SectionPrimaryText heading={heading} paragraph={paragraph} />
    </SectionBackground>
  );
};
const SectionBackground = styled(Background)`
  max-height: 800px;
  justify-content: ${({ variant }) =>
    variant === 'right' ? 'flex-end' : 'flex-start'};
  align-items: center;
  @media (${devices.s}) {
    justify-content: center;
    align-items: stretch;
  }
`;
const SectionPrimaryText = styled(PrimaryText)`
  color: ${colors.dark};
  margin: 0 var(--body-side-paddings);
  width: 20%;
  & > :first-child {
    margin-bottom: 10px; // set new primary heading margin
  }
  @media (${devices.s}) {
    margin: 0;
    width: 100%;
    padding: 30px;
    justify-content: center;
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 25%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.8) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
export default BackgroundWithPrimaryText;
