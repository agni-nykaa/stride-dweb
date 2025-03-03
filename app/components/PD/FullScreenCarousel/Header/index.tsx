/** @jsxImportSource @emotion/react */
import React from 'react';

import { toggleOptions } from './constants';
import { HeaderContainer, CloseIconWrapper } from './styled';
import CloseIcon from '~/components/Icons/CloseIcon';
import type { MediaType } from '~/shared/Carousel/constants';
import ToggleButton from '~/shared/ToggleButton';
import { TOGGLER_VARIANT } from '~/shared/ToggleButton/constants';
import { MEDIA_TYPE } from '~/constants/mediaType';

interface HeaderProps {
  onClose: () => void;
  mediaType: MediaType;
  onMediaTypeChange: (type: MediaType) => void;
  showToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onClose,
  mediaType,
  onMediaTypeChange,
  showToggle,
}) => {
  const isVideo = mediaType === MEDIA_TYPE.VIDEO;

  return (
    <HeaderContainer>
      {showToggle && (
        <ToggleButton
          options={toggleOptions}
          activeId={mediaType}
          onChange={onMediaTypeChange}
          variant={isVideo ? TOGGLER_VARIANT.DARK : TOGGLER_VARIANT.LIGHT}
        />
      )}

      <CloseIconWrapper
        isVideo={isVideo}
        onClick={onClose}
      >
        <CloseIcon />
      </CloseIconWrapper>
    </HeaderContainer>
  );
};

export default Header;
