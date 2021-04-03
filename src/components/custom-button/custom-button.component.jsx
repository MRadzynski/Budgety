import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

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
