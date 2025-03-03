import { ImgHTMLAttributes } from 'react';

import { CROP_STRATEGY, IMAGE_SCALE } from './constants';

export interface ScaleImageParams {
  url: string;
  width: number;
  height?: number;
  /**
   * This is used to handle the aspect ratio against image container
   */
  cropStrategy?: keyof typeof CROP_STRATEGY;
  isAbsoluteSize?: boolean;
  trim?: boolean;
}

export interface QueryStringParams {
  cropStrategy?: keyof typeof CROP_STRATEGY;
  width?: number | null;
  height?: number;
  trim?: boolean;
  scale?: number;
}

export interface AbsoluteSize {
  width?: number | null;
  height?: number;
}

export interface ScaleImageUrls {
  src: string;
  srcSet: string;
}

export interface ImageProps extends ScaleImageParams {
  attributes: ImgHTMLAttributes<HTMLImageElement>;
}

export interface OptimizedScaleImgParams {
  url: string;
  width?: number;
  height?: number;
  cropStrategy?: keyof typeof CROP_STRATEGY;
  newImageUrlEnabled: boolean;
  requiredScaleSize?: IMAGE_SCALE;
}
