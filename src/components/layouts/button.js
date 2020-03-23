import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';
import { Link } from 'gatsby';

const Button = ({ text, variant, margin, path, onClick }) => {
  !path && (path = '#');
  return (
    <Container onClick={onClick} variant={variant} margin={margin}>
      <Link to={path}>{text.toUpperCase()}</Link>
    </Container>
  );
};
const Container = styled.button`
  ${fontPresets.nav};
  --standby-color:${({ variant }) =>
    variant === 'white'
      ? colors.white
      : variant === 'dark'
      ? colors.dark
      : colors.gray};
  --hover-color:${({ variant }) =>
    variant === 'white'
      ? colors.light
      : variant === 'dark'
      ? colors.gray
      : colors.light};
  text-align: center;
  padding: 12px 14px;
  color: var(--standby-color);
  border: solid
    var(--standby-color) 2px;
  &:hover {
    border-color: var(--hover-color);
    color: var(--hover-color);
  }
  margin: ${margin => (margin ? margin : 0)};
  height: 40px;
`;

export default Button;
