import styled from '@emotion/styled';

import Tick from '../../Icons/TickMark';
import { hexToRgba } from '~/utils/colorUtils';

export const Container = styled.div<{ hasLabel: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme?.spacing?.spacing60};
  padding: ${({ theme: { spacing }, hasLabel }) =>
    hasLabel
      ? `${spacing.spacing0} ${spacing.spacing80} ${spacing.spacing160}`
      : `${spacing.spacing0} ${spacing.spacing80} ${spacing.spacing60} ${spacing.spacing80}`};

  margin-top: ${({ theme }) => theme?.spacing?.spacing20};
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  align-items: flex-end;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing0} ${theme?.spacing?.spacing80} `};
`;

export const AllShades = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.primary};
  cursor: pointer;
  flex-shrink: 0;
`;

export const Title = styled.h2`
  ${({ theme }) => theme?.typography?.bodyMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const VariantItem = styled.div<{
  isSelected?: boolean;
  inStock?: boolean;
}>`
  max-width: 50px;
  max-height: 42px;
  width: 50px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 8.5px;
  border: 1px solid
    ${(props) => {
      if (props.isSelected) return props.theme?.colors?.surfaceInverse10;
      if (!props.inStock)
        return hexToRgba(props.theme?.colors?.textPrimary, 0.36);
      return hexToRgba(props.theme?.colors?.textPrimary, 0.36);
    }};
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme?.colors?.surfaceInverse10
      : props.theme?.colors?.white};
  opacity: ${(props) => (!props.inStock && !props.isSelected ? 0.5 : 1)};
  position: relative;

  &:hover {
    border-color: ${(props) => {
      if (props.isSelected) return 'transparent';
      if (!props.inStock) return '#0013255C';
      return '#000';
    }};
  }
`;

export const StockLabel = styled.div`
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme?.typography?.bodyXSmall};
  color: ${({ theme }) => theme?.colors?.white};
  padding: ${({ theme }) => `1px ${theme?.spacing?.spacing20} `};

  border-radius: 2px;
  white-space: nowrap;
`;

export const SoldOutLabel = styled(StockLabel)`
  background-color: ${({ theme }) =>
    hexToRgba(theme?.colors?.surfaceInverse10, 0.44)};
`;

export const FewLeftLabel = styled(StockLabel)`
  background-color: ${({ theme }) => theme?.colors?.warning};
`;

export const ShadeItem = styled.div<{
  isSelected?: boolean;
  inStock?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  max-width: 48px;
  min-height: 48px;
  max-height: 48px;
  padding: 0;
  border: 3px solid ${(props) => (props.isSelected ? '#fff' : 'transparent')};
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  box-shadow: ${(props) =>
    props.isSelected
      ? '0px 12px 32px -2px #11131414, 0px 4px 16px -2px #11131429'
      : 'none'};
  flex-shrink: 0;
  position: relative; // Added for tick positioning
  opacity: ${(props) => (!props.inStock ? 0.5 : 1)};
`;

export const OutOfStockLine = styled.div`
  position: absolute;
  top: 50%;
  left: -2px;
  right: -2px;
  height: 2px; // Increased thickness for better visibility
  background-color: ${({ theme }) => theme?.colors?.white}; // Changed to white
  transform: rotate(45deg); // Changed from -45deg to 45deg
  transform-origin: center;
`;

export const TickOverlay = styled.div<{ isSelected?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Tick}) no-repeat center center;
  background-size: 12px 9px; // Match SVG dimensions
`;

export const ShadeImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  object-fit: cover;
`;

export const Size = styled.span<{ isSelected?: boolean; inStock?: boolean }>`
  ${({ theme }) => theme?.typography?.bodySmall};
  font-weight: ${(props) =>
    props.isSelected
      ? props.theme?.typography?.subTitleSmall.fontWeight
      : props.theme?.typography?.bodySmall.fontWeight};
  white-space: nowrap;
  color: ${(props) => {
    if (props.isSelected) return props.theme?.colors?.snow100;
    if (!props.inStock)
      return hexToRgba(props.theme?.colors?.textPrimary, 0.36);
    return 'inherit';
  }};
`;

export const Price = styled.span<{ isSelected?: boolean; inStock?: boolean }>`
  ${({ theme }) => theme?.typography?.bodyXSmall};
  margin-top: ${({ theme }) => `${theme?.spacing?.spacing10} `};
  white-space: nowrap;
  color: ${({ theme, isSelected, inStock }) => {
    if (isSelected) return hexToRgba(theme?.colors?.textInversePrimary, 0.72);
    if (!inStock) return hexToRgba(theme?.colors?.textPrimary, 0.36);
    return hexToRgba(theme?.colors?.textPrimary, 0.36);
  }};
`;

export const VariantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 54px; // Height that accommodates MiniLabel + VariantItem
  justify-content: flex-end; // Aligns items to bottom
`;
