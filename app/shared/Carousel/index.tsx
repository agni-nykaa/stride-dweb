/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from 'react';
import { CAROUSEL_VIEW, MIN_SWIPE_DISTANCE, VIEW_SIMILAR } from './constants';
import Dots from './Dots';
import Slides from './Slides';
import {
  CarouselStyle,
  CarouselCover,
  SlideContainer,
  SlidesStyle,
  DotsWrapper,
  ViewSimilarWrapper,
  ViewSimilarText,
} from './styled';
import { CarouselViewType } from './types';
import { getVideoIndexes, onSwipeLeft, onSwipeRight } from './utils';
import { MediaItem, ProductData } from '~/types/PD';
import { isValidArrayLength } from '~/utils/validations';
import { useProductContext } from '~/hooks/PD/useProduct';

interface CarouselProps {
  view?: CarouselViewType;
  onSlideChange?: (index: number) => void;
  handleFullScreen?: (id: string, view: string) => void;
  media: MediaItem[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  product: ProductData;
}

const Carousel: React.FC<CarouselProps> = ({
  view = CAROUSEL_VIEW.DEFAULT,
  onSlideChange,
  handleFullScreen,
  media,
  activeSlide,
  setActiveSlide,
  product,
}) => {
  const slidesLength = media?.length;
  const startX = useRef(0);
  const endX = useRef(0);
  const isSwiping = useRef(false);
  const { recommendationsRef } = useProductContext();
  if (!isValidArrayLength(media)) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e?.touches[0]?.clientX;
    endX.current = e?.touches[0]?.clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e?.touches[0]?.clientX;
    isSwiping.current = true;
  };

  const videoIndexes = getVideoIndexes(media);

  const handleTouchEnd = () => {
    if (isSwiping?.current) {
      const swipeDistance = startX?.current - endX?.current;

      if (Math.abs(swipeDistance) >= MIN_SWIPE_DISTANCE) {
        if (swipeDistance > 0) {
          handleSlideChange(onSwipeLeft(activeSlide, slidesLength));
        } else {
          handleSlideChange(onSwipeRight(activeSlide, slidesLength));
        }
      }
    }
    startX.current = 0;
    endX.current = 0;
    isSwiping.current = false;
  };

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    onSlideChange?.(index);
  };

  const handleDotClick = (index: number) => {
    handleSlideChange(index);
  };

  const handleViewSimilar = (e: React.MouseEvent) => {
    e.stopPropagation();
    recommendationsRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <CarouselCover>
      <CarouselStyle
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <SlideContainer>
          <SlidesStyle activeSlide={activeSlide}>
            <Slides
              media={media}
              handleFullScreen={handleFullScreen}
              view={view}
              activeSlide={activeSlide}
              product={product}
            />
          </SlidesStyle>
        </SlideContainer>
      </CarouselStyle>
      {view === CAROUSEL_VIEW.DEFAULT && (
        <DotsWrapper onClick={(e) => e.stopPropagation()}>
          <ViewSimilarWrapper onClick={handleViewSimilar}>
            <ViewSimilarText>{VIEW_SIMILAR}</ViewSimilarText>
          </ViewSimilarWrapper>
          <Dots
            count={slidesLength}
            activeIndex={activeSlide}
            onClick={handleDotClick}
            videoIndexes={videoIndexes}
          />
        </DotsWrapper>
      )}
    </CarouselCover>
  );
};

export default Carousel;
