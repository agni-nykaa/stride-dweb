import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MEDIA_TYPE } from '~/constants/mediaType';
import { MediaType } from '~/shared/Carousel/types';

export const FullScreenWrapper = styled.div<{ mediaType: MediaType }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ mediaType, theme }) =>
    mediaType === MEDIA_TYPE.VIDEO
      ? theme?.colors?.surfaceInverse10
      : theme?.colors?.surface};
  transition: background-color 0.3s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const closeButton = css`
  background: none;
  border: none;
  padding: 8px;
  margin-left: auto; // Push to right
`;

export const closeIcon = css`
  width: 16px;
  height: 16px;
`;

export const toggleLeft = css`
  display: flex;
  width: 4.0625rem;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const toggleRight = css`
  display: flex;
  width: 7.875rem;
  padding: 0.25rem 0.9375rem 0.25rem 4.5rem;
  justify-content: flex-end;
  align-items: center;
`;

export const thumbnailsWrapper = css`
  padding: 16px;
  overflow-x: auto;
  display: flex;
  gap: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

export const thumbnailContainer = css`
  border-radius: 0.4375rem;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 0.25rem;
`;

export const thumbnail = css`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 0.4375rem;
`;

export const activeThumbnailContainer = css`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #111314;
`;

export const ActionsWrapper = styled.div<{ mediaType: MediaType }>`
  padding: 16px;
  margin-top: auto;
  background: ${({ mediaType, theme }) =>
    mediaType === MEDIA_TYPE.VIDEO
      ? theme?.colors?.surfaceInverse10
      : theme?.colors?.surface};
`;
