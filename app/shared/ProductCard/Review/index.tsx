import styled from '@emotion/styled';
import React from 'react';
import Stars from '~/shared/Stars';

const Count = styled.span`
  margin: ${({ theme: { spacing } }) =>
    `${spacing.spacing20} ${spacing.spacing0} ${spacing.spacing0} ${spacing.spacing10}`};
  ${({ theme }) => theme?.typography?.bodyXSmall}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

function Review(props) {
  const { rating, reviewCount, starHeight, starWidth } = props;
  const formattedReviewCount = reviewCount?.toLocaleString();
  const reviewCountExist = formattedReviewCount && formattedReviewCount != '0';
  return (
    <Wrapper>
      <Stars
        rating={rating}
        height={starHeight}
        width={starWidth}
      />
      {reviewCountExist ? <Count>{formattedReviewCount}</Count> : null}
    </Wrapper>
  );
}

export default Review;
