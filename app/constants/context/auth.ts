import { AuthState, User } from '~/types/contexts/auth';

const authState: AuthState = {
  fetching: false,
  dataFetched: false,
  isFetchingError: false,
  fetchedOverNetwork: false,
  user: {
    cartItemsCount: null,
    email: '',
    firstName: '',
    formKey: '',
    groupId: '',
    id: '',
    isLoyal: null,
    isPro: false,
    lastName: '',
    rewardPoints: null,
    userName: '',
    wishlist: [],
    isRepeatUser: false,
    priveBand: null,
  },
  setUser: (user: User) => {},
};

export default authState;
