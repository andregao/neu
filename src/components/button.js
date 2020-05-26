import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../styles/theme';
import { navigate } from 'gatsby';

const Button = ({ text, variant, path, disabled, className, handleClick }) => {
  path && (handleClick = () => navigate(path));
  return (
    <Container
      variant={variant}
      onClick={handleClick}
      disabled={disabled}
      className={className}
    >
      {text.toUpperCase()}
    </Container>
  );
};
const Container = styled.button`
  ${fontPresets.nav};
  --standby-color: ${({ variant }) =>
    variant === 'white'
      ? colors.white
      : variant === 'dark'
      ? colors.dark
      : colors.gray};
  --hover-color: ${({ variant }) =>
    variant === 'white'
      ? colors.light
      : variant === 'dark'
      ? colors.gray
      : colors.light};
  text-align: center;
  padding: 10px 14px;
  color: var(--standby-color);
  border: solid var(--standby-color) 2px;
  &:disabled {
    opacity: 20%;
    &:hover {
      cursor: default;
      border-color: var(--standby-color);
      color: var(--standby-color);
    }
  }
  &:hover {
    border-color: var(--hover-color);
    color: var(--hover-color);
  }
  height: 40px;
`;

export default Button;
