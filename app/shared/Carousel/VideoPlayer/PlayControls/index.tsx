import React from 'react';

import { Controls, Button, Wrapper } from './styled';
import Forward from '~/components/Icons/Forward';
import Pause from '~/components/Icons/Pause';
import Play from '~/components/Icons/Play';
import Replay from '~/components/Icons/Replay';
import Rewind from '~/components/Icons/Rewind';

interface PlayControlsProps {
  isPlaying: boolean;
  isEnded: boolean;
  handlePlayPause: () => void;
  handleReplay: () => void;
  handleSkip: (seconds: number) => void;
  commonProps: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  };
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  isEnded,
  handlePlayPause,
  handleReplay,
  handleSkip,
  commonProps = {
    onTouchStart: () => {},
    onTouchMove: () => {},
    onTouchEnd: () => {},
  },
}: PlayControlsProps) => (
  <Wrapper>
    <Controls>
      <Button
        onClick={() => handleSkip(-10)}
        {...commonProps}
      >
        <Rewind />
      </Button>

      {isEnded ? (
        <Button
          onClick={handleReplay}
          {...commonProps}
        >
          <Replay />
        </Button>
      ) : (
        <Button
          onClick={handlePlayPause}
          {...commonProps}
        >
          {isPlaying ? (
            <Play width={48} height={48} />
          ) : (
            <Pause width={48} height={48} />
          )}
        </Button>
      )}

      <Button
        onClick={() => handleSkip(10)}
        {...commonProps}
      >
        <Forward />
      </Button>
    </Controls>
  </Wrapper>
);

export default PlayControls;
