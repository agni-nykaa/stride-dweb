export const ToggleOptions = {
  IMAGES: 'Images',
  VIDEO: 'Video',
} as const;

export enum SCROLL_DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}

export const THUMBNAIL_CONSTANTS = {
  SCROLL_BEHAVIOR: 'smooth',
  SCROLL_PADDING: 20,
  SCROLL_BLOCK: 'nearest',
  SCROLL_INLINE: {
    RIGHT: 'end',
    LEFT: 'start',
  },
} as const;

export const THUMBNAIL_IMAGE_WIDTH = 200;
