import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const VariantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 54px;
  justify-content: flex-end;
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
  border: ${({ isSelected, theme }) =>
    isSelected
      ? `1px solid ${theme?.colors?.surfaceInverse10}`
      : `1px solid ${hexToRgba(theme?.colors?.textPrimary, 0.36)}`};
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  background-color: ${(props) =>
    props.isSelected
      ? props.inStock
        ? props.theme?.colors?.surfaceInverse10
        : props.theme?.colors?.surface20
      : props.theme?.colors?.white};
  opacity: ${(props) => (!props.inStock && !props.isSelected ? 0.5 : 1)};
  position: relative;
`;

export const Size = styled.span<{ isSelected?: boolean; inStock?: boolean }>`
  ${({ theme, isSelected }) =>
    isSelected
      ? theme?.typography?.subTitleSmall
      : theme?.typography?.bodySmall};
  white-space: nowrap;
  color: ${(props) => {
    if (props.isSelected) {
      return props.inStock
        ? props.theme?.colors?.surface
        : hexToRgba(props.theme?.colors?.textPrimary, 0.92);
    }
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
    if (isSelected) {
      return inStock
        ? hexToRgba(theme?.colors?.textInversePrimary, 0.72)
        : hexToRgba(theme?.colors?.textPrimary, 0.64);
    }
    if (!inStock) return hexToRgba(theme?.colors?.textPrimary, 0.36);
    return hexToRgba(theme?.colors?.textPrimary, 0.64);
  }};
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
