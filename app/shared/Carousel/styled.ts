import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { hexToRgba } from '~/utils/colorUtils';

export const CarouselStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CarouselCover = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
  justify-content: center;
  align-items: center;
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center; /* Center vertically */
`;

export const SlidesStyle = styled.div<{ activeSlide: number }>`
  display: flex;
  transform: translateX(-${(props) => props.activeSlide * 100}%);
  transition: transform 0.3s ease;
  width: 100%;
`;

export const DotsWrapper = styled.div`
  padding: ${({ theme }) => theme?.spacing?.spacing80};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewSimilarWrapper = styled.div`
  position: absolute;
  left: 10px;
  bottom: 0px;
  display: flex;
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  background: ${({ theme }) => theme?.colors?.surface};
`;

export const ViewSimilarText = styled.span`
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  text-align: center;
  ${({ theme }) => theme?.typography?.buttonSmall};
  font-style: normal;
`;

export const carouselActionsWrapper = css`
  padding: 14px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
