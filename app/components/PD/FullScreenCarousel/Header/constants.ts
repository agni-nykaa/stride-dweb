import { MEDIA_TYPE } from '~/constants/mediaType';

export const ToggleOptions = {
  IMAGES: 'Images',
  VIDEO: 'Video',
} as const;

const imageStyles = {
  selected: {
    backgroundColor: '#F3F4F5',
    color: '#000',
    border: '1px solid #000',
    borderRadius: '20px',
  },
  unselected: {
    color: '#fff',
    borderRadius: '20px',
  },
};

const videoStyles = {
  selected: {
    background: '#111314EB',
    color: '#fff',
    border: '1px solid #111314EB',
    borderRadius: '20px',
  },
  unselected: {
    text: '#fff',
  },
};

export const toggleOptions = [
  {
    id: MEDIA_TYPE.IMAGE,
    label: ToggleOptions.IMAGES,
    colors: imageStyles,
  },
  {
    id: MEDIA_TYPE.VIDEO,
    label: ToggleOptions.VIDEO,
    colors: videoStyles,
  },
];
