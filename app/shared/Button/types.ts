import { CSSProperties } from 'react';
import React from 'react';

import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants';

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export interface ButtonStyleProps {
  padding?: CSSProperties['padding'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
  color?: CSSProperties['color'];
  background?: CSSProperties['background'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  position?: CSSProperties['position'];
  margin?: CSSProperties['margin'];
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  customStyles?: ButtonStyleProps;
  children: React.ReactNode;
}
