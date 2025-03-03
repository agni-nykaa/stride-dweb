import React, { useState, useRef, useEffect } from 'react';
import WarningIcon from '~/components/Icons/Warning';

import {
  InputContainer,
  InputLabel,
  InputField,
  Subtitle,
  CheckButton,
  ErrorText,
  ErrorContainer,
  InputWrapper,
} from './styled';

type InputType = 'numeric' | 'text';

interface InputBoxProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  placeholder?: string;
  showSubtitle?: boolean;
  onlyNumbers?: boolean;
  maxLength?: number;
  showButton?: boolean;
  onButtonClick?: () => void;
  disabled?: boolean;
  error?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  showSubtitle = false,
  onlyNumbers = true,
  maxLength,
  showButton = false,
  onButtonClick,
  disabled = false,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyNumbers && isNaN(Number(e.target.value))) {
      return;
    }
    if (maxLength && e.target.value.length > maxLength) {
      return;
    }
    onChange(e);
  };

  showButton = value.length === 6;

  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper>
        <InputField
          ref={inputRef}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={isFocused && showSubtitle ? '' : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          inputMode={onlyNumbers ? 'numeric' : 'text'}
          disabled={disabled}
          hasError={!!error}
        />
        {showButton && <CheckButton onClick={onButtonClick} disabled={disabled}>CHECK</CheckButton>}
        {isFocused && showSubtitle && <Subtitle>{placeholder}</Subtitle>}
        {error && (
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
            <WarningIcon />
          </ErrorContainer>
        )}
      </InputWrapper>
    </InputContainer>
  );
};

export default InputBox;
