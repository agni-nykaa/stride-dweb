import { colors } from './../../themes/color/gColor';
import styled from '@emotion/styled';
import type { ToggleOption } from './types';
import { hexToRgba } from '~/utils/colorUtils';

export const ToggleContainer = styled.div<{ isDark?: boolean }>`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  background: ${({ isDark, theme }) =>
    isDark ? theme?.colors?.surfaceInverse10 : theme?.colors?.surface};
  margin: auto;
  border-radius: 20px;
`;

export const ToggleSection = styled.div<{ isDark?: boolean }>`
  display: flex;
  border-radius: 1.25rem;
  border: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  background: ${({ isDark, theme }) =>
    isDark ? theme?.colors?.surfaceInverse30 : theme?.colors?.surface};
`;

export const ToggleVariant = styled.div<{
  option: ToggleOption;
  isActive: boolean;
}>`
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing40} ${theme?.spacing?.spacing80}`};
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ theme }) => theme?.typography?.bodySmall};
  font-style: normal;
  ${({ option, isActive }) =>
    isActive ? option.colors.selected : option.colors.unselected}
`;

export const ActiveToggleOption = styled.div`
  background: #fff;
  color: #000;
`;

export const ActiveToggleDark = styled.div`
  background: #000;
  color: #fff;
`;
