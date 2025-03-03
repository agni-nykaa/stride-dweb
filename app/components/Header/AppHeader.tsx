import { HOME } from '~/constants/pageUrls';
import {
  BackButton,
  CartCounter,
  CartWrapper,
  Container,
  LeftSection,
  Logo,
  RightSection,
} from './styled';
import BackArrowIcon from '../Icons/BackArrow';
import NykaaLogoIcon from './assets/NykaaLogo';
import Search from './Search';
import ShoppingBag from './ShoppingBag';
import Wishlist from './Wishlist';
import { handleBackButtonClick } from '~/actions/navigate/goBack';
import { useAuth } from '~/hooks/useAuth';
import { PDP_TOP_NAV } from './constants';
import { redirectToShoppingBag } from '~/actions/navigate/goToShoppingBag';

const AppHeader = () => {
  const { user } = useAuth() || {};
  const { cartItemsCount: cartCount } = user || {};
  return (
    <Container>
      <LeftSection>
        <BackButton onClick={handleBackButtonClick}>
          <BackArrowIcon />
        </BackButton>
        <Logo href={HOME}>
          <NykaaLogoIcon />
        </Logo>
      </LeftSection>
      <RightSection>
        <Search />
        <Wishlist />
        <CartWrapper onClick={() => redirectToShoppingBag(PDP_TOP_NAV)}>
          <ShoppingBag />
          {cartCount && cartCount > 0 ? (
            <CartCounter>{cartCount}</CartCounter>
          ) : null}
        </CartWrapper>
      </RightSection>
    </Container>
  );
};

export default AppHeader;
