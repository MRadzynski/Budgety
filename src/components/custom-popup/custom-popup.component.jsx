import React from 'react';

import {
  CustomPopupContainer,
  CustomPopupText,
  ExitPopup,
} from './custom-popup.styles';

const CustomPopup = ({ open, setOpen, children }) => (
  <CustomPopupContainer open={open}>
    <ExitPopup onClick={() => setOpen(false)}>&#10005;</ExitPopup>
    <CustomPopupText>
      {children ? children : 'Something went wrong!'}
    </CustomPopupText>
  </CustomPopupContainer>
);

export default CustomPopup;
