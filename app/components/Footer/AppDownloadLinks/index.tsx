import React from 'react';

import MobileIcon from '../assets/MobileIcon';
import StoreApp from '../assets/StoreApp';
import StorePlay from '../assets/StorePlay';
import {
  Box,
  ButtonContainer,
  IconContainer,
  DownloadLink,
  LinksWrapper,
} from '../styled';
import { DownloadButtonProps } from '../types';

const appLinks = {
  title: 'Experience the Nykaa mobile app',
  googlePlay: 'https://nykaa.onelink.me/2573509543/aba6fc39',
  appStore: 'https://nykaa.onelink.me/2573509543/aba6fc39',
}; // this will be fetched from the config

const AppDownloadLinks = () => (
  <LinksWrapper>
    <Box>
      <IconContainer>
        <MobileIcon />
      </IconContainer>
      <span>{appLinks.title}</span>
    </Box>
    <ButtonContainer>
      <DownloadButton
        href={appLinks.googlePlay}
        icon={<StorePlay />}
      />
      <DownloadButton
        href={appLinks.appStore}
        icon={<StoreApp />}
      />
    </ButtonContainer>
  </LinksWrapper>
);

const DownloadButton: React.FC<DownloadButtonProps> = ({
  className,
  href,
  icon,
}: DownloadButtonProps) => (
  <DownloadLink
    className={className}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </DownloadLink>
);

export default AppDownloadLinks;
