export const TAB_VARIANTS = {
  MODAL: 'modal',
  DEFAULT: 'default',
} as const;

export const TAB_ALIGNMENTS = {
  SPACE_BETWEEN: 'space-between',
  CENTER: 'center',
  SPACE_AROUND: 'space-around',
} as const;

export type TabVariant = (typeof TAB_VARIANTS)[keyof typeof TAB_VARIANTS];
export type TabAlignment = (typeof TAB_ALIGNMENTS)[keyof typeof TAB_ALIGNMENTS];
