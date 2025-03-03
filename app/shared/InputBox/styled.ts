import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing60} ${theme?.spacing?.spacing100} `};
`;

export const InputLabel = styled.label`
  ${({ theme }) => theme?.typography?.titleXSmall};
`;

export const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

export const InputField = styled.input<{
  disabled?: boolean;
  hasError?: boolean;
}>`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${({ hasError, theme }) =>
    hasError
      ? hexToRgba(theme?.colors?.negative, 0.08)
      : theme?.colors?.surface20};
  padding: ${({ theme }) => `${theme?.spacing?.spacing60}`};
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    ${({ theme }) => theme?.typography?.bodyLarge};
    width: 296px;
    height: 28px;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid
      ${({ hasError, theme }) =>
        hasError ? theme?.colors?.negative : theme?.colors?.surfaceInverse10};
    caret-color: black;
    padding-top: ${({ theme }) => `${theme?.spacing?.spacing100} `};
    align-items: flex-start;
  }
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

export const Subtitle = styled.span`
  position: absolute;
  top: 8px;
  left: 32px;
  font-family: 'Inter', sans-serif;

  ${({ theme }) => theme?.typography?.bodySmall};
  color: #999;
  pointer-events: none;
  margin-bottom: 4px;
`;

export const CheckText = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme }) => theme?.typography?.buttonSmall};
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
`;

export const CheckButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme }) => theme?.typography?.bodySmall};
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme?.spacing?.spacing20};
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme?.colors?.negative};
  ${({ theme }) => theme?.typography?.bodySmall};
`;
