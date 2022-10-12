import React from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

interface CustomButtonProps {
  bgColor?: string;
  children?: JSX.Element | string;
  hoverColor?: string;
  onClick?: () => void;
  textColor?: string;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton = ({
  bgColor,
  children,
  hoverColor,
  textColor,
  ...props
}: CustomButtonProps) => (
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
