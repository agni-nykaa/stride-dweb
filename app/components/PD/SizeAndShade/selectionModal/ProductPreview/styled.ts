import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  position: fixed;
  top: 56px;
  background: white;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px;
  max-width: 100vw;
`;

export const MainImage = styled.img`
  width: 102px;
  height: 102px;
  border-radius: 4px;
  object-fit: cover;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

export const ProductName = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme?.colors?.textPrimary};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  line-height: 20px;
`;

export const ShadeCount = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme?.colors?.textSecondary};
`;

export const ImageList = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  padding-bottom: 4px;
  width: 100%;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  img {
    width: 35px !important;
    height: 35px !important;
    min-width: 35px;
    min-height: 35px;
    max-width: 35px;
    max-height: 35px;
    flex: 0 0 auto;
  }
`;

export const ThumbnailImage = styled.img<{ isSelected?: boolean }>`
  width: 35px !important;
  height: 35px !important;
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  border-radius: 4px;
  object-fit: cover;
  border: ${({ isSelected, theme }) =>
    isSelected ? `1px solid ${theme?.colors?.textPrimary}` : 'none'};
  cursor: pointer;
  flex: 0 0 auto;
`;
