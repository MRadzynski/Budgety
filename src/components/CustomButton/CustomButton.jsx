import React from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({
  bgColor,
  children,
  hoverColor,
  textColor,
  ...props
}) => (
  <CustomButtonContainer
    bgColor={bgColor}
    hoverColor={hoverColor}
    textColor={textColor}
    {...props}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
