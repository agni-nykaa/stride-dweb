import React from 'react';
import ProductCardCTA from '~/shared/ProductCardCTA';

import QuantityIcon from './assets/QuantityIcon';
import {
  ProductCardContainer,
  ProductRatingBottom,
  RatingText,
  ProductImage,
  BrandName,
  ProductName,
  Quantity,
  Price,
  ImageRatingContainer,
  ActionWrapper,
  ProductInfo,
} from './styled';
import FilledStar from '../Icons/FilledStar';
import ShadesIcon from './assets/ShadesIcon';
import { SHADE } from './constants';
import { useAuth } from '~/hooks/useAuth';
import { handleNavigationForModal } from '~/actions/navigate/redirect';
import { getVariantType } from './helper';

interface Product {
  name: string;
  imageUrl: string;
  rating: number;
  ratingCount: number;
  slug: string;
  brandName: string;
  packSize: string;
  variantType: string;
  id: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  getPdpUrl: (
    slug: string,
    position?: number,
    widgetType?: string,
    widgetName?: string,
  ) => string;
  position: number;
  widgetType: string;
  widgetName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  getPdpUrl,
  position,
  widgetName,
  widgetType,
}) => {
  const isShade = product?.variantType === SHADE;
  const { user } = useAuth() || {};
  const { formKey, wishlist } = user || {};
  const formatRatingCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const renderStars = ({ rating, ratingCount }) => (
    <>
      {rating ? (
        <FilledStar
          height={10}
          width={10}
        />
      ) : (
        <></>
      )}
      <RatingText>
        {rating ? rating?.toFixed(1) : ''}{' '}
        {ratingCount ? `(${formatRatingCount(ratingCount)})` : ''}
      </RatingText>
    </>
  );

  const handleClick = () => {
    const pdpUrl = getPdpUrl(product.slug, position, widgetType, widgetName);
    handleNavigationForModal(pdpUrl);
  };

  return (
    <ProductCardContainer onClick={handleClick}>
      <ImageRatingContainer>
        <ProductImage
          src={product?.imageUrl}
          alt={product?.name}
        />
        <ProductRatingBottom>{renderStars(product)}</ProductRatingBottom>
      </ImageRatingContainer>
      <ProductInfo>
        <BrandName>{product?.brandName}</BrandName>
        <ProductName>{product?.name}</ProductName>
        <Quantity>
          {isShade ? <ShadesIcon /> : <QuantityIcon />} {product?.packSize}
        </Quantity>
        <Price>{`₹${product?.price}`}</Price>
      </ProductInfo>
      <ActionWrapper onClick={(e) => e.stopPropagation()}>
        <ProductCardCTA
          productId={product?.id}
          userDetails={{
            wishlist: wishlist,
            formKey: formKey,
          }}
          variantType={getVariantType(product?.variantType)}
        />
      </ActionWrapper>
    </ProductCardContainer>
  );
};

export default ProductCard;
