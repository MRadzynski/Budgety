import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ bgColor, textColor, children }) => (
  <CustomButtonContainer bgColor={bgColor} textColor={textColor}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
