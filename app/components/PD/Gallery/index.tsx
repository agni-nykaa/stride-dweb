/** @jsxImportSource @emotion/react */
import { useNavigate } from '@remix-run/react';
import React, { useRef, useState } from 'react';

import FullScreenCarousel from '~/components/PD/FullScreenCarousel';
import { MEDIA_TYPE } from '~/constants/mediaType';
import Carousel from '~/shared/Carousel';
import { CAROUSEL_VIEW } from '~/shared/Carousel/constants';
import { MediaType } from '~/shared/Carousel/types';
import { getImageData, getVideoData } from '~/shared/Carousel/utils';
import Modal from '~/shared/Modal';
import { MediaItem } from '~/types/PD';
import { isValidArrayLength } from '~/utils/validations';

interface GalleryProps {
  product: any;
  media: MediaItem[];
}

const Gallery: React.FC<GalleryProps> = ({ product, media }) => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fullScreenActiveSlide, setFullScreenActiveSlide] = useState(0);
  const [mediaType, setMediaType] = useState<MediaType>(MEDIA_TYPE.IMAGE);
  const carouselSelectedId = useRef<string>(null);
  const navigate = useNavigate();
  if (!isValidArrayLength(media)) return null;

  const getMediaIndex = (id: string, mediaList: MediaItem[]) =>
    mediaList?.findIndex((item) => item?.id === id);

  const handleFullScreen = (id: string, view: string, type?: string) => {
    if (view === CAROUSEL_VIEW.FULL_SCREEN) {
      setShowFullScreen(false);
      return;
    }

    carouselSelectedId.current = id;
    const isVideo = type === MEDIA_TYPE.VIDEO;
    const filteredMedia = isVideo ? getVideoData(media) : getImageData(media);
    setMediaType(isVideo ? MEDIA_TYPE.VIDEO : MEDIA_TYPE.IMAGE);
    setFullScreenActiveSlide(getMediaIndex(id, filteredMedia));
    setShowFullScreen(true);
  };

  return (
    <>
      <Carousel
        handleFullScreen={handleFullScreen}
        media={media}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        product={product}
      />
      <Modal
        showHeader={false}
        onBack={() => {
          setShowFullScreen(false);
        }}
        isOpen={showFullScreen}
      >
        <FullScreenCarousel
          onClose={() => {
            navigate(-1);
            setShowFullScreen(false);
          }}
          product={product}
          media={media}
          currentSlide={fullScreenActiveSlide}
          setActiveSlide={setFullScreenActiveSlide}
          handleFullScreen={handleFullScreen}
          mediaType={mediaType}
          setMediaType={setMediaType}
        />
      </Modal>
    </>
  );
};

export default Gallery;
