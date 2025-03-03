export interface Product {
  id: string;
  name?: string;
  price?: number;
}

export interface NotifyMeFormData {
  email: string;
  productId: string;
  productName: string;
  productPrice: number;
}

export interface NotifyMeResponse {
  success: boolean;
  data?: {
    message: string;
  };
}
