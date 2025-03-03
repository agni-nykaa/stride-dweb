interface CustomerData {
  id: string;
  loginEmail: string;
  loginUsername: string;
  gfirstname: string;
  glastname: string;
  group_id: string;
  nykaa_pro: boolean;
  is_loyal: boolean;
}

export interface AuthData {
  form_key: string;
  cartItemsTotal: number;
  customerData: CustomerData;
}

export interface TransformedAuthData {
  cartItemsCount: number;
  email: string;
  firstName: string;
  formKey: string;
  groupId: string;
  id: string;
  isLoyal: boolean;
  isPro: boolean;
  lastName: string;
  userName: string;
}
