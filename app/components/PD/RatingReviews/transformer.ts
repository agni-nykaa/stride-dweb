import { scaleImage } from '~/utils/imageUtil';

import {
  ImagesDataProps,
  ReviewData,
  ReviewImagesInfoProps,
  ReviewImagesProps,
} from './types';

export const transformReviewImagesResponse = (
  apiResponseData: ReviewImagesProps,
) => {
  if (!apiResponseData) {
    throw new Error('No data in apiResponseData');
  }
  if (typeof apiResponseData !== 'object' || Array.isArray(apiResponseData)) {
    throw new Error('"apiResponseData" should be an object');
  }
  const {
    total: totalImagesAvailable = 0,
    reviewImages: imageList = [],
    reviewData,
    pageKey,
  } = apiResponseData;
  const transformedImages: ImagesDataProps[] = [];
  const transformedImagesWithInfo: ReviewImagesInfoProps[] = [];
  const nextPageKey = pageKey || '';

  imageList.forEach((imageItem, index) => {
    const { reviewId, imageUrl } = imageItem;
    const reviewInfo = reviewData[reviewId];

    if (reviewInfo) {
      const {
        childId: variantId,
        title = '',
        description,
        name = '',
        createdOn,
        likeCount = 0,
        rating = 0,
        isBuyer = false,
        createdOnText = '', // FIXME: This is not coming from API
        proUser,
        label,
      } = reviewInfo;
      const imageInfo = {
        url: scaleImage({ url: imageUrl, width: 150, height: 150 }),
      };
      transformedImages.push({
        ...imageInfo,
        id: `${reviewId}-${index}${nextPageKey ? `-${nextPageKey}` : ''}`,
      });
      transformedImagesWithInfo.push({
        imageUrl: scaleImage({ url: imageUrl, width: 500 }),
        review: {
          variantId,
          title,
          description,
          name,
          createdOn,
          likeCount,
          rating,
          isBuyer,
          id: reviewId,
          isLikedByUser: false,
          profilePic: '',
          createdOnText,
          isProUser: proUser,
          label,
        },
      });
    }
  });

  return {
    totalImagesAvailable,
    images: transformedImages,
    imagesWithInfo: transformedImagesWithInfo,
    nextPageKey,
  };
};

export const getReviewImagesData = (review: ReviewData) => {
  const { images = [] } = review || {};
  const reviews = [];
  images.map((img) => {
    const reviewData = {
      review,
      imageUrl: scaleImage({ url: img }),
    };
    reviews.push(reviewData);
  });
  return reviews;
};
