import { SCALE } from './constants';
import {
  getAbsoluteSize,
  getImgQueryString,
  getRawUrl,
  isValidMimeType,
} from './helper';
import { ScaleImageParams, ScaleImageUrls } from './types';

export const scaleImage = ({
  url,
  width: cWidth,
  height: cHeight,
  trim,
  cropStrategy,
  isAbsoluteSize,
}: ScaleImageParams): ScaleImageUrls => {
  const newUrl = getRawUrl(url);

  if (!isValidMimeType(newUrl)) {
    return {
      src: newUrl,
      srcSet: '',
    };
  }

  const { width, height } = getAbsoluteSize(cWidth, cHeight, isAbsoluteSize);

  const src = `${newUrl}${getImgQueryString({
    cropStrategy,
    width,
    height,
    trim,
  })}`;

  const srcSet = `${src} 1x, ${newUrl}${getImgQueryString({
    cropStrategy,
    width,
    height,
    trim,
    scale: SCALE,
  })} ${SCALE}x`;

  return {
    src,
    srcSet,
  };
};
