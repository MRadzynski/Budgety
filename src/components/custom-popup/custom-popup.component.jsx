import React from 'react';

import Overlay from '../overlay/overlay.component';

import {
  CustomPopupContainer,
  CustomPopupText,
  ExitPopup,
} from './custom-popup.styles';

const CustomPopup = ({ open, setOpen, setError, children }) => (
  <Overlay open={open} setOpen={setOpen} setError={setError}>
    <CustomPopupContainer open={open}>
      <ExitPopup onClick={() => setOpen(false)}>&#10005;</ExitPopup>
      <CustomPopupText>
        {children ? children : 'Something went wrong!'}
      </CustomPopupText>
    </CustomPopupContainer>
  </Overlay>
);

export default CustomPopup;
