import { embeddedVideoUrl } from '../../utils/video';

interface YouTubePlayerProps {
  url: string;
  width?: number | string;
  height?: number | string;
}

const YouTubePlayer = ({
  url,
  width = 360,
  height = 360,
}: YouTubePlayerProps) => {
  const embedUrl = embeddedVideoUrl(url);
  return (
    <iframe
      width={width}
      height={height}
      src={embedUrl}
      allowFullScreen
      style={{ border: 0 }}
    />
  );
};

export default YouTubePlayer;
