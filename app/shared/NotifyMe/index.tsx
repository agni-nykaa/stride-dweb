/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';

import { NOTIFY_ME_MESSAGES, TOAST_COLORS } from './constants';
import {
  Wrapper,
  Description,
  ErrorText,
  FormContainer,
  Input,
} from './styled';
import {
  getNotifyMeFormData,
  isValidEmail,
  submitNotifyMeAction,
} from './utils';
import Button from '../Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../Button/constants';
import { Toast } from '../Toast';
import { useAuth } from '~/hooks/useAuth';

interface NotifyMeProps {
  productId: string;
  productName: string;
  productPrice: number;
}

export default function NotifyMe({
  productId,
  productName,
  productPrice,
}: NotifyMeProps) {
  const { user } = useAuth() || {};
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [emailError, setEmailError] = useState('');

  const { fetcher, isLoading } = useFetcherHandler({
    onSuccess: () => {
      setToastMessage(NOTIFY_ME_MESSAGES.SUCCESS);
      setIsSuccess(true);
      setEmail('');
      setShowToast(true);
    },
    onError: () => {
      setToastMessage(NOTIFY_ME_MESSAGES.FAILURE);
      setIsSuccess(false);
      setShowToast(true);
    },
    successHandler: (data) => !data.error || false,
  });

  useEffect(() => {
    setEmail(user?.email || '');
  }, [user?.email]);

  const validateAndSubmit = () => {
    if (!email) {
      setEmailError(NOTIFY_ME_MESSAGES.EMAIL_ERROR);
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError(NOTIFY_ME_MESSAGES.EMAIL_ERROR);
      return;
    }

    setEmailError('');
    const formData = getNotifyMeFormData({
      email,
      productId,
      productName,
      productPrice,
    });
    submitNotifyMeAction(fetcher, formData);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  return (
    <>
      <Wrapper>
        <Description>{NOTIFY_ME_MESSAGES.DESCRIPTION}</Description>
        <FormContainer>
          <Input
            type="email"
            placeholder={NOTIFY_ME_MESSAGES.PLACEHOLDER}
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            variant={BUTTON_VARIANTS.NOTIFY}
            onClick={validateAndSubmit}
            size={BUTTON_SIZES.SMALL}
            disabled={isLoading}
          >
            {NOTIFY_ME_MESSAGES.BUTTON_TEXT}
          </Button>
        </FormContainer>
        {emailError && <ErrorText>{emailError}</ErrorText>}
      </Wrapper>
      {showToast && (
        <Toast
          message={toastMessage}
          background={isSuccess ? TOAST_COLORS.SUCCESS : TOAST_COLORS.ERROR}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}
