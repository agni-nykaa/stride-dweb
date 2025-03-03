import {
  TransformedProduct,
  ApiRecommendationResponse,
  TransformedRecommendation,
  RawProduct,
} from '~/types/recommendations';

const getImageUrl = (media) => {
  let imageUrl = '';
  if (media) {
    imageUrl = media?.[0]?.url || '';
  }
  return imageUrl;
};

const transformProduct = (product: RawProduct): TransformedProduct => {
  const {
    name,
    media,
    rating,
    rating_count,
    slug,
    brand_name,
    pack_size,
    variant_type,
    id,
    final_price,
  } = product || {};
  return {
    name: name,
    imageUrl: getImageUrl(media),
    rating: rating || 0,
    ratingCount: rating_count,
    slug: slug,
    brandName: brand_name || '',
    packSize: pack_size,
    variantType: variant_type,
    id: id,
    price: final_price,
  };
};

export const transformRecommendations = (
  relatedProducts: ApiRecommendationResponse[],
): TransformedRecommendation[] =>
  relatedProducts?.map((recommendation) => ({
    title: recommendation?.title,
    products: recommendation?.products?.map(transformProduct),
    widgetType: recommendation?.widget_type,
  }));
