import React from 'react';

import { socialLinksData } from '../constants';
import { IconsContainer, SocialMediaContainer } from '../styled';

const SocialMediaLinks = () => (
  <SocialMediaContainer>
    <p>{socialLinksData.text}</p>
    <IconsContainer>
      {socialLinksData.social.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.imgUrl}
            alt={social.title}
            title={social.title}
          />
        </a>
      ))}
    </IconsContainer>
  </SocialMediaContainer>
);

export default SocialMediaLinks;
