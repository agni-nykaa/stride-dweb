import { MEDIA_TYPE } from '~/constants/mediaType';
import { CAROUSEL_VIEW } from './constants';

export type CarouselViewType =
  (typeof CAROUSEL_VIEW)[keyof typeof CAROUSEL_VIEW];
export type MediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];
