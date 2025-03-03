import React from 'react';

import AppDownloadLinks from './AppDownloadLinks';
import Features from './Features';
import NewsLetter from './NewsLetter';
import SocialMediaLinks from './SocialMediaLinks';
import { FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper>
    <AppDownloadLinks />
    <Features />
    <SocialMediaLinks />
    {/* <NewsLetter /> */}
  </FooterWrapper>
);

export default Footer;
