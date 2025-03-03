import React from 'react';
import {
  SmallButton,
  MediumButton,
  LargeButton,
  PrimaryButton,
  NotifyButton,
  CustomButton,
} from './styles';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './constants';
import type { ButtonProps } from './types';

const Button = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  customStyles,
  children,
  ...props
}: ButtonProps) => {
  const getButtonComponent = () => {
    switch (variant) {
      case BUTTON_VARIANTS.NOTIFY:
        return NotifyButton;
      case BUTTON_VARIANTS.PRIMARY:
      default:
        return PrimaryButton;
    }
  };

  const getSizeComponent = (ButtonComponent: any) => {
    switch (size) {
      case BUTTON_SIZES.SMALL:
        return SmallButton.withComponent(ButtonComponent);
      case BUTTON_SIZES.LARGE:
        return LargeButton.withComponent(ButtonComponent);
      case BUTTON_SIZES.MEDIUM:
      default:
        return MediumButton.withComponent(ButtonComponent);
    }
  };

  const CustomBtn = (Button: any) => CustomButton.withComponent(Button);

  const ButtonComponent = getSizeComponent(getButtonComponent());
  const StyledButton = CustomBtn(ButtonComponent);

  return (
    <StyledButton
      customStyle={customStyles}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
