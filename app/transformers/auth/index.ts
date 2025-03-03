import { AuthData, TransformedAuthData } from '~/types/auth';

export const transformAuthData = (authData: AuthData): TransformedAuthData => {
  const {
    form_key: formKey,
    cartItemsTotal,
    customerData: {
      id,
      loginEmail,
      loginUsername,
      gfirstname: gFirstName,
      glastname: gLastName,
      group_id: groupId,
      nykaa_pro: isPro,
      is_loyal: isLoyal,
    },
  } = authData;
  const transformedAuthData: TransformedAuthData = {
    cartItemsCount: cartItemsTotal || 0,
    email: loginEmail || '',
    firstName: gFirstName || '',
    formKey,
    groupId,
    id: id || '',
    isLoyal,
    isPro,
    lastName: gLastName || '',
    userName: loginUsername || '',
  };
  return transformedAuthData;
};
