import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';
import { RATE_PRODUCT, RATE_SUB_TEXT, RATE_TEXT } from './constants';

const Wrapper = styled.div`
  ${({ theme }) => theme?.typography?.bodyMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  background-color: ${({ theme }) => theme?.colors?.surface};
  padding: ${({ theme }) => theme?.spacing?.spacing0}
    ${({ theme }) => theme?.spacing?.spacing80};
`;

const RatingButton = styled.button`
  background: none;
  border: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  border-radius: 4px;
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  ${({ theme }) => theme?.typography?.buttonSmall};
  color: ${({ theme }) => theme?.colors?.surfaceInverse};
  margin-top: ${({ theme }) => theme?.spacing?.spacing60};
  margin-bottom: ${({ theme }) => theme?.spacing?.spacing60};
  text-transform: capitalize;
  display: block;
  width: 100%;
`;

const ProductName = styled.strong`
  ${({ theme }) => theme?.typography?.subTitleMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

interface NoReviewProps {
  productName: string;
  handleRateClick: () => void;
  text: string;
  buttonTitle: string;
}

const NoReview = ({
  productName,
  handleRateClick,
  text,
  buttonTitle,
}: NoReviewProps) => (
  <Wrapper>
    <>
      {RATE_TEXT} {text} <ProductName>{productName}</ProductName>{' '}
      {RATE_SUB_TEXT}
    </>
    <RatingButton onClick={handleRateClick}>{buttonTitle}</RatingButton>
  </Wrapper>
);

export default NoReview;
