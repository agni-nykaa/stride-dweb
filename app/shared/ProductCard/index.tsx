import React from 'react';
import {
  Container,
  Image,
  InfoContainer,
  Name,
  Price,
  ImageContainer,
} from './styled';
import ProductRating from './Review';
import { scaleImage } from '~/utils/imageUtil';

interface ProductData {
  imageUrl: string;
  name: string;
  offerPrice: number;
  rating: number;
  reviewCount: number;
}

function ProductCard(props: ProductData) {
  const { imageUrl, name, offerPrice, rating, reviewCount } = props;
  const { src, srcSet } = scaleImage({ url: imageUrl, width: 200 });
  return (
    <Container>
      <ImageContainer>
        <Image
          src={src}
          alt={name}
          srcSet={srcSet}
        />
      </ImageContainer>

      <InfoContainer>
        {name ? <Name>{name}</Name> : null}
        <ProductRating
          rating={rating}
          reviewCount={reviewCount}
          starHeight={10}
          starWidth={10}
        />
        {offerPrice ? <Price>₹{offerPrice}</Price> : null}
      </InfoContainer>
    </Container>
  );
}

export default ProductCard;
