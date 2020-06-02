import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { createPortal } from 'react-dom';
import CloseIcon from './icons/close';

const Modal = ({ isOpen, handleClose, children }) => {
  const portalRoot =
    typeof document !== `undefined` ? document.getElementById('portal') : null;
  const el =
    typeof document !== `undefined` ? document.createElement('div') : null;
  useEffect(() => {
    portalRoot.appendChild(el);
  }, []);
  typeof document !== `undefined` &&
    (isOpen
      ? document.body.classList.add('scroll-lock')
      : document.body.classList.remove('scroll-lock'));

  const content = isOpen && (
    <Overlay>
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
