import React from 'react';

export interface DownloadButtonProps {
  className?: string;
  href: string;
  icon: React.ReactNode;
}

export interface FeatureProps {
  iconUrl: string;
  title: string;
  text: string;
}
