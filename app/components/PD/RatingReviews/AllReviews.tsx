import styled from '@emotion/styled';

import { READ_ALL_REVIEWS } from './constants';
import { ReadReviews } from './styled';
import ChevronRightSmall from '../../Recommendations/assets/ChevronRightSmall';

const Icon = styled.i`
  top: 2px;
  position: relative;
`;

interface AllReviewsProps {
  clickHandler: () => void;
}
const AllReviews = ({ clickHandler }: AllReviewsProps) => (
  <ReadReviews onClick={clickHandler}>
    <span>{READ_ALL_REVIEWS}</span> &nbsp;
    <Icon>
      <ChevronRightSmall
        fill="black"
        height="18"
        width="18"
      />
    </Icon>
  </ReadReviews>
);

export default AllReviews;
