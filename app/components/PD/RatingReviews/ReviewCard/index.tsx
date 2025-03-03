/** @jsxImportSource @emotion/react */
import RatingSvg from '../assets/ratingSvg';
import { SHADE } from '../constants';
import { ReviewCardProps } from '../types';
import Feedback from './Feedback';
import ReviewImages from './ReviewImages';
import Shade from './Shade';
import {
  ReviewContainer,
  ReviewDesc,
  ReviewText,
  VariantName,
  Avatar,
  Rating,
  UserInfo,
} from './styled';
import User from '../ImageViewer/User';

export default function ReviewCard(props: ReviewCardProps) {
  const { review, product, handleImageClick, handleLikeClick } = props;
  const { productType = '', variantType = '', options } = product || {};
  const isShade = variantType === SHADE;
  const {
    description,
    images,
    isBuyer,
    likeCount,
    name,
    profilePic,
    rating,
    title,
    isProUser,
    label,
    variantId,
    isLikedByUser,
    id,
  } = review || {};
  const selectedVariant =
    options &&
    options.find((option: any) => parseInt(option?.childId, 10) === variantId);
  return (
    <ReviewContainer>
      <UserInfo>
        <Avatar
          src={profilePic}
          alt={name}
          data-loading="lazy"
        />
        <User
          color="black"
          customText={label}
          isBuyer={isBuyer}
          name={name}
          isProUser={isProUser}
        />
      </UserInfo>
      <Rating>
        {rating}
        &nbsp;
        <RatingSvg />
      </Rating>
      {productType && productType === 'bundle' && selectedVariant ? (
        <VariantName>{selectedVariant?.variantName}</VariantName>
      ) : null}
      {isShade && selectedVariant && (
        <Shade
          shadeImage={selectedVariant?.shadeImage}
          variantName={selectedVariant?.variantName}
        />
      )}
      <ReviewText>{title}</ReviewText>
      <ReviewDesc>{description}</ReviewDesc>
      <ReviewImages
        images={images}
        handleImageClick={handleImageClick}
      />
      <Feedback
        likeCount={likeCount}
        handleLikeClick={handleLikeClick}
        isLikedByUser={isLikedByUser}
        reviewId={id}
      />
    </ReviewContainer>
  );
}
