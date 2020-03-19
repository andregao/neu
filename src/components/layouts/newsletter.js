import React from 'react';
import styled from 'styled-components';
import { colors, fontPresets } from '../../styles/theme';

const Newsletter = () => {
  return (
    <Container>
      <p>Get the latest updates</p>
      <Form>
        <EmailInput type={'email'} placeholder={'EMAIL'} />
        <SubmitInput type={'submit'} value={'SUBMIT'} />
      </Form>
    </Container>
  );
};
const Container = styled.article`
  ${fontPresets.newsletter};
  text-transform: initial;
  width: 300px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;
const Form = styled.form`
display: flex;
justify-content: space-between;
`
const EmailInput = styled.input`
  border: solid ${colors.footerText} 1px;
  background-color: ${colors.bodyText};
  padding: 10px 10px 7px;
  font-size: 12px;
  color: ${colors.linkStandby};
  width: 70%;
  margin-right: 14px;
`;
const SubmitInput = styled.input`
  background-color: black;
  ${fontPresets.footer};
  color: white;
  border: solid ${colors.footerText} 1px;
  padding: 10px 10px 7px;
  width: 25%;
  text-align: center;
`;
export default Newsletter;
