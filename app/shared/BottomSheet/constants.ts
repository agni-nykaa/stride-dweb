export const BOTTOM_SHEET_NAVIGATION = {
  HANDLE: 'handle',
  CLOSE_BUTTON: 'closeButton',
  NONE: 'none',
} as const;

export type BottomSheetNavigation =
  (typeof BOTTOM_SHEET_NAVIGATION)[keyof typeof BOTTOM_SHEET_NAVIGATION];
