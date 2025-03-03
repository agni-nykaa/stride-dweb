import { useEffect } from 'react';
import { useAuth, useIsLoggedIn } from '../useAuth';
import { useFetcherHandler } from '../useFetcherHandler';
import { API_METHODS } from '~/constants/api';
import { ACTION_ROUTES } from '~/actions';
import { CONTENT_TYPES } from '~/network/constants';

export const useWishlistData = () => {
  const { user, setUser } = useAuth();
  const isLoggedIn = useIsLoggedIn();
  const { fetcher } = useFetcherHandler({
    onSuccess: (data) => {
      const wishlistData = data?.response?.wishlist || [];
      setUser({ ...user, wishlist: wishlistData });
    },
    onError: () => {},
    successHandler: (data) => data.status || false,
  });

  useEffect(() => {
    if (isLoggedIn) {
      fetcher.submit(
        { source: 'react', formKey: user?.formKey || '' },
        {
          method: API_METHODS.POST,
          action: ACTION_ROUTES.fetchWishlistIds,
          encType: CONTENT_TYPES.APPLICATION_JSON,
        },
      );
    }
  }, [isLoggedIn]);
};
