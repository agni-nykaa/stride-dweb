export interface MenuItem {
  link: string;
  displayText: string;
  tag?: string;
}

export interface MenuItemsMap {
  [platform: string]: {
    [sessionType: string]: MenuItem[];
  };
}
