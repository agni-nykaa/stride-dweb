import styled from '@emotion/styled';
import ProductCard from '~/shared/ProductCard';
import InfiniteScroll from '~/shared/InfiniteScroll';
import ReviewCard from '../PD/RatingReviews/ReviewCard';
import { ACTION_ROUTES } from '~/actions';
import { useIsLoggedIn } from '~/hooks/useAuth';
import { redirectAuthPage } from '~/actions/navigate/goToAuthPage';
import { PAGE_SIZE } from '~/constants/Review/constants';
import { usePagination } from '~/hooks/usePagination';
import ProductActions from '../PD/ProductActions';
import Header from './Header';

interface ReviewData {
  pageNo: number;
  product: any;
  reviews: any[];
  policyInfo: any;
}
interface ReviewPageProps {
  reviewData: ReviewData;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.surface};
`;

const ReviewPage = ({ reviewData }: ReviewPageProps) => {
  const { product = {}, reviews } = reviewData || {};
  const { imageUrl, name, offerPrice, rating, reviewCount } = product || {};
  const isLoggedIn = useIsLoggedIn();

  const {
    data: reviewsData,
    isLoading,
    hasMore,
    loadMore,
  } = usePagination(
    ACTION_ROUTES.fetchReviewDetails,
    { productId: product?.productId },
    {
      initialPage: 1,
      pageSize: PAGE_SIZE,
      defaultData: reviews,
      enabled: true,
      onError: (error) => {
        console.error('Error fetching review details:', error);
      },
    },
  );

  const handleImageClick = (image: number) => {
    // Implement image click handler
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
    // Implement like click handler
  };

  return (
    <Wrapper>
      <Header />
      <ProductCard
        imageUrl={imageUrl}
        name={name}
        offerPrice={offerPrice}
        rating={rating}
        reviewCount={reviewCount}
      />
      <InfiniteScroll
        onLoadMore={loadMore}
        hasMore={hasMore}
        isLoading={isLoading}
      >
        {reviewsData.map((review: any) => (
          <ReviewCard
            key={review.id}
            review={review}
            product={product}
            handleImageClick={handleImageClick}
            handleLikeClick={handleLikeClick}
          />
        ))}
      </InfiniteScroll>
      <ProductActions
        product={product}
        view="review"
        showVariantButton={true}
      />
    </Wrapper>
  );
};

export default ReviewPage;
