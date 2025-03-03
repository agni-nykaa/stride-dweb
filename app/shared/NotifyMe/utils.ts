import type { NotifyMeFormData } from './types';
import { ACTION_ROUTES } from '../../actions';
import { API_METHODS } from '../../constants/api';

export const getNotifyMeFormData = ({
  email,
  productId,
  productName,
  productPrice,
}: NotifyMeFormData): FormData => {
  const formData = new FormData();

  formData.append('email', email);
  formData.append('productId', productId);
  if (productName) {
    formData.append('variantName', productName);
  }

  if (productPrice) {
    formData.append('offerPrice', productPrice.toString());
  }

  return formData;
};

export const submitNotifyMeAction = (fetcher: any, formData: FormData) => {
  fetcher.submit(formData, {
    method: API_METHODS.POST,
    action: ACTION_ROUTES.notifyMe,
    preventScrollReset: true,
  });
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
