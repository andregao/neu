import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { createPortal } from 'react-dom';
import CloseIcon from './icons/close';

const Modal = ({ handleClose, children }) => {
  // modal mechanic set up
  const portalRoot =
    typeof document !== `undefined` ? document.getElementById('portal') : null;
  const el =
    typeof document !== `undefined` ? document.createElement('div') : null;
  useEffect(() => {
    portalRoot.appendChild(el);
  }, []);

  // scroll lock behind modal
  useEffect(() => {
    typeof document !== `undefined` &&
      document.body.classList.add('scroll-lock');
    return () =>
      typeof document !== `undefined` &&
      document.body.classList.remove('scroll-lock');
  }, []);

  // listen for ESC key to close modal by focusing on the background element
  const handleKeyDown = (e) => {
    e.stopPropagation(); // prevent event bubbling when modal opens on top of modals
    e.keyCode === 27 && handleClose();
  };
  const overlayEl = useRef(null);
  useEffect(() => overlayEl.current.focus(), []);

  const content = (
    <Overlay
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      ref={overlayEl}
      onClick={handleClose}
    >
      <CloseIconContainer onClick={handleClose}>
        <CloseIcon fill={colors.white} />
      </CloseIconContainer>
      {children}
    </Overlay>
  );
  return el ? createPortal(content, portalRoot) : null;
};

const Overlay = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 100;
`;
const CloseIconContainer = styled.div`
  position: fixed;
  z-index: 102;
  width: 48px;
  height: 48px;
  top: 6vmin;
  right: 6vmin;
  cursor: pointer;
  opacity: 85%;
  :hover {
    opacity: 100%;
  }
  filter: drop-shadow(0 0 5px #000);
`;
export default Modal;
