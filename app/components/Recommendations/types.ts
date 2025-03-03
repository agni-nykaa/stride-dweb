export interface RecommendationRawData {
  name: string;
  brand_name: string;
  product_id: string;
  in_stock: boolean;
  is_lux: number;
  id: string;
  title: string;
  slug: string;
  parent_id: string;
  offer_count: number;
  dynamic_tags: string[];
  quantity: number;
  variant_type: string;
  option_count: number;
  mrp: number;
  price: number;
  discount: number;
  star_rating: number;
  star_rating_count: number;
  media: Image[];
  pro_flag: number;
  category_ids: string[];
  brand_ids: string[];
  type: string;
  show_wishlist_button: boolean;
  primary_categories: PrimaryCategories;
  backorders: boolean;
  sku?: string;
  contentLang?: {
    [key: string]: string;
  };
  gludo_stock?: boolean;
  rating?: number;
  final_price?: number;
  rating_count?: number;
  is_backorder?: boolean;
  tracking_metadata?: any; // because it can be object/string/any, it will be send by the backend
}

export interface PrimaryCategories {
  l1: {
    name: string;
    id: string;
  };
  l2?: {
    name: string;
    id: string;
  };
  l3?: {
    name: string;
    id: string;
  };
  l4?: {
    name: string;
    id: string;
  };
}

export interface Image {
  type: string;
  url: string;
}

export interface RecommendationObj {
  name: string;
  brandName: string;
  productId: string;
  inStock: boolean;
  id: string;
  title: string;
  slug: string;
  parentId: string;
  offersCount: number;
  dynamicTags: string[];
  quantity: number;
  variantType: string;
  variantCount: number;
  mrp: number;
  price: number;
  discount: number;
  rating: number;
  ratingCount: number;
  imageUrl: string;
  proFlag: number;
  childId: string;
  categoryIds: string[];
  brandIds: string[];
  type: string;
  onlyWishlistButton: boolean;
  primaryCategories: PrimaryCategories | {};
  isBackorder: boolean;
  sku?: string;
  contentLang: {
    [key: string]: string;
  };
  isLux: number;
  tracking_metadata: any;
}

export interface WidgetType {
  products: RecommendationRawData[];
  title: string;
  is_recently_viewed: boolean;
  show_view_all: boolean;
  design: string;
  widget_type?: string;
}

export interface WidgetType2 {
  products: RecommendationObj[];
  title: string;
  isRecentlyViewed: boolean;
  showViewAll: boolean;
  design: string;
  widgetType?: string;
}

export interface RecommendationsState {
  loading: boolean;
  isNotFound: boolean;
  isFetchingError: boolean;
  RecommendationsList: WidgetType[];
}

export interface Category {
  action_url: string;
  filter_data: string;
  id: string;
  images: string[];
  sort: string;
  subtitle: string;
  title: string;
}

export interface RecommendationUrlProps {
  slug: string;
  childId?: string;
  root: string;
  position?: number;
  scroll?: string;
  name?: string;
  totalMedia?: number;
}
