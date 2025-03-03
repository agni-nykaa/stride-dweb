import React, { useRef, useState } from 'react';

import AccountIcon from '../assets/AccountIcon';
import { BODY_OVERFLOW_FOR_MODAL } from '../constants';
import { DropdownMenu, MenuButton, MenuWrapper } from '../styled';
import AuthenticatedUser from './AuthenticatedUser';
import GuestUser from './GuestUser';
import { useIsLoggedIn } from '~/hooks/useAuth';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef(null);
  const isLoggedIn = useIsLoggedIn();

  const toggleMenu = () => {
    const isOpen = !isMenuOpen;
    if (isOpen) {
      document.body.classList.add(BODY_OVERFLOW_FOR_MODAL);
    } else {
      document.body.classList.remove(BODY_OVERFLOW_FOR_MODAL);
    }
    setIsMenuOpen(isOpen);
  };

  const handleClickInDropDown = (event: React.MouseEvent) => {
    const isOutsideChild = event.target === event.currentTarget;
    if (isOutsideChild) {
      event.preventDefault();
      toggleMenu();
    }
  };

  return (
    <MenuWrapper>
      <MenuButton onClick={toggleMenu}>
        <AccountIcon />
      </MenuButton>
      {isMenuOpen && (
        <DropdownMenu
          onClick={handleClickInDropDown}
          ref={dropDownRef}
          tabIndex={0}
        >
          <ul className="list">
            {isLoggedIn ? <AuthenticatedUser /> : <GuestUser />}
          </ul>
        </DropdownMenu>
      )}
    </MenuWrapper>
  );
};

export default Menu;
