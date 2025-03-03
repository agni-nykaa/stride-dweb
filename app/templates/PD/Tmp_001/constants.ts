import Authenticity from '~/components/PD/Authenticity';
import BrandLogo from '~/components/PD/BrandLogo';
import DeliveryAccordion from '~/components/PD/Delivery';
import FooterBanner from '~/components/PD/FooterBanner';
import Gallery from '~/components/PD/Gallery';
import SoldBy from '~/components/PD/Manufacture';
import ProductPrice from '~/components/PD/Price';
import ProductActions from '~/components/PD/ProductActions';
import ProductDescription from '~/components/PD/ProductDescription';
import ProductDetailsAccordion from '~/components/PD/ProductDetails';
import ProductRating from '~/components/PD/Rating';
import RatingReviews from '~/components/PD/RatingReviews';
import SizeAndShade from '~/components/PD/SizeAndShade';
import Recommendations from '~/components/Recommendations';
import { getImageData } from '~/shared/Carousel/utils';
import { getSelectedMedia } from '~/utils/PD';

export const SectionsMap = {
  Images: {
    component: Gallery,
    getProps: (data, currentSkuData) => {
      const media = getSelectedMedia(data, currentSkuData);
      return {
        product: currentSkuData,
        media: media,
      };
    },
  },
  Name: {
    component: ProductDescription,
    getProps: (data, currentSkuData) => {
      const media = getSelectedMedia(data, currentSkuData);
      const imagesData = getImageData(media);

      return {
        brandName: currentSkuData?.brandName,
        name: currentSkuData?.productTitle,
        productImage: imagesData?.[0]?.url,
        highlights: currentSkuData?.brandCustomInfo?.subtitle,
      };
    },
  },
  Rating: {
    component: ProductRating,
    getProps: (data, currentSkuData) => ({
      rating: data?.rating,
      reviewCount: data?.reviewCount,
      product: currentSkuData,
    }),
  },
  Price: {
    component: ProductPrice,
    getProps: (_, currentSkuData) => ({
      price: currentSkuData?.finalPrice,
    }),
  },
  Shades: {
    component: SizeAndShade,
    getProps: (data) => ({
      variantType: data?.variantType,
      productType: data?.productType,
      variants: data?.variants,
      productTitle: data?.name,
    }),
  },
  Details: {
    component: ProductDetailsAccordion,
    getProps: (data, currentSkuData) => ({
      description: data?.description,
      ingredients: data?.ingredients,
      howToUse: data?.howToUse,
      currentSkuData,
    }),
  },
  Delivery: {
    component: DeliveryAccordion,
    getProps: (data, currentSkuData) => ({
      product: data,
      currSkuId: currentSkuData?.sku,
    }),
  },
  Review: {
    component: RatingReviews,
    getProps: (data, currentSkuData) => ({
      product: data,
      currSkuData: currentSkuData,
    }),
  },
  Recos: {
    component: Recommendations,
    getProps: (data) => ({
      product: data,
    }),
  },
  AddToBag: {
    component: ProductActions,
    getProps: (_, currentSkuData) => ({
      product: currentSkuData,
    }),
  },
  Authenticity: {
    component: Authenticity,
    getProps: (data, selectedProductData) => ({
      product: data,
      selectedProductData,
    }),
  },
  SoldBy: {
    component: SoldBy,
  },
  HeaderBanner: {
    component: BrandLogo,
    getProps: (data, __, metaData) => ({
      src: metaData?.brandStripUrl,
      alt: 'Logo',
      brandId: data?.brandId,
      brandName: data?.brandName,
    }),
  },
  FooterBanner: {
    component: FooterBanner,
    getProps: (data, _, metaData) => ({
      src: metaData?.footerBrandUrl,
      alt: 'Logo',
      brandId: data?.brandId,
      brandName: data?.brandName,
    }),
  },
};
