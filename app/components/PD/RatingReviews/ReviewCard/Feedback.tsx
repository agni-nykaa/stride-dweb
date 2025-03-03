/** @jsxImportSource @emotion/react */
import ThumbsUp from '../assets/ThumbsUp';
import { HELPFUL, PEOPLE_FOUND_HELPFUL_TEXT } from '../constants';
import {
  HelpfulWrapper,
  FeedbackSection,
  HelpfulText,
  PeopleCount,
  PeopleCountSection,
} from './styled';

interface FeedbackProps {
  likeCount: number;
  handleLikeClick: (
    reviewId: number,
    isLikedByUser: boolean,
    likeCount: number,
  ) => void;
  reviewId: number;
  isLikedByUser: boolean;
}

export default function Feedback({
  likeCount,
  handleLikeClick,
  isLikedByUser,
  reviewId,
}: FeedbackProps) {
  return (
    <FeedbackSection>
      <HelpfulWrapper
        onClick={() => handleLikeClick(reviewId, isLikedByUser, likeCount)}
      >
        <i>
          <ThumbsUp color="black" />
        </i>{' '}
        &nbsp;<HelpfulText>{HELPFUL}</HelpfulText>
      </HelpfulWrapper>
      {!!likeCount && (
        <PeopleCountSection>
          <PeopleCount>{likeCount} </PeopleCount> &nbsp;
          <span>{PEOPLE_FOUND_HELPFUL_TEXT}</span>
        </PeopleCountSection>
      )}
    </FeedbackSection>
  );
}
