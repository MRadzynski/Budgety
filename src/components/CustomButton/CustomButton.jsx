import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({
  bgColor,
  textColor,
  hoverColor,
  children,
  ...props
}) => (
  <CustomButtonContainer
    bgColor={bgColor}
    textColor={textColor}
    hoverColor={hoverColor}
    {...props}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
