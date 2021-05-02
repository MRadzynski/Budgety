import React from 'react';

import Overlay from '../overlay/overlay.component';

import {
  CustomModalContainer,
  CustomModalTitle,
  CustomModalExit,
  CustomModalButton,
} from './custom-modal.styles';

const CustomModal = ({ open, setOpen, confirmFunction, children }) => {
  const handleExit = () => {
    setOpen(false);
  };

  const handleClick = () => {
    confirmFunction();
  };

  return (
    <Overlay open={open} setOpen={setOpen}>
      <CustomModalContainer open={open}>
        <CustomModalExit onClick={handleExit}>&#10005;</CustomModalExit>
        <CustomModalTitle>{children}</CustomModalTitle>
        <CustomModalButton onClick={handleClick}>Confirm</CustomModalButton>
      </CustomModalContainer>
    </Overlay>
  );
};

export default CustomModal;
