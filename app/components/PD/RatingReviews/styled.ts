import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Rating = styled.div`
  border-radius: 4px;
  background: linear-gradient(269deg, #08b559 0.72%, #3dbb95 99.4%);
  display: flex;
  width: 43px;
  height: 18px;
  padding: ${({ theme }) => theme?.spacing?.spacing20}
    ${({ theme }) => theme?.spacing?.spacing40};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => hexToRgba(theme?.colors?.surface, 0.92)};
  margin-left: ${({ theme }) => theme?.spacing?.spacing60};
  ${({ theme }) => theme?.typography?.labelSmall};
`;

export const PhotoContainer = styled.div`
  text-size-adjust: 100%;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  color: rgb(102, 102, 102);
  line-height: 24px;
  margin: 0px;
  box-sizing: border-box;
  padding: 12px 10px 9px;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PhotoThumbnail = styled.img`
  margin-right: 10px;
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

export const ReviewInfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 5px 10px;
  &.hide-block {
    display: none;
  }
`;

export const UserContainer = styled(FlexCenter)`
  margin: 5px;
  align-items: flex-end;
`;

export const UserInfo = styled.div`
  width: 50%;
`;

export const LikeInfoContainer = styled.div`
  width: 50%;
`;

export const RatingWrap = styled(FlexCenter)`
  background-color: ${({ theme }) => theme?.colors?.surface};
  padding: ${({ theme }) => theme?.spacing?.spacing60}
    ${({ theme }) => theme?.spacing?.spacing80};
  border-bottom: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
`;

export const Text = styled.div`
  margin-right: ${({ theme }) => theme?.spacing?.spacing40};
  & > span {
    ${({ theme }) => theme?.typography?.titleXLarge};
    color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  }
  & > strong {
    ${({ theme }) => theme?.typography?.titleXLarge};
    color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  }
`;

export const Count = styled.div`
  line-height: 16px;
  flex: 2 1 0%;

  & > strong {
    ${({ theme }) => theme?.typography?.subTitleMedium};
    display: block;
    margin-top: ${({ theme }) => theme?.spacing?.spacing20};
    padding-top: ${({ theme }) => theme?.spacing?.spacing10};
  }
  & > span {
    ${({ theme }) => theme?.typography?.bodySmall};
    color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  }
`;

export const RateButton = styled.button`
  box-sizing: border-box;
  margin: ${({ theme }) => theme?.spacing?.spacing0};
  ${({ theme }) => theme?.typography?.labelMedium};
  overflow: visible;
  appearance: button;
  background: none;
  border: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  border-radius: 4px;
  padding: ${({ theme }) => theme?.spacing?.spacing50}
    ${({ theme }) => theme?.spacing?.spacing80};
  color: '#000000';
  margin-top: ${({ theme }) => theme?.spacing?.spacing50};
  text-transform: capitalize;
`;

export const Container = styled.div`
  margin: 0px 0.5rem 0px 0px;
  display: inline-block;
  border: 1px solid rgba(111, 121, 129, 0.22);
  width: 90px;
  height: 90px;
  position: relative;
`;

export const ReadReviews = styled.div`
  cursor: pointer;
  margin: 0px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  padding: 1rem;
  display: block;
  color: black;
  text-transform: capitalize;
  text-align: left;
  align-items: center;
  display: flex;
  padding-left: 12px;
`;
export const RemainingItems = styled.span`
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
`;
