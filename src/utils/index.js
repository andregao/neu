const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const compareSections = ({ section: sectionA }, { section: sectionB }) =>
  sectionA - sectionB;

export const validateForm = (name, value, type, prevErrors) => {
  let errors = prevErrors;
  type === 'email' && (errors = validateEmail(value, errors));
  type === 'required' && (errors = validateRequired(name, value, errors));
  return errors;
};

function validateEmail(email, prevErrors) {
  if (!emailRegex.test(email)) {
    return { ...prevErrors, email: 'email address not valid' };
  } else {
    // clear error state if present, else return unmodified errors object
    if (prevErrors.email) {
      const { email: noop, ...errors } = prevErrors;
      return errors;
    } else {
      return prevErrors;
    }
  }
}

function validateRequired(name, value, prevErrors) {
  if (value.trim() === '') {
    return { ...prevErrors, [name]: `Please fill in ${name}` };
  } else {
    // clear error state if present, else return unmodified errors object
    if (prevErrors[name]) {
      const { [name]: noop, ...errors } = prevErrors;
      return errors;
    } else {
      return prevErrors;
    }
  }
}

export const sendToDatabase = async (formData, profile) => {
  profile.localTime = new Date().toTimeString();
  const docId = Date.now().toString();
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const data = { fields: { profile: { mapValue: { fields: {} } } } };
  Object.keys(formData).forEach(key => {
    data.fields[key] = { stringValue: formData[key] };
  });
  Object.keys(profile).forEach(key => {
    data.fields.profile.mapValue.fields[key] = { stringValue: profile[key] };
  });
  const body = JSON.stringify(data);

  const requestOptions = {
    method: 'POST',
    headers,
    body,
  };

  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/made4jonathan/databases/(default)/documents/contactForm?documentId=${docId}`,
    requestOptions
  );
  return response.status;
};
