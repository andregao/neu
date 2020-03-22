import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';
import { Link } from 'gatsby';

const Button = ({ text, variant, margin, path, onClick }) => {
  !path && (path = '#');
  return (
    <Container onClick={onClick} variant={variant} margin={margin}>
      <Link to={path}>{text}</Link>
    </Container>
  );
};
const Container = styled.button`
  ${fontPresets.nav};
  text-align: center;
  padding: 12px 14px;
  color: inherit;
  border: solid
    ${({ variant }) => (variant === 'light' ? colors.white : colors.dark)} 2px;
  &:hover {
    border-color: ${({ variant }) =>
      variant === 'light' ? colors.light : colors.gray};
    color: ${({ variant }) =>
      variant === 'light' ? colors.light : colors.gray};
  }
  margin: ${margin => (margin ? margin : 0)};
  height: 40px;
`;

export default Button;
