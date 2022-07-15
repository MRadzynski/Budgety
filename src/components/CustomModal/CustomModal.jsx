import Overlay from '../Overlay/Overlay';
import React from 'react';
import {
  CustomModalButton,
  CustomModalContainer,
  CustomModalExit,
  CustomModalTitle
} from './CustomModal.styles';

const CustomModal = ({
  children,
  confirmFunction,
  large,
  open,
  overlayRadius,
  setOpen
}) => {
  const handleExit = () => setOpen(false);

  return (
    <Overlay open={open} overlayRadius={overlayRadius} setOpen={setOpen}>
      <CustomModalContainer large={large} open={open}>
        <CustomModalExit onClick={handleExit}>&#10005;</CustomModalExit>
        <CustomModalTitle>{children}</CustomModalTitle>
        <CustomModalButton large={large} onClick={confirmFunction}>
          Confirm
        </CustomModalButton>
      </CustomModalContainer>
    </Overlay>
  );
};

export default CustomModal;
