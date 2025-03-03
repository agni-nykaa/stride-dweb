/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { CAROUSEL_VIEW, MEDIA_FORMAT } from '../constants';
import { isCurrentMediaVideo } from '../utils';
import VideoPlayer from '../VideoPlayer';
import YouTubePlayer from '../VideoPlayer/YoutubePlayer';
import { MediaItem, ProductData } from '~/types/PD';
import { scaleImage } from '~/utils/imageUtil';
import { isValidArrayLength } from '~/utils/validations';
import { SlideContainerStyle, SlideStyle } from './styled';

interface SlidesProps {
  media: MediaItem[];
  handleFullScreen: (id: string, view: string) => void;
  view: string;
  activeSlide: number;
  product: ProductData;
}

function Slides({
  media,
  handleFullScreen,
  view,
  activeSlide,
  product,
}: SlidesProps) {
  if (!isValidArrayLength(media)) return null;
  const isFullScreen = view === CAROUSEL_VIEW.FULL_SCREEN;
  const { name } = product || {};
  const renderSlideContent = (mediaItem: MediaItem, index: number) => {
    if (mediaItem.mediaType === MEDIA_FORMAT.IMAGE) {
      const { src, srcSet } = scaleImage({ url: mediaItem?.url, width: 500 });
      return (
        <img
          src={src}
          alt={name}
          css={SlideStyle}
          className="slide-wrapper"
          loading={index === 0 ? 'eager' : 'lazy'}
          height={360}
          width={360}
          srcSet={srcSet}
          decoding="async"
        />
      );
    }

    if (mediaItem.mediaType === MEDIA_FORMAT.YOUTUBE_VIDEO) {
      return (
        <YouTubePlayer
          url={mediaItem?.url}
          width={'100%'}
        />
      );
    }

    if (mediaItem.mediaType === MEDIA_FORMAT.VIDEO) {
      const isActive = activeSlide === index;
      return (
        <VideoPlayer
          url={mediaItem.url}
          id={mediaItem.id}
          view={view}
          handleFullScreen={handleFullScreen}
          isActive={isActive}
        />
      );
    }

    return null;
  };

  return (
    <>
      {media?.map((mediaItem, index) => {
        const content = renderSlideContent(mediaItem, index);
        const isCurrentVideo = isCurrentMediaVideo(mediaItem);
        return (
          content && (
            <SlideContainerStyle
              key={index}
              onClick={() => {
                !isCurrentVideo &&
                  !isFullScreen &&
                  handleFullScreen(mediaItem.id, view);
              }}
            >
              {content}
            </SlideContainerStyle>
          )
        );
      })}
    </>
  );
}

export default Slides;
