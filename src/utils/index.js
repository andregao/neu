import { useEffect, useRef, useState } from 'react';
import { logStyles } from '../styles/theme';

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
  Object.keys(formData).forEach((key) => {
    data.fields[key] = { stringValue: formData[key] };
  });
  Object.keys(profile).forEach((key) => {
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

export const useObserver = (threshold = 0.05) => {
  const [entry, setEntry] = useState(null);
  const [target, setTarget] = useState(null);
  const handleIntersect = ([e]) => e.isIntersecting && setEntry(e);
  // "useRef" to keep mutable observer reference between renders
  const observer = useRef(null);
  // initialize observer in client browser instead of in "useRef" - SSR Node environment
  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersect, { threshold });
  }, []);
  // subscribes when target element is set
  useEffect(() => {
    target instanceof Element && observer.current.observe(target);
    return () => {
      // unsubscribes when component is unmounted
      target instanceof Element && observer.current.disconnect();
    };
  }, [target]);
  // unsubscribes after intersection event
  useEffect(() => {
    entry && observer.current.disconnect();
  }, [entry]);

  return [entry, setTarget];
};

// scroll reveal styles
export const getStyle = (entry) =>
  entry && entry.isIntersecting
    ? { transform: 'none', opacity: 1 }
    : { transform: 'translateY(120px)', opacity: 0 };

// swipe gesture hook
export const useHorizontalSwipe = ({ handleLeft, handleRight }) => {
  // configure ignore swipe tolerant and animation delay
  const tolerant = 60;
  const transitionDelay = 300;

  const [initialX, setInitialX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetUnit, setOffsetUnit] = useState('px');
  const [duration, setDuration] = useState(0);

  const reset = () => {
    setInitialX(0);
    setOffsetX(0);
    setOffsetUnit('px');
    setDuration(0);
  };
  const goLeft = () => {
    handleLeft();
    reset();
  };
  const goRight = () => {
    handleRight();
    reset();
  };
  const handleTouchStart = (e) => {
    setInitialX(e.touches[0].pageX);
  };
  const handleTouchEnd = () => {
    // lifted finger

    if (offsetX > tolerant) {
      setDuration(transitionDelay);
      setOffsetUnit('%');
      setOffsetX(100);
      setTimeout(goLeft, transitionDelay);
    } else if (offsetX < -tolerant) {
      setDuration(transitionDelay);
      setOffsetUnit('%');
      setOffsetX(-100);
      setTimeout(goRight, transitionDelay);
    } else {
      setOffsetX(0);
    }
  };
  const handleTouchMove = (e) => {
    setOffsetX(e.touches[0].pageX - initialX);
  };
  const style = {
    transform: `translateX(${offsetX + offsetUnit})`,
    transition: `transform ${duration}ms`,
  };
  return [
    style,
    {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
    },
  ];
};
