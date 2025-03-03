import styled from '@emotion/styled';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 16px;
  padding: 0 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  min-width: 0;
`;

export const ImageWrapper = styled.div<{ isSelected?: boolean }>`
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: visible;
  ${({ isSelected }) =>
    isSelected &&
    `
    border: 3px solid #fff;
    box-shadow: 0px 12px 32px -2px #11131414, 0px 4px 16px -2px #1113;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

export const Name = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
`;

export const QuantityText = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #faac01;
`;

export const SoldOutText = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #e73e30;
`;
