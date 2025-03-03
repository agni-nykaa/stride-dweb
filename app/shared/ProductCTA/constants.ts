export const ButtonState = {
  DEFAULT: 'Add to Bag',
  LOADING: 'Adding...',
  SUCCESS: 'Go to bag',
} as const;

export const TOAST_DEFAULT_VALUE = { show: false, message: '' };
export const SNACKBAR_DEFAULT_VALUE = {
  show: false,
  message: '',
  actionText: '',
};

export default ButtonState;
