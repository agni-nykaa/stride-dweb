import { MEDIA_FORMAT } from '../constants';
import { MediaItem } from '~/types/PD';

export const validateSlide = (index: number, slidesLength: number): boolean => {
  let isValid = false;
  if (index > -1 && index < slidesLength) {
    isValid = true;
  }
  return isValid;
};

export const onSwipeRight = (
  activeSlide: number,
  slidesLength: number,
): number => {
  const nextSlide = activeSlide - 1;
  if (validateSlide(nextSlide, slidesLength)) {
    return nextSlide;
  }
  return activeSlide;
};

export const onSwipeLeft = (
  activeSlide: number,
  slidesLength: number,
): number => {
  let nextSlide = activeSlide;
  if (validateSlide(nextSlide + 1, slidesLength)) {
    nextSlide = activeSlide + 1;
  }
  return nextSlide;
};

export const getImageData = (data: MediaItem[]): MediaItem[] =>
  data.filter((item) => item.mediaType === MEDIA_FORMAT.IMAGE);

export const getVideoData = (data: MediaItem[]) => data.filter((item) => item.mediaType === MEDIA_FORMAT.VIDEO || item.type === MEDIA_FORMAT.YOUTUBE_VIDEO);

export const getVideoIndexes = (media: MediaItem[]): number[] => media
    ?.map((item, index) => ((item.mediaType === MEDIA_FORMAT.VIDEO || item.mediaType === MEDIA_FORMAT.YOUTUBE_VIDEO) ? index : -1))
    ?.filter((index) => index !== -1);

export const isCurrentMediaVideo = (media: MediaItem) => media.mediaType === MEDIA_FORMAT.VIDEO || media.mediaType === MEDIA_FORMAT.YOUTUBE_VIDEO;
