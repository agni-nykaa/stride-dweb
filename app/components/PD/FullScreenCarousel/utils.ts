import { SCROLL_DIRECTION } from './constants';

export const scrollThumbnailIntoView = (
  container: HTMLDivElement,
  element: HTMLImageElement,
  direction: SCROLL_DIRECTION,
) => {
  const containerRect = container?.getBoundingClientRect();
  const thumbnailRect = element?.getBoundingClientRect();

  if (direction === SCROLL_DIRECTION.RIGHT && thumbnailRect?.right > containerRect?.right) {
    const overflowRight = thumbnailRect.right - containerRect.right;
    container.scrollLeft += overflowRight + 16;
  } else if (direction === SCROLL_DIRECTION.LEFT && thumbnailRect.left < containerRect?.left) {
    const overflowLeft = containerRect.left - thumbnailRect.left;
    container.scrollLeft -= overflowLeft + 16;
  }
};
