import React, { useEffect, useState } from 'react';
import { sendToDatabase, validateForm } from '../utils';
import Button from './layouts/button';
import PrimaryText from './primaryText';

import styled, { css } from 'styled-components';
import { colors, fontPresets } from '../styles/theme';
import ContactFormErrors from './contactFormErrors';

const ContactForm = () => {
  const [formData, setFormData] = useState({ companyType: 'none-selected' });
  const [errors, setErrors] = useState({ email: '', company: '' });
  const [formIsValid, setFormIsValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('standby');
  const [profile, setProfile] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleBlur = ({ target: { name, value } }, type) => {
    setErrors(prevErrors => validateForm(name, value, type, prevErrors));
  };
  const handleSubmit = e => {
    setSubmitStatus('pending');
    sendToDatabase(formData, profile)
      .then(status => {
        console.log('200?', status);
        if (status === 200) {
          setSubmitStatus('success');
        } else {
          setSubmitStatus('fail');
        }
      })
      .catch(e => {
        setSubmitStatus('fail');
        console.error('form submit network failure:', e);
      });

    e.preventDefault();
  };
  // update errors state
  useEffect(() => {
    Object.keys(errors).length === 0
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [errors]);
  // get user profile
  useEffect(() => {
    fetch('https://api.ipify.org')
      .then(response => response.text())
      .then(ip =>
        setProfile({ ip, lang: navigator.language, agent: navigator.userAgent })
      );
  }, []);
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName || ''}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName || ''}
      />
      <Input
        type="email"
        name="email"
        required
        placeholder="Business Email*"
        onChange={handleChange}
        onBlur={e => handleBlur(e, 'email')}
        value={formData.email || ''}
        error={errors.email}
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        value={formData.phone || ''}
      />
      <Input
        type="text"
        name="company"
        required
        placeholder="Company Name*"
        onChange={handleChange}
        onBlur={e => handleBlur(e, 'required')}
        value={formData.company || ''}
        error={errors.company}
      />
      <Select
        name="companyType"
        value={formData.companyType}
        onChange={handleChange}
      >
        <option value="none-selected" disabled hidden>
          company type
        </option>
        <option value="hospital">Hospital</option>
        <option value="real-estate">Real-estate</option>
        <option value="retailer">Retailer</option>
        <option value="other">Other</option>
      </Select>
      <Textarea
        name="message"
        placeholder="how can we help you?"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <ContactFormErrors errors={errors} />
      <Button
        text="submit"
        variant="dark"
        type="submit"
        disabled={!formIsValid || submitStatus !== 'standby'}
      />
      {submitStatus === 'success' && (
        <SubmitResult>
          <PrimaryText
            heading="Thank you"
            paragraph="We have received your message and will get back to you soon"
          />
        </SubmitResult>
      )}
      {submitStatus === 'fail' && (
        <SubmitResult>
          <PrimaryText
            heading="uh-oh"
            paragraph="Something went wrong. Please try again later or email us directly"
          />
        </SubmitResult>
      )}
    </Form>
  );
};

const Form = styled.form`
  margin-top: 40px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 40px;
  position: relative;
`;

const inputStyles = css`
  background: none;
  border: 1px solid ${({ error }) => (error ? colors.error : colors.hr)};
  &::placeholder {
    ${fontPresets.form};
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  height: 48px;
  padding: 0 14px;
  ${inputStyles};
`;

const Textarea = styled.textarea`
  grid-column: 1 / span 2;
  padding: 25px 14px;
  height: 120px;
  resize: none;
  ${inputStyles};
`;

const Select = styled.select`
  text-transform: uppercase;
  ${inputStyles};
`;

const SubmitResult = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${colors.offWhite};
`;

export default ContactForm;
