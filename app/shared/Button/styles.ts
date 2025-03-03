import styled from '@emotion/styled';
import { ButtonStyleProps } from './types';

const getCustomStyles = (props: ButtonStyleProps = {}) => `
  ${props.padding ? `padding: ${props.padding};` : ''}
  ${props.fontSize ? `font-size: ${props.fontSize};` : ''}
  ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
  ${props.lineHeight ? `line-height: ${props.lineHeight};` : ''}
  ${props.color ? `color: ${props.color};` : ''}
  ${props.background ? `background: ${props.background};` : ''}
  ${props.border ? `border: ${props.border};` : ''}
  ${props.borderRadius ? `border-radius: ${props.borderRadius};` : ''}
  ${props.width ? `width: ${props.width};` : ''}
  ${props.height ? `height: ${props.height};` : ''}
  ${props.position ? `position: ${props.position};` : ''}
  ${props.margin ? `margin: ${props.margin};` : ''}
`;

const BaseButton = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.spacing20};
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  &:disabled {
    cursor: not-allowed;
  }
`;

const SmallButton = styled(BaseButton)`
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  ${({ theme }) => theme?.typography?.buttonSmall};
`;

const MediumButton = styled(BaseButton)`
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing60} ${theme?.spacing?.spacing40} ${theme?.spacing?.spacing60} ${theme?.spacing?.spacing80}`};

  ${({ theme }) => theme?.typography?.titleSmall};
`;

const LargeButton = styled(BaseButton)`
  padding: 12px 24px;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const PrimaryButton = styled(BaseButton)`
  background: #000;
  color: #fff;
  border: none;
`;

const NotifyButton = styled(BaseButton)`
  background-color: white;
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  border: none;
  position: absolute;
  right: 4px;
  font-weight: 600;
  letter-spacing: 0.00625rem;
`;

const CustomButton = styled(BaseButton)<{ customStyle: any }>`
  ${({ customStyle }) => getCustomStyles(customStyle)}
`;

export {
  BaseButton,
  SmallButton,
  MediumButton,
  LargeButton,
  PrimaryButton,
  NotifyButton,
  CustomButton,
};
