import styled from 'styled-components';
import { colors } from '../styles/theme';

export default styled.hr`
  border-top: ${({variant})=>variant==='thin'?'1px':'2px'} solid ${colors.hr};
  //margin-bottom: 40px;
  width: 100%;
`;
