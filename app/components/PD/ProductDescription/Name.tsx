import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';
import Highlight from '~/components/PD/ProductDescription/Highlights';

interface ProductNameProps {
  name: string;
  brandName: string;
  highlights: string;
}
const Name = styled.div`
  ${({ theme }) => theme?.typography?.bodyLarge};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 0;
`;
const Brand = styled.div`
  display: -webkit-box;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  ${({ theme }) => theme?.typography?.titleXSmall};
  margin-bottom: ${({ theme }) => theme?.spacing?.spacing20};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Root = styled.div`
  gap: ${({ theme }) => `${theme?.spacing?.spacing20}`};
  text-transform: uppercase;
`;

export default function ProductName({
  name,
  brandName,
  highlights,
}: ProductNameProps) {
  return (
    <Root>
      <Brand>{brandName}</Brand>
      <Name>{name}</Name>
      <Highlight data={highlights} />
    </Root>
  );
}
