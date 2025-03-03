import React from 'react';
import {
  ProgressContainer,
  ProgressBar,
  ControlsRow,
  Timer,
  IconButton,
} from './styled';
import Mute from '~/components/Icons/Mute';
import Unmute from '~/components/Icons/Unmute';
import Expand from '~/components/Icons/Expand';
import Collapse from '~/components/Icons/Collapse';

interface ProgressControlsProps {
  progress: number;
  duration: string;
  currentTime: string;
  isMuted: boolean;
  isFullscreen: boolean;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMuteToggle: () => void;
  handleFullScreen: () => void;
  commonProps: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  };
}

const ProgressControls = ({
  progress,
  duration,
  currentTime,
  isMuted,
  isFullscreen,
  handleProgressChange,
  handleMuteToggle,
  handleFullScreen,
  commonProps,
}: ProgressControlsProps) => (
  <ProgressContainer {...commonProps}>
    <ProgressBar
      type="range"
      min="0"
      max={duration}
      step={1}
      value={progress}
      sliderValue={progress}
      onChange={handleProgressChange}
    />
    <ControlsRow>
      <Timer>{currentTime}</Timer>
      <IconButton onClick={handleMuteToggle}>
        {isMuted ? <Unmute /> : <Mute />}
      </IconButton>
      <IconButton onClick={handleFullScreen}>
        {isFullscreen ? <Collapse /> : <Expand />}
      </IconButton>
    </ControlsRow>
  </ProgressContainer>
);

export default ProgressControls;
