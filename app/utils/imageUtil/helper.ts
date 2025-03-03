import {
  CROP_STRATEGY,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  FORMAT,
  GIF,
  MAX_WIDTH,
  PAD_RESIZE,
} from './constants';
import { AbsoluteSize, QueryStringParams } from './types';

export const isValidString = (str: string): boolean =>
  typeof str === 'string' && !!str.length;

export const getRawUrl = (url: string): string => {
  if (!isValidString(url)) return '';
  const noQueryUrl = url.split('?')[0];
  return noQueryUrl?.replace(FORMAT, '');
};

export const getAbsoluteSize = (
  cWidth: number,
  cHeight?: number,
  isAbsoluteSize?: boolean,
): AbsoluteSize => {
  if (isAbsoluteSize) {
    return {
      width: cWidth,
      height: cHeight,
    };
  }
  if (!cWidth) {
    return {
      width: null,
      height: cHeight,
    };
  }
  let size: number;
  switch (true) {
    case cWidth <= 50:
      size = 50;
      break;
    case cWidth <= 150:
      size = 150;
      break;
    case cWidth <= 200:
      size = 200;
      break;
    case cWidth <= 300:
      size = 300;
      break;
    case cWidth <= 500:
      size = 500;
      break;
    case cWidth <= 600:
      size = 600;
      break;
    default:
      size = cWidth <= MAX_WIDTH ? cWidth : MAX_WIDTH;
  }
  return {
    width: size,
    height: cHeight && size,
  };
};

export const isValidMimeType = (url: string): boolean => {
  if (!isValidString(url)) {
    return false;
  }
  const splittedUrl = url.split('.');
  const format = splittedUrl[splittedUrl.length - 1]?.toLowerCase();
  return !(format === GIF);
};

export const getCroppingStrategy = (cropStrategy: string): string => {
  switch (cropStrategy) {
    case CROP_STRATEGY.padResize:
      return PAD_RESIZE;
    default:
      return '';
  }
};

export const getImgQueryString = ({
  cropStrategy,
  width,
  height,
  trim,
  scale = 1,
}: QueryStringParams): string => {
  let query = '?tr=';
  let separator = '';
  if (cropStrategy) {
    query += getCroppingStrategy(cropStrategy);
    separator = ',';
  }
  if (width) {
    query += `${separator}w-${width * scale}`;
    separator = ',';
  }
  if (height) {
    query += `${separator}h-${height * scale}`;
    separator = ',';
  }
  // fallback height and width if not available (500*500)
  if (!width && !height) {
    query += `${separator}w-${DEFAULT_WIDTH * scale},h-${
      DEFAULT_HEIGHT * scale
    }`;
    separator = ',';
  }
  if (trim) {
    query += `${separator}t-${trim}`;
  }

  return query;
};
