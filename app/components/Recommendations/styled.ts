import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const ProductCardContainer = styled.div`
  width: 156px;
  display: flex;
  flex-direction: column;
`;

export const ImageRatingContainer = styled.div`
  width: 156px;
  height: 208px;
  border-radius: 8px;
  border: 1px ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)}
    solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProductRatingBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme?.spacing?.spacing40};
  background-color: ${({ theme }) => theme?.colors?.surface};
  width: 100%;
  padding: ${({ theme }) => theme?.spacing?.spacing0}
    ${({ theme }) => theme?.spacing?.spacing40}
    ${({ theme }) => theme?.spacing?.spacing40}
    ${({ theme }) => theme?.spacing?.spacing40};
  min-height: 24px;
`;

export const RatingText = styled.span`
  margin-left: 2px;
  font-size: 10px;
  color: #333;
  font-weight: 500;
  line-height: 16px;
`;

export const ProductImage = styled.img`
  text-align: center;
  max-width: 140px;
  vertical-align: middle;
  height: auto;
  width: auto;
  padding: ${({ theme }) => theme?.spacing?.spacing80};
`;

export const BrandName = styled.span`
  ${({ theme }) => theme?.typography?.buttonMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export const ProductName = styled.span`
  ${({ theme }) => theme?.typography?.bodySmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.62)};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme?.spacing?.spacing20};
`;

export const Quantity = styled.span`
  ${({ theme }) => theme?.typography?.bodySmall};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.spacing20};
`;

export const Price = styled.div`
  ${({ theme }) => theme?.typography?.titleXSmall};
  margin-top: ${({ theme }) => theme?.spacing?.spacing20};
`;

export const ScrollableContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  overflow-y: scroll;
  padding: ${({ theme }) => theme?.spacing?.spacing0}
    ${({ theme }) => theme?.spacing?.spacing80}
    ${({ theme }) => theme?.spacing?.spacing120}
    ${({ theme }) => theme?.spacing?.spacing80};
  gap: ${({ theme }) => theme?.spacing?.spacing40};
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme?.spacing?.spacing60}
    ${({ theme }) => theme?.spacing?.spacing80};
`;

export const TitleText = styled.span`
  flex-shrink: 0;
  ${({ theme }) => theme?.typography?.titleSmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export const ViewAllButton = styled.div`
  height: 42px;
  background-color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme?.spacing?.spacing50}
    ${({ theme }) => theme?.spacing?.spacing60};
  justify-content: space-between;
`;

export const ViewAllText = styled.span`
  padding-left: ${({ theme }) => theme?.spacing?.spacing80};
  ${({ theme }) => theme?.typography?.buttonMedium};
  color: ${({ theme }) => theme?.colors?.surface};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 16px;
  position: relative;
  display: flex;
  top: 1px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const ProductsGrid = styled.div`
  gap: ${({ theme }) => theme?.spacing?.spacing80};
  padding: ${({ theme }) => theme?.spacing?.spacing80};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
`;

export const ProductSection = styled.div`
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #eaeaea;
  text-align: center;
`;

export const ActionWrapper = styled.div``;

export const ProductInfo = styled.div`
  margin: ${({ theme }) =>
    `${theme?.spacing?.spacing20} ${theme?.spacing?.spacing0}`};
`;
