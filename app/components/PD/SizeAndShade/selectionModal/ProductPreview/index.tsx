import React from 'react';
import { SHADES } from '~/components/PD/SizeAndShade/constants';
import {
  Wrapper,
  MainImage,
  RightContent,
  ProductName,
  ShadeCount,
  ImageList,
  ThumbnailImage,
} from './styled';
import { ProductPreviewProps } from '~/components/PD/SizeAndShade/types';

const ProductPreview: React.FC<ProductPreviewProps> = ({
  productTitle,
  variantsLength = 0,
  imageUrls,
  selectedImageIndex,
  onImageSelect,
  variantName,
}) => (
  <Wrapper>
    <MainImage
      src={imageUrls?.[selectedImageIndex ?? 0]}
      alt={variantName}
    />
    <RightContent>
      <ProductName>{productTitle}</ProductName>
      <ShadeCount>
        {variantsLength} {SHADES}
      </ShadeCount>
      <ImageList>
        {imageUrls?.map((url, index) => (
          <ThumbnailImage
            key={index}
            src={url}
            alt={`${variantName} - ${index + 1}`}
            onClick={() => onImageSelect(index)}
            isSelected={selectedImageIndex === index}
          />
        ))}
      </ImageList>
    </RightContent>
  </Wrapper>
);
export default ProductPreview;
