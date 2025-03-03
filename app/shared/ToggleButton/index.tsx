/** @jsxImportSource @emotion/react */
import React from 'react';

import { TOGGLER_VARIANT } from './constants';
import { ToggleContainer, ToggleSection, ToggleVariant } from './styled';
import type { TogglerProps } from './types';

const ToggleButton: React.FC<TogglerProps> = ({
  options,
  activeId,
  onChange,
  variant = TOGGLER_VARIANT.LIGHT,
}) => {
  const isDark = variant === TOGGLER_VARIANT.DARK;

  return (
    <ToggleContainer isDark={isDark}>
      <ToggleSection isDark={isDark}>
        {options?.map((option) => (
          <ToggleVariant
            key={option?.id}
            option={option}
            isActive={option?.id === activeId}
            onClick={() => onChange(option?.id)}
          >
            {option?.label}
          </ToggleVariant>
        ))}
      </ToggleSection>
    </ToggleContainer>
  );
};

export default ToggleButton;
