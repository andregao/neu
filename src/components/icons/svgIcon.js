import styled from 'styled-components';
import { colors } from '../../styles/theme';
export default styled.svg`
  cursor: pointer;
  height: 21px;
  width: 21px;
  fill:${colors.gray};
  &:hover{
  fill: ${colors.light};
  }
`
