import styled from '@emotion/styled'; // added import

import StarFilled from '~/components/Icons/FilledStar';
import StarHalfFilled from '~/components/Icons/HalfFilledStar';
import { hexToRgba } from '~/utils/colorUtils';
import EmptyStar from '~/components/Icons/EmptyStar';
import { MAX_RATING } from '~/constants/PD';

interface StarsRatingProps {
  rating: number;
  height?: number;
  width?: number;
}

const Star = styled.span`
  svg path {
    fill: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  }
`;

export default function Stars({
  rating,
  height = 24,
  width = 24,
}: StarsRatingProps) {
  const fullStars = Math?.floor(rating);
  const remainingStar = MAX_RATING - fullStars;
  const halfStar = rating > fullStars;
  if (!rating) return null;

  return (
    <>
      {[...Array(fullStars)].map(() => (
        <Star>
          <StarFilled
            width={width}
            height={height}
          />
        </Star>
      ))}
      {halfStar && (
        <Star>
          <StarHalfFilled
            width={width}
            height={height}
          />
        </Star>
      )}
      {[...Array(remainingStar - (halfStar ? 1 : 0))].map(() => (
        <Star>
          <EmptyStar
            width={width}
            height={height}
          />
        </Star>
      ))}
    </>
  );
}
