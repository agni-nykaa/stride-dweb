import {
  ReviewInfoContainer,
  UserContainer,
  LikeInfoContainer,
  UserInfo,
} from '../styled';
import { PreviewProps } from '../types';
import Description from './Description';
import LikeInfo from './Like';
import User from './User';
import { DEFAULT_VERIFIED_BUYER, SHADE } from '../constants';
import Rating from './Rating';
import { ImageContainer, Slide, StyledImage } from './styled';

const Preview = ({ review, imageUrl, product }: PreviewProps) => {
  const { options, variantType } = product || {};
  const { variantId } = review || {};
  const isShade = variantType === SHADE;
  const variant =
    isShade &&
    options &&
    options.find((option: any) => parseInt(option?.childId, 10) === variantId);
  const variantName = variant && variant.variantName;
  const variantIcon = variant && variant.shadeImage;

  return (
    <Slide>
      <ImageContainer>
        <StyledImage
          src={imageUrl.src}
          srcSet={imageUrl.srcSet}
          data-loading="lazy"
          alt="review-img"
        />
      </ImageContainer>
      <ReviewInfoContainer>
        <Rating
          rating={review.rating}
          variantIcon={variantIcon || ''}
          variantName={variantName || ''}
          createdOn={review.createdOnText}
          isShade={isShade}
        />
        <Description
          title={review.title}
          description={review.description}
        />
        <UserContainer>
          <UserInfo>
            <User
              name={review.name}
              isBuyer={review.isBuyer}
              isProUser={review.isProUser}
              customText={review?.label || DEFAULT_VERIFIED_BUYER}
            />
          </UserInfo>
          <LikeInfoContainer>
            <LikeInfo
              count={review.likeCount}
              isLiked={review.isLikedByUser}
            />
          </LikeInfoContainer>
        </UserContainer>
      </ReviewInfoContainer>
    </Slide>
  );
};

export default Preview;
