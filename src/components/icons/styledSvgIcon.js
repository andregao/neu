import styled from 'styled-components';
import { colors } from '../../styles/theme';
const StyledSvgIcon = styled.svg`
  cursor: pointer;
  height: 21px;
  width: 21px;
  fill: ${({ variant }) =>
    variant === 'gray'
      ? colors.gray
      : variant === 'white'
      ? colors.white
      : colors.dark};
  &:hover {
    fill: ${colors.light};
  }
`;
export default StyledSvgIcon;
