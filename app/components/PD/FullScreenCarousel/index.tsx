/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { getImageData, getVideoData } from '~/shared/Carousel/utils';
import { MediaItem, ProductData } from '~/types/PD';
import Carousel from '~/shared/Carousel';
import { CAROUSEL_VIEW } from '~/shared/Carousel/constants';
import Header from './Header';
import { FullScreenWrapper, ActionsWrapper } from './styled';
import Thumbnails from './Thumbnails';
import ProductActions from '../ProductActions';
import { MEDIA_TYPE } from '~/constants/mediaType';

interface FullScreenCarouselProps {
  onClose: () => void;
  product: ProductData;
  media: MediaItem[];
  currentSlide: number;
  mediaType: string;
  setMediaType: (str: string) => void;
  handleFullScreen: (id: number, view: string) => void;
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({
  onClose,
  product,
  media,
  currentSlide,
  mediaType,
  setMediaType,
  handleFullScreen,
}) => {
  const [activeSlide, setActiveSlide] = useState(currentSlide);
  const imagesMedia = getImageData(media);
  const videoMedia = getVideoData(media);
  const productImages = imagesMedia?.map((image) => image?.url);
  const [currenMediaData, setCurrentSlideData] = useState(imagesMedia);
  const isImageMediaType = mediaType === MEDIA_TYPE.IMAGE;

  useEffect(() => {
    if (mediaType === MEDIA_TYPE.IMAGE) {
      setCurrentSlideData(imagesMedia);
    } else {
      setCurrentSlideData(videoMedia);
      setActiveSlide(0);
    }
  }, [mediaType]);

  return (
    <FullScreenWrapper mediaType={mediaType}>
      <Header
        onClose={onClose}
        mediaType={mediaType}
        onMediaTypeChange={setMediaType}
        showToggle={!!videoMedia?.length}
      />
      <Carousel
        view={CAROUSEL_VIEW.FULL_SCREEN}
        media={currenMediaData}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        handleFullScreen={handleFullScreen}
        product={product}
      />
      {isImageMediaType && (
        <Thumbnails
          images={productImages}
          currentSlide={activeSlide}
          onSlideChange={setActiveSlide}
        />
      )}

      <ActionsWrapper mediaType={mediaType}>
        <ProductActions
          product={product}
          view={mediaType}
        />
      </ActionsWrapper>
    </FullScreenWrapper>
  );
};

export default FullScreenCarousel;
