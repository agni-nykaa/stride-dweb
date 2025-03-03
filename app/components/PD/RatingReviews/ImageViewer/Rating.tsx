import styled from '@emotion/styled';
import React from 'react';

import RatingSvg from '../assets/ratingSvg';
import { RatingProps } from '../types';

const Wrap = styled.section`
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`;

const Rating = styled.span`
  display: inline-block;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  padding: 3px 5px;
`;

const StarIcon = styled.i`
  margin-left: 4px;
  bottom: 2px;
  position: relative;
  svg {
    display: inline-block;
    vertical-align: bottom;
  }
`;

const Variant = styled.span`
  display: inline-block;
  margin-left: 5px;
  padding-left: 10px;
  color: #ffffff;
  border-left: 1px solid #eeeeee;
  margin-bottom: -5px;
`;

const Img = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  float: left;
`;

const CreatedOn = styled.span`
  display: inline-block;
  margin-left: 10px;
  padding-left: 10px;
  float: right;
  color: rgba(255, 255, 255, 0.72);
`;

const RatingInfo: React.FC<RatingProps> = ({
  rating,
  variantName,
  variantIcon,
  createdOn,
  isShade,
}: RatingProps) => (
  <Wrap>
    <Rating>
      {rating}
      <StarIcon>
        <RatingSvg />
      </StarIcon>
    </Rating>
    {isShade && (
      <Variant>
        <Img
          src={variantIcon}
          alt={variantName}
          data-loading="lazy"
        />
        {variantName}
      </Variant>
    )}
    <CreatedOn>{createdOn}</CreatedOn>
  </Wrap>
);

export default RatingInfo;
