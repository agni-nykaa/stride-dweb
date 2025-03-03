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
import MenuIcon from './Menu';
import Search from './Search';
import ShoppingBag from './ShoppingBag';
import { BACK_BTN_HEIGHT, BACK_BTN_WIDTH, PDP_TOP_NAV } from './constants';
import { handleBackButtonClick } from '~/actions/navigate/goBack';
import { useAuth } from '~/hooks/useAuth';
import { redirectToShoppingBag } from '~/actions/navigate/goToShoppingBag';

const HeaderForWeb = () => {
  const { user } = useAuth() || {};
  const { cartItemsCount: cartCount } = user || {};
  return (
    <Container>
      <LeftSection>
        <BackButton onClick={handleBackButtonClick}>
          <BackArrowIcon
            height={BACK_BTN_HEIGHT}
            width={BACK_BTN_WIDTH}
          />
        </BackButton>
        <Logo href={HOME}>
          <NykaaLogoIcon />
        </Logo>
      </LeftSection>
      <RightSection>
        <Search />
        <CartWrapper onClick={() => redirectToShoppingBag(PDP_TOP_NAV)}>
          <ShoppingBag />
          {cartCount && cartCount > 0 ? (
            <CartCounter>{cartCount}</CartCounter>
          ) : null}
        </CartWrapper>
        <MenuIcon />
      </RightSection>
    </Container>
  );
};

export default HeaderForWeb;
