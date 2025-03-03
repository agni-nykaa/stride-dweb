/** @jsxImportSource @emotion/react */
import React from 'react';

import { ImageTileWrapper, ImageTileContainer, ImageTileStyle } from './styled';
import { scaleImage } from '~/utils/imageUtil';

interface ImageTileViewProps {
  images: string[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  wrapperRef: React.RefObject<HTMLDivElement>;
  imageRefs: (element: HTMLImageElement | null, index: number) => void;
  width: number;
}

const ImageTile: React.FC<ImageTileViewProps> = ({
  images,
  currentSlide,
  onSlideChange,
  wrapperRef,
  imageRefs,
  width = 100,
}) => (
  <ImageTileWrapper ref={wrapperRef}>
    {images?.map((image, index) => {
      const { src, srcSet } = scaleImage({ url: image, width });
      return (
        <ImageTileContainer
          key={index}
          currentSlide={index === currentSlide}
          onClick={() => onSlideChange(index)}
        >
          <ImageTileStyle
            ref={(el) => imageRefs?.(el, index)}
            src={src}
            alt={`Tile ${index + 1}`}
            srcSet={srcSet}
          />
        </ImageTileContainer>
      );
    })}
  </ImageTileWrapper>
);

export default ImageTile;
