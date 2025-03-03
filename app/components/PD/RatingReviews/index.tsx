import { useState } from 'react';

import AllReviews from './AllReviews';
import AvgRatingInfo from './AvgRating';
import {
  VERIFIED_RATINGS_TEXT,
  RATING_REVIEWS_TITLE,
  RATING_SUFFIX,
  RATE_PRODUCT,
  REVIEW_TEXT,
  WRITE_A_REVIEW,
  RATE,
  MOST_USEFUL_REVIEW_TEXT,
} from './constants';
import ImageViewer from './ImageViewer';
import NoReview from './NoReview';
import ReviewCard from './ReviewCard';
import ReviewPhotos from './ReviewPhotos';
import { Rating } from './styled';
import { getReviewImagesData } from './transformer';
import Accordion from '../../../shared/Accordion';
import EmptyStar from '../../Icons/EmptyStar';
import { useIsLoggedIn } from '~/hooks/useAuth';
import { getAllReviewUrl, getWriteReviewPageUrl } from '~/utils/pageUrls';
import { redirectAuthPage } from '~/actions/navigate/goToAuthPage';
import { ReviewTitle } from './ReviewCard/styled';

function RatingReviews(props: any) {
  const { product, currSkuData } = props;
  const { rating, ratingCount, reviewCount, name, topReviews } = product || {};
  const { childId } = currSkuData || {};
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLoggedIn = useIsLoggedIn();
  const reviews = topReviews || [];
  const handleRateClick = () => {
    if (!isLoggedIn) {
      redirectAuthPage();
      return;
    }
    //TODO add any pending neccessary checks
    window.location.href = getWriteReviewPageUrl(product.id, childId);
  };

  const handleImageClick = (index: number) => {
    setShowImageModal(true);
    setActiveIndex(index);
  };

  const handleLikeClick = (
    reviewId: number,
    isLikedByUser: boolean,
    likeCount: number,
  ) => {
    if (!isLoggedIn) {
      redirectAuthPage();
      return;
    }
    //TODO will be implemented later
  };

  const handleAllReviewsClick = () => {
    const slug = product.slug?.split('/')[0] || '';
    window.location.href = getAllReviewUrl(slug, product.id, childId);
  };

  return (
    <>
      <Accordion
        icon={<EmptyStar />}
        keyValue="ratingAndReviews"
        subTitle={ratingCount ? `${ratingCount} ${VERIFIED_RATINGS_TEXT}` : ''}
        title={
          <>
            {RATING_REVIEWS_TITLE}{' '}
            <>{!!rating && <Rating>{`${rating}${RATING_SUFFIX}`}</Rating>}</>
          </>
        }
      >
        {!ratingCount && (
          <NoReview
            productName={name}
            handleRateClick={handleRateClick}
            text={RATE}
            buttonTitle={RATE_PRODUCT}
          />
        )}
        {!!ratingCount && (
          <>
            <AvgRatingInfo
              avgRating={rating}
              ratingCount={ratingCount}
              handleRateClick={handleRateClick}
            />
            <ReviewPhotos product={product} />

            {!reviews.length && (
              <NoReview
                productName={name}
                handleRateClick={handleRateClick}
                text={REVIEW_TEXT}
                buttonTitle={WRITE_A_REVIEW}
              />
            )}
            {reviews.length > 0 && (
              <>
                <ReviewTitle>{MOST_USEFUL_REVIEW_TEXT}</ReviewTitle>
                <ReviewCard
                  review={reviews[0]}
                  product={product}
                  handleImageClick={handleImageClick}
                  handleLikeClick={handleLikeClick}
                />
              </>
            )}
            {reviewCount && parseInt(reviewCount) > 1 && (
              <AllReviews clickHandler={handleAllReviewsClick} />
            )}
            {showImageModal && reviews[0] && product && (
              <ImageViewer
                activeIndex={activeIndex}
                onClose={() => setShowImageModal(false)}
                imagesWithInfo={getReviewImagesData(reviews[0])}
                product={product}
              />
            )}
          </>
        )}
      </Accordion>
    </>
  );
}

export default RatingReviews;
