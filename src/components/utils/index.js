const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const compareSections = ({ section: sectionA }, { section: sectionB }) =>
  sectionA - sectionB;

export const validateForm = (name, value, prevErrors) => {
  let errors = { ...prevErrors };
  name === 'email' && (errors = validateEmail(value, errors));
  (name === 'company' || name === 'message') &&
    (errors = validateRequired(name, value, errors));
  return errors;
};

function validateEmail(email, prevErrors) {
  if (!emailRegex.test(email)) {
    return { ...prevErrors, email: 'email address not valid' };
  } else {
    const { email: noop, ...errors } = prevErrors;
    return errors;
  }
}

function validateRequired(name, value, prevErrors) {
  if (value.trim() === '') {
    return { ...prevErrors, [name]: `Please fill in ${name}` };
  } else {
    const { [name]: noop, ...errors } = prevErrors;
    return errors;
  }
}
