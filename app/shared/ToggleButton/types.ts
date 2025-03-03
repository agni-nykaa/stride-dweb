import { TOGGLER_VARIANT } from './constants';

export interface ToggleOption {
  id: string;
  label: string;
  colors: {
    selected: {
      background: string;
      text: string;
      [key: string]: any;
    };
    unselected: {
      background: string;
      text: string;
      [key: string]: any;
    };
  };
}

export interface TogglerProps {
  options: ToggleOption[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: (typeof TOGGLER_VARIANT)[keyof typeof TOGGLER_VARIANT];
}
