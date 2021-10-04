import React from 'react';

import Overlay from '../overlay/overlay.component';

import {
  CustomModalContainer,
  CustomModalTitle,
  CustomModalExit,
  CustomModalButton,
} from './custom-modal.styles';

const CustomModal = ({ open, setOpen, confirmFunction, large, overlayRadius, children }) => {
  const handleExit = () => {
    setOpen(false);
  };

  const handleClick = () => {
    confirmFunction();
  };

  return (
    <Overlay open={open} setOpen={setOpen} overlayRadius={overlayRadius}>
      <CustomModalContainer open={open} large={large}>
        <CustomModalExit onClick={handleExit}>&#10005;</CustomModalExit>
        <CustomModalTitle>{children}</CustomModalTitle>
        <CustomModalButton onClick={handleClick} large={large}>Confirm</CustomModalButton>
      </CustomModalContainer>
    </Overlay>
  );
};

export default CustomModal;
