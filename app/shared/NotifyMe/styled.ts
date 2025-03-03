import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme?.spacing?.spacing80}
    ${({ theme }) => theme?.spacing?.spacing50}
    ${({ theme }) => theme?.spacing?.spacing50}
    ${({ theme }) => theme?.spacing?.spacing50};
  background: ${({ theme }) => theme?.colors?.surface};
  border-top: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
`;

export const Description = styled.p`
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  ${({ theme }) => theme?.typography?.bodySmall};
  margin-bottom: ${({ theme }) => theme?.spacing?.spacing10};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme?.colors?.negative};
  ${({ theme }) => theme?.typography?.bodyXSmall};
  margin-top: ${({ theme }) => theme?.spacing?.spacing10};
`;

export const FormContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme?.spacing?.spacing20}
    ${({ theme }) => theme?.spacing?.spacing60};
  border: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  position: relative;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  padding-left: ${({ theme }) => theme?.spacing?.spacing0};
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
    ${({ theme }) => theme?.typography?.bodyMedium};
  }
`;

export const Button = styled.button`
  padding: 8px;
  background-color: white;
  color: #111314;
  border: none;
  position: absolute;
  right: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00625rem;
  &:disabled {
    cursor: not-allowed;
  }
`;
