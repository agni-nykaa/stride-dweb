import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const ImageTileWrapper = styled.div`
  padding: ${({ theme }) => theme?.spacing?.spacing80};
  overflow-x: auto;
  display: flex;
  gap: ${({ theme }) => theme?.spacing?.spacing40};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

export const ImageTileContainer = styled.div<{ currentSlide: boolean }>`
  border-radius: 0.4375rem;
  background: ${({ currentSlide, theme }) =>
    currentSlide
      ? hexToRgba(theme?.colors?.surfaceInverse30, 0.2)
      : theme?.colors?.surface};
  ${({ currentSlide, theme }) =>
    currentSlide && `border: 1px solid ${theme?.colors?.surfaceInverse10}`}
`;

export const ImageTileStyle = styled.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 0.4375rem;
`;

export const ActiveTileContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #111314;
`;
