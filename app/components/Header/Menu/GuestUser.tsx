import React from 'react';

import {
  LIST_ITEM_CLASS,
  platformNames,
  userSessionTypes,
  getMenuItems,
} from '../constants'; // Import necessary constants and utility method
import { MenuLink } from '../styled';

const menuItems = getMenuItems(platformNames.NYKAA, userSessionTypes.GUEST);

const handleSmartLogin = () => {};

const renderMenuItems = (items) =>
  items.map((item) => (
    <li
      key={item.link}
      className={LIST_ITEM_CLASS}
    >
      <MenuLink
        href={item.link}
        className="link"
      >
        {item.displayText}
      </MenuLink>
    </li>
  ));

const GuestUser = () => (
  <>
    {renderMenuItems(menuItems)}
    <li className={LIST_ITEM_CLASS}>
      <MenuLink
        onClick={() => handleSmartLogin()}
        className="link"
      >
        Login
      </MenuLink>
    </li>
  </>
);

export default GuestUser;
