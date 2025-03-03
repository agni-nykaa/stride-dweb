/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import ProductName from '~/components/PD/ProductDescription/Name';
import Share from '~/components/PD/ProductDescription/Share';

interface ProductNameProps {
  name: string;
  brandName: string;
  productImage: string;
  highlights: string;
}

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing40} ${theme?.spacing?.spacing80}`};
  justify-content: space-between;
`;

export default function ProductDescription({
  name,
  brandName,
  productImage,
  highlights,
}: ProductNameProps) {
  return (
    <Wrapper>
      <ProductName
        name={name}
        brandName={brandName}
        highlights={highlights}
      />
      <Share
        name={name}
        productImage={productImage}
      />
    </Wrapper>
  );
}
