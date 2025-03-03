export interface UrlHandlerParams {
  currentSku: ProductVariant | null;
  parentId: string;
  pathname: string;
  search: string;
}

export interface ProductData {
  brandAuth: {
    certificate: string;
    icon: string;
    text: string;
  };
  brandName: string;
  defaultPid: string;
  description: string;
  discount: number;
  finalPrice: number;
  howToUse: string;
  id: string;
  inStock: boolean;
  ingredients: string;
  manufacture: ManufactureInfo[];
  media: MediaItem[];
  messageOnReturn: string;
  name: string;
  parentId: string;
  price: number;
  productTitle: string;
  productType: string;
  rating: number;
  ratingCount: number;
  returnAvailable: boolean;
  sellerName: string;
  showBrandAuthReturnStrip: boolean;
  sku: string;
  slug: string;
  topReviews: any;
  variantType: string;
  variants: ProductVariant[];
  selectedVariantId: string;
}

export interface ProductVariant {
  brandName: string;
  childId: string;
  discount: number;
  inStock: boolean;
  media: MediaItem[];
  mrp: number;
  name: string;
  isMini: boolean;
  offerPrice: number;
  price: number;
  packSize: string;
  shadeImage?: string;
  quantity: number;
  variantName: string;
  sku: string;
  productType: string;
  expiry: string;
  onlyWishlistButton: boolean;
  imageUrl: string;
  manufacture: ManufactureInfo[];
  isBackorder: boolean;
  productTitle: string;
  slug: string;
  rating: number;
  ratingCount: number;
  reviewCount: string;
  returnAvailable: boolean;
  messageOnReturn: string;
  finalPrice: number;
  id: string;
  carousel: MediaItem[];
}

export interface MediaItem {
  url: string;
  mediaType?: string;
  title?: string;
  type?: string;
  id: string;
  thumbnailUrl?: string;
  aspectRatio?: number;
  duration?: number;
  widgetType?: string;
}

export interface ManufactureInfo {
  originOfCountryName: string;
  manufacturerName: string;
  manufacturerAddress: string;
  packerName: string;
  packerAddress: string;
  importerName: string;
  importerAddress: string;
  manufacturerNameLabel: string;
  manufacturerAddressLabel: string;
  packerNameLabel: string;
  packerAddressLabel: string;
  importerNameLabel: string;
  importerAddressLabel: string;
  countryOfOriginLabel: string;
}
