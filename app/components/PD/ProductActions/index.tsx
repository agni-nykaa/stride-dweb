import { useAuth } from '~/hooks/useAuth';
import NotifyMe from '~/shared/NotifyMe';
import ProductCTA from '~/shared/ProductCTA';

const ProductActions = ({ product, view, showVariantButton }) => {
  const {
    id: productId,
    name: productName,
    price: productPrice,
    onlyWishlistButton,
    inStock,
    variantType: productVariant,
    variants,
  } = product || {};
  const { user } = useAuth() || {};
  const { formKey, wishlist } = user || {};

  if (inStock || (showVariantButton && variants)) {
    return (
      <ProductCTA
        productId={productId}
        // TODO -: keys needs to be updated with real data
        userDetails={{
          wishlist: wishlist,
          formKey: formKey,
        }}
        onlyWishlistButton={onlyWishlistButton}
        view={view}
        showVariantButton
        productVariant={productVariant}
        variants={variants}
        productTitle={productName}
      />
    );
  } else {
    return (
      <NotifyMe
        productId={productId}
        productName={productName}
        productPrice={productPrice}
      />
    );
  }
};

export default ProductActions;
