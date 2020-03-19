import styled from 'styled-components';
import { colors } from '../../styles/theme';
export default styled.svg`
  height: 21px;
  width: 21px;
  fill:${colors.footerText};
  &:hover{
  fill: ${colors.linkStandby};
  }
`
