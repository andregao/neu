import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/theme';
import { createPortal } from 'react-dom';
import CloseIcon from './icons/close';

const Modal = ({ isOpen, onClose, children }) => {
  const content = isOpen && (
    <Overlay>
      <Container>
        <CloseIconContainer onClick={onClose}>
          <CloseIcon fill={colors.white} />
        </CloseIconContainer>
        {children}
      </Container>
    </Overlay>
  );
  return createPortal(content, document.body);
};

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseIconContainer = styled.div`
  position: absolute;
  z-index: 102;
  width: 48px;
  height: 48px;
  top: 6vmin;
  right: 6vmin;
  cursor: pointer;
  opacity: 50%;
  :hover {
    opacity: 100%;
  }
`;
export default Modal;
