import React from 'react';

import {
  FeatureItem,
  FeatureImage,
  TitleText,
  DescriptionText,
  FeaturesContainer,
} from '../styled';
import { FeatureProps } from '../types';

const Feature: React.FC<FeatureProps> = ({
  iconUrl,
  title,
  text,
}: FeatureProps) => (
  <FeatureItem>
    <FeatureImage
      src={iconUrl}
      alt={title}
      loading="lazy"
    />
    <TitleText>{title}</TitleText>
    <DescriptionText>{text}</DescriptionText>
  </FeatureItem>
);

const Features = () => {
  const features = {
    brandsCount: {
      iconUrl: 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg',
      title: '1900+ Brands',
      text: '1.2 Lakh+ Products',
    },
    freeShip: {
      iconUrl:
        'https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg',
      title: 'Free Shipping',
      text: 'On Orders Above ₹',
    },
    genuineProduct: {
      iconUrl:
        'https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg',
      title: '100% Authentic',
      text: 'Products Sourced Directly',
    },
  }; // will get this from config
  const { brandsCount, freeShip, genuineProduct } = features || {};
  const orderValue = 500;
  return (
    <FeaturesContainer>
      {brandsCount && <Feature {...brandsCount} />}
      {freeShip && (
        <Feature
          {...freeShip}
          text={`${freeShip.text}${orderValue}`}
        />
      )}
      {genuineProduct && <Feature {...genuineProduct} />}
    </FeaturesContainer>
  );
};

export default Features;
