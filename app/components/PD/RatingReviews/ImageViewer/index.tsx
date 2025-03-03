/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';

import {
  Body,
  CloseButton,
  Header,
  ModalContainer,
  Overlay,
  Title,
} from './styled';
import SwipeableContainer from '../../../../shared/SwipeableContainer';
import BackArrowIcon from '../../../Icons/BackArrow';
import { PHOTOS_FROM_CUSTOMERS_TEXT } from '../constants';
import Preview from './Preview';
import { ImageViewerProps } from '../types';

const ImageViewer = ({
  activeIndex,
  imagesWithInfo,
  onClose,
  product,
  hasMore,
  loadMore,
}: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const containerRef = useRef(null);

  const validateImage = (index: number, reviewsLength: number): boolean => {
    const imagesLength = reviewsLength || 0;
    let isValid = false;
    if (index > -1 && index < imagesLength) {
      isValid = true;
    }
    return isValid;
  };

  const handleSetCurrentIndex = (index: number) => {
    if (validateImage(index, imagesWithInfo.length)) {
      setCurrentIndex(index);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <CloseButton onClick={onClose}>
            <BackArrowIcon />
          </CloseButton>
          <Title>{PHOTOS_FROM_CUSTOMERS_TEXT}</Title>
        </Header>
        <Body ref={containerRef}>
          <SwipeableContainer
            currentIndex={currentIndex}
            setCurrentIndex={handleSetCurrentIndex}
            totalItems={imagesWithInfo.length}
            hasMore={hasMore}
            loadMore={loadMore}
          >
            {imagesWithInfo.map((slide, index) => (
              <Preview
                key={index}
                imageUrl={slide.imageUrl}
                review={slide.review}
                product={product}
              />
            ))}
          </SwipeableContainer>
        </Body>
      </ModalContainer>
    </Overlay>
  );
};

export default ImageViewer;
