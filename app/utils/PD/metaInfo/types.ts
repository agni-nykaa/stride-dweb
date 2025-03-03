export interface ProductMetaParams {
  product: {
    name?: string;
    description?: string;
    imageUrl?: string;
    offerPrice?: number;
    metaKeywords?: string;
    isSearchable?: boolean;
    slug?: string;
  };
  config: {
    configs?: {
      meta?: {
        productPage?: {
          title?: string;
          description?: string;
        };
      };
    };
  };
  location: {
    pathname: string;
  };
}
