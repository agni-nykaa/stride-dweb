import React from 'react';
import { VideoWrapper } from './styled';

interface VideoProps {
  videoRef?: React.RefObject<HTMLVideoElement>;
  url: string;
  width?: number;
  height?: number;
  id: string;
  isActive: boolean;
  onVideoClick: (e: React.MouseEvent) => void;
}

const Video = ({ videoRef, url, width = 360, height = 360, id, isActive, onVideoClick }: VideoProps) => (
  <VideoWrapper onClick={onVideoClick}>
    <video
      ref={videoRef}
      width={width}
      height={height}
      playsInline
      preload="metadata"
      src={url}
      id={id}
      autoPlay={isActive}
      muted={true}
    />
  </VideoWrapper>
);

export default Video;
