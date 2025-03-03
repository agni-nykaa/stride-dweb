import React from 'react';
import { Link } from '../styled';
import WishlistIcon from '../assets/WishlistIcon';
import { useIsLoggedIn } from '~/hooks/useAuth';
import { redirectToWishlist } from '~/actions/navigate/goToWishlist';

const Wishlist = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <Link onClick={() => redirectToWishlist(isLoggedIn)}>
      <WishlistIcon />
    </Link>
  );
};
export default Wishlist;
