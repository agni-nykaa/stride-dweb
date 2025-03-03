import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';
import { MediaType } from '~/shared/Carousel/types';
import { MEDIA_TYPE } from '~/constants/mediaType';
import { Theme } from '@emotion/react';

export const Container = styled.div<{ view: string }>`
  position: sticky;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme?.spacing?.spacing80};
  background: white;
  display: flex;
  gap: 16px;
  align-items: center;

  ${({ view, theme }) =>
    view === MEDIA_TYPE.VIDEO &&
    `
      background-color: ${theme?.colors?.surfaceInverse10};
    `}
`;

export const WishlistButtonStyled = styled.button<{ view?: string }>`
  width: 50px;
  border-radius: 8px;
  border: 1px
    ${({ theme, view }) =>
      view === MEDIA_TYPE.VIDEO
        ? `solid ${theme?.colors?.surface}`
        : `solid ${hexToRgba(theme?.colors?.textPrimary, 0.16)}`};
  background: ${({ view, theme }) =>
    view === MEDIA_TYPE.VIDEO
      ? `${theme?.colors?.surfaceInverse10} !important`
      : `${theme?.colors?.surface}`};

  color: ${({ view, theme }) =>
    view === MEDIA_TYPE.VIDEO
      ? `${theme?.colors?.surface}`
      : `${theme?.colors?.surfaceInverse10}`};
  display: flex;
  padding: ${({ theme }) => theme?.spacing?.spacing60};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ view, theme }) =>
    view === MEDIA_TYPE.VIDEO &&
    `
      background-color: ${theme?.colors?.surfaceInverse10};
      color: ${theme?.colors?.surface} ;
    `}
`;
export const getButtonStyles = (view: string, theme: Theme) => ({
  width: '100%',
  background:
    view === MEDIA_TYPE.VIDEO
      ? theme?.colors?.surface
      : theme?.colors?.surfaceInverse10,
  color:
    view === MEDIA_TYPE.VIDEO
      ? theme?.colors?.surfaceInverse10
      : theme?.colors?.surface,
});
