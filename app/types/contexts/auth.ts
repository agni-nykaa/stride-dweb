export interface User {
  cartItemsCount: number | null;
  email: string;
  firstName: string;
  formKey: string;
  groupId: string;
  id: string;
  isLoyal: boolean | null;
  isPro: boolean;
  lastName: string;
  rewardPoints: number | null;
  userName: string;
  wishlist: any[];
  isRepeatUser: boolean;
  priveBand: any | null;
}

export interface AuthState {
  fetching: boolean;
  dataFetched: boolean;
  isFetchingError: boolean;
  fetchedOverNetwork: boolean;
  user: User;
  setUser: (user: User) => void;
}
