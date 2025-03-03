/** @jsxImportSource @emotion/react */
import { scaleImage } from '~/utils/imageUtil';

import { ReviewImageWrapper, ReviewImage, Wrap } from './styled';

interface ReviewImagesProps {
  images: string[];
  handleImageClick: (index: number) => void;
}

export default function ReviewImages({
  images,
  handleImageClick,
}: ReviewImagesProps) {
  return (
    <Wrap>
      {images &&
        images.map((img, index) => {
          const { src, srcSet } = scaleImage({ url: img });
          return (
            <ReviewImageWrapper key={index}>
              <ReviewImage
                src={src}
                srcSet={srcSet}
                alt="Review"
                data-loading="lazy"
                onClick={() => handleImageClick(index)}
              />
            </ReviewImageWrapper>
          );
        })}
    </Wrap>
  );
}
