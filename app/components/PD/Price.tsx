/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

interface ProductPriceProps {
  price: number;
}

const Price = styled.div`
  ${({ theme }) => theme?.typography?.titleMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  display: flex;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.spacing0} ${spacing.spacing80}`};
`;
const DashedLineContainer = styled.div`
  padding: ${({ theme: { spacing } }) =>
    `${spacing.spacing60} ${spacing.spacing80}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${({ theme: { spacing } }) => `${spacing.spacing50}`};
`;

const DashedLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-image: repeating-linear-gradient(
    to right,
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.36)},
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.36)} 5px,
    transparent 4px,
    transparent 9px
  );
`;

export default function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div>
      <Price>{`₹${price}`}</Price>
      <DashedLineContainer>
        <DashedLine />
      </DashedLineContainer>
    </div>
  );
}
