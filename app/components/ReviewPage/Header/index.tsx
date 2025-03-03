import React from 'react';
import styled from '@emotion/styled';
import ChevronLeft from '../../Icons/ChevronLeft';
import { hexToRgba } from '~/utils/colorUtils';
import { HEADER_TITLE, WRITE_NEW_BUTTON_TEXT } from '../constants';
import { redirectToWriteReview } from '~/actions/navigate/goToWriteReview';
import { useNavigate } from '@remix-run/react';
import { HeaderContainer, Title, WriteNewButton } from './styled';

function Header() {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <ChevronLeft onClick={handleBackButtonClick} />
      <Title>{HEADER_TITLE}</Title>
      <WriteNewButton onClick={redirectToWriteReview}>
        {WRITE_NEW_BUTTON_TEXT}
      </WriteNewButton>
    </HeaderContainer>
  );
}

export default Header;
