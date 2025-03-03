import {
  OVERALL_RATING_TEXT,
  VERIFIED_RATINGS_TEXT,
  RATE_BUTTON_TEXT,
  RATING_FIVE,
} from './constants';
import { RatingWrap, Text, Count, RateButton } from './styled';

interface AvgRatingProps {
  avgRating: number;
  ratingCount: number;
  handleRateClick: () => void;
}
const AvgRatingInfo = ({
  avgRating,
  ratingCount,
  handleRateClick,
}: AvgRatingProps) => (
  <RatingWrap>
    <Text>
      <strong>{avgRating}</strong>
      <span>{RATING_FIVE}</span>
    </Text>
    <Count>
      <strong>{OVERALL_RATING_TEXT}</strong>
      <span>
        {ratingCount} {VERIFIED_RATINGS_TEXT}
      </span>
    </Count>
    <RateButton onClick={handleRateClick}>{RATE_BUTTON_TEXT}</RateButton>
  </RatingWrap>
  );

export default AvgRatingInfo;
