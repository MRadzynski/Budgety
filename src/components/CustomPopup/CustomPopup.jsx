import Overlay from '../Overlay/Overlay';
import React from 'react';
import {
  CustomPopupContainer,
  CustomPopupText,
  ExitPopup
} from './CustomPopup.styles';

const CustomPopup = ({ children, open, setError, setOpen }) => (
  <Overlay open={open} setError={setError} setOpen={setOpen}>
    <CustomPopupContainer open={open}>
      <ExitPopup onClick={() => setOpen(false)}>&#10005;</ExitPopup>
      <CustomPopupText>{children || 'Something went wrong!'}</CustomPopupText>
    </CustomPopupContainer>
  </Overlay>
);

export default CustomPopup;
