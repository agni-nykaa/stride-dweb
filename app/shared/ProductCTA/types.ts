export interface CartItem {
  productId: string;
  quantity: number;
}

export interface TrackingParam {
  site_navigation: string;
  site_sub_navigation: string;
  nykaa_store: string;
}

export interface CartParams {
  deviceType: string;
  domain: string;
  items: CartItem[];
  pro: boolean;
  trackingParam: TrackingParam;
  originSource: string;
  pincode: string;
}
