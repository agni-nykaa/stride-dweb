import styled from '@emotion/styled'; // added import
import { hexToRgba } from '~/utils/colorUtils';
import Stars from '~/shared/Stars';
import { goToStandardReview } from '~/actions/navigate/goToStandardReview';

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
  product: any;
}

const Rating = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.spacing0} ${spacing.spacing80} ${spacing.spacing50} ${spacing.spacing80}`};
`;
const ReviewCount = styled.span`
  margin-left: ${({ theme }) => theme?.spacing?.spacing40};
  ${({ theme }) => theme?.typography?.subTitleMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
`;

const RatingText = styled.span`
  margin-left: ${({ theme }) => theme?.spacing?.spacing40};
  ${({ theme }) => theme?.typography?.titleXSmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export default function ProductRating({
  rating,
  reviewCount,
  product,
}: ProductRatingProps) {
  const formattedReviewCount = reviewCount?.toLocaleString();
  if (!rating) return null;
  const { childId, id, slug } = product || {};

  const handleAllReviewsClick = () => {
    const currentSlug = slug?.split('/')[0] || '';
    goToStandardReview(currentSlug, id, childId);
  };

  return (
    <Rating onClick={handleAllReviewsClick}>
      <Stars rating={rating} />
      {rating && <RatingText>{rating}/5</RatingText>}
      {reviewCount && reviewCount > 0 && (
        <ReviewCount>({formattedReviewCount})</ReviewCount>
      )}
    </Rating>
  );
}
