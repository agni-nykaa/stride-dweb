import { useRef, useState, useCallback, useEffect } from 'react';

export const useVideoControls = () => {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  const formatTime = (seconds: number) => {
    if (Number.isNaN(seconds) || seconds === undefined) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const updateVideoStatus = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const currentTimeValue = video.currentTime ?? 0;
    const durationValue = video.duration ?? 0;

    setIsPlaying(!video.paused);
    setIsEnded(video.ended);
    setProgress(durationValue ? (currentTimeValue / durationValue) * 100 : 0);
    setCurrentTime(formatTime(currentTimeValue));
    setDuration(formatTime(durationValue));
  }, []);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch((error: any) => {
      console.error('Error playing video:', error);
    });
    updateVideoStatus();
  }, [updateVideoStatus]);

  const pause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    updateVideoStatus();
  }, [updateVideoStatus]);

  const handlePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      play();
    } else {
      pause();
    }
  }, [play, pause]);

  const handleSkip = useCallback(
    (seconds: number) => {
      const video = videoRef.current;
      if (!video) return;

      video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
      updateVideoStatus();
    },
    [updateVideoStatus],
  );

  const handleReplay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch((error: any) => {
      console.error('Error replaying video:', error);
    });
    updateVideoStatus();
  }, [updateVideoStatus]);

  const handleTimeUpdate = useCallback(
    (time: number) => {
      const video = videoRef.current;
      if (!video) return;

      video.currentTime = Math.max(0, Math.min(video.duration, time));
      updateVideoStatus();
    },
    [updateVideoStatus],
  );

  useEffect(() => {
    const interval = setInterval(updateVideoStatus, 250);
    return () => clearInterval(interval);
  }, [updateVideoStatus]);

  return {
    videoRef,
    isPlaying,
    isEnded,
    progress,
    currentTime,
    duration,
    handlePlayPause,
    play,
    pause,
    handleSkip,
    handleReplay,
    handleTimeUpdate,
    updateVideoStatus,
  };
};
