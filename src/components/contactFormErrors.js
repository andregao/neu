import React from 'react';
import styled from 'styled-components';
import { fontPresets } from '../styles/theme';

const ContactFormErrors = ({ errors }) => {
  return (
    <Container>
      <pre>
        {Object.keys(errors)
          .map(name => errors[name])
          .join('\n')
          .toLowerCase()}
      </pre>
    </Container>
  );
};

const Container = styled.div`
  grid-column: 1 / span 2;
  ${fontPresets.formError};
`;

export default ContactFormErrors;
