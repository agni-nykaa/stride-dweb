import React from 'react';

import {
  LIST_ITEM_CLASS,
  getMenuItems,
  platformNames,
  userSessionTypes,
} from '../constants';

const AuthenticatedUser = () => {
  const menuItems = getMenuItems(
    platformNames.NYKAA,
    userSessionTypes.LOGGED_IN,
  );
  return (
    <ul>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={LIST_ITEM_CLASS}
        >
          <a
            href={item.link}
            className="link"
          >
            {item.displayText}
          </a>
        </li>
      ))}
      <li className={LIST_ITEM_CLASS}>
        <a
          href="/chat"
          className="link"
        >
          Chat Now
        </a>
      </li>
      <li className={LIST_ITEM_CLASS}>
        <a
          href="/logout"
          className="link"
        >
          Logout
        </a>
      </li>
    </ul>
  );
};

export default AuthenticatedUser;
