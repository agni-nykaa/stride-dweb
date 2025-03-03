import { useEffect, useState } from 'react';
import ImageViewer from './ImageViewer';
import {
  PhotoContainer,
  PhotoThumbnail,
  Container,
  RemainingItems,
} from './styled';
import { ImagesDataProps, ReviewImagesInfoProps } from './types';
import { REVIEW_IMAGES_PAGE } from '~/constants/pageUrls';
import { MORE, PAGE_SIZE } from './constants';
import { getUpdatedUrl } from './helper';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';
import { queryStringFromParams } from '~/utils/api';
import { ACTION_ROUTES } from '~/actions';
import { PLATFORM } from '~/constants/platform';

interface ReviewPhotosProps {
  product: any;
}

const ReviewPhotos = (props: ReviewPhotosProps) => {
  const { product } = props;
  const [imagesData, setImagesData] = useState<{
    images: ImagesDataProps[];
    imagesWithInfo: ReviewImagesInfoProps[];
    totalImagesAvailable: number;
  }>({ images: [], imagesWithInfo: [], totalImagesAvailable: 0 });
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { fetcher } = useFetcherHandler({
    onSuccess: (data) => {
      setImagesData({
        images: data?.response?.images || [],
        imagesWithInfo: data?.response?.imagesWithInfo || [],
        totalImagesAvailable: data?.response?.totalImagesAvailable || 0,
      });
    },
    onError: () => {},
    successHandler: (data) => data.status || false,
  });

  useEffect(() => {
    const queryParams = {
      domain: PLATFORM.beauty,
      productId: product?.id,
      size: PAGE_SIZE,
      source: 'react',
    };
    const queryString = queryStringFromParams(queryParams);
    fetcher.load(ACTION_ROUTES.productReviewImages + queryString);
  }, [product.id]);

  const trimmedImageList = imagesData.images.slice(0, 9);
  const trackLength = trimmedImageList.length;
  const renderRemainingItems = (
    index: number,
    totalImagesAvailable: number,
  ) => {
    if (index === trackLength - 1 && totalImagesAvailable > trackLength) {
      return (
        <RemainingItems>
          + {totalImagesAvailable - trackLength}
          <br />
          {MORE}
        </RemainingItems>
      );
    }
    return null;
  };

  const handleImageClick = (index: number) => {
    if (
      index === trackLength - 1 &&
      imagesData.totalImagesAvailable > trackLength
    ) {
      handleShowMoreImages();
    } else {
      setShowImageModal(true);
      setActiveIndex(index);
    }
  };

  const handleShowMoreImages = () => {
    const { slug: parentProductPageSlug = '', parentId } = product;
    const [productSlug] = parentProductPageSlug.split('/');
    window.location.href = getUpdatedUrl({
      url: REVIEW_IMAGES_PAGE,
      slug: productSlug,
      parentId,
      childId: parentId,
    });
  };

  const loadMore = () => {
    //TODO will handle load more using pagination
  };
  return (
    <>
      <PhotoContainer>
        {trimmedImageList.map((image: ImagesDataProps, index: number) => (
          <Container
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <PhotoThumbnail
              src={image?.url.src}
              srcSet={image?.url.srcSet}
              alt={`Review ${index}`}
              data-loading="lazy"
            />
            {renderRemainingItems(index, imagesData.totalImagesAvailable)}
          </Container>
        ))}
      </PhotoContainer>
      {showImageModal && (
        <ImageViewer
          activeIndex={activeIndex}
          onClose={() => setShowImageModal(false)}
          imagesWithInfo={imagesData.imagesWithInfo}
          product={product}
          hasMore={imagesData.totalImagesAvailable > trackLength}
          loadMore={loadMore}
        />
      )}
    </>
  );
};

export default ReviewPhotos;
