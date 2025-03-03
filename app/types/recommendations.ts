export interface RawProduct {
  name: string;
  media: Array<{ url: string }>;
  rating: number;
  rating_count: number;
  slug: string;
  brand_name: string;
  pack_size: string;
  variant_type: string;
  id: string;
  final_price: number;
}

export interface ApiRecommendationResponse {
  status: boolean;
  response: {
    relatedProducts: Array<{
      title: string;
      products: RawProduct[];
      widget_type: string;
    }>;
  };
}

export interface TransformedProduct {
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

export interface TransformedRecommendation {
  title: string;
  products: TransformedProduct[];
  widgetType: string;
}
