import React, { useState, useEffect } from 'react';

import { CAROUSEL_VIEW } from '../constants';
import PlayControls from './PlayControls';
import ProgressControls from './ProgressControls';
import { Container, ControlsContainer } from './styled';
import Video from './Video';
import { useVideoControls } from '../hooks/useVideoControls';
import { MEDIA_TYPE } from '~/constants/mediaType';

interface VideoPlayerProps {
  url: string;
  width?: number;
  height?: number;
  id: string;
  view: string;
  handleFullScreen: (id: string, view: string, type: string) => void;
  isActive: boolean;
}

const VideoPlayer = ({
  url,
  width,
  height,
  id,
  handleFullScreen,
  view,
  isActive,
}: VideoPlayerProps) => {
  const {
    videoRef,
    isPlaying,
    isEnded,
    currentTime,
    duration,
    progress,
    handlePlayPause,
    handleSkip,
    handleReplay,
    handleTimeUpdate,
    pause,
  } = useVideoControls();

  const [showControls, setShowControls] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const isFullscreen = view === CAROUSEL_VIEW.FULL_SCREEN;

  const handleVideoClick = () => {
    setShowControls((prev) => !prev);
  };

  const handleControlsTouch = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = (parseFloat(e.target.value) * videoRef.current.duration) / 100;
    handleTimeUpdate(time);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const commonProps = {
    onTouchStart: handleControlsTouch,
    onTouchMove: handleControlsTouch,
    onTouchEnd: handleControlsTouch,
  };

  useEffect(() => {
    if (showControls) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showControls]);

  useEffect(() => {
    if (!isActive) {
      pause();
    }
  }, [isActive, pause]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Video
        videoRef={videoRef}
        url={url}
        width={width}
        height={height}
        id={id}
        isActive={isActive}
        onVideoClick={handleVideoClick}
      />

      <ControlsContainer isVisible={showControls || !isPlaying}>
        <PlayControls
          isPlaying={isPlaying}
          isEnded={isEnded}
          handlePlayPause={handlePlayPause}
          handleReplay={handleReplay}
          handleSkip={handleSkip}
          commonProps={commonProps}
        />

        <ProgressControls
          progress={progress}
          duration={duration}
          currentTime={currentTime}
          isMuted={isMuted}
          isFullscreen={isFullscreen}
          handleProgressChange={handleProgressChange}
          handleMuteToggle={handleMuteToggle}
          handleFullScreen={() => {
            pause();
            handleFullScreen(id, view, MEDIA_TYPE.VIDEO);
          }}
          commonProps={commonProps}
        />
      </ControlsContainer>
    </Container>
  );
};

export default VideoPlayer;
