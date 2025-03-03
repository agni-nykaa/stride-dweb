/** @jsxImportSource @emotion/react */
import React, { useRef, useEffect } from 'react';
import ImageTile from '~/shared/ImageTile';
import { isValidArrayLength } from '~/utils/validations';

import { THUMBNAIL_IMAGE_WIDTH, SCROLL_DIRECTION } from '../constants';
import { scrollThumbnailIntoView } from '../utils';

interface ImageTileProps {
  images: string[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const Thumbnails: React.FC<ImageTileProps> = (props) => {
  const { images, currentSlide } = props || {};
  const wrapperRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);
  const prevSlide = useRef<number>(0);
  const isInitialLoad = useRef(true);

  if (!isValidArrayLength(images)) return null;

  const setImageRef = (element: HTMLImageElement | null, index: number) => {
    if (thumbnailRefs?.current) thumbnailRefs.current[index] = element;
  };

  useEffect(() => {
    if (thumbnailRefs?.current)
      thumbnailRefs.current = images?.map(
        (_, i) => thumbnailRefs?.current[i] ?? null,
      );
  }, [images]);

  useEffect(() => {
    if (isInitialLoad.current && wrapperRef?.current && thumbnailRefs?.current?.[currentSlide]) {
      const container = wrapperRef.current;
      const currentThumbnail = thumbnailRefs.current[currentSlide];

      scrollThumbnailIntoView(container, currentThumbnail, SCROLL_DIRECTION.RIGHT);
      isInitialLoad.current = false;
    }
  }, [currentSlide, thumbnailRefs.current]);

  useEffect(() => {
    if (!wrapperRef?.current || !thumbnailRefs?.current?.[currentSlide]) return;

    const container = wrapperRef?.current;
    const currentThumbnail = thumbnailRefs?.current?.[currentSlide];

    if (!currentThumbnail) return;

    if (typeof prevSlide?.current === 'number') {
      const direction =
      currentSlide > prevSlide.current
          ? SCROLL_DIRECTION.RIGHT
          : SCROLL_DIRECTION.LEFT;
      scrollThumbnailIntoView(container, currentThumbnail, direction);
    }

    prevSlide.current = currentSlide;
  }, [currentSlide]);

  return (
    <ImageTile
      {...props}
      wrapperRef={wrapperRef}
      imageRefs={setImageRef}
      width={THUMBNAIL_IMAGE_WIDTH}
    />
  );
};

export default Thumbnails;
