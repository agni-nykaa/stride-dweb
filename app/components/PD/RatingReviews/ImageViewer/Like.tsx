import styled from '@emotion/styled';

import LikeSvg from '../assets/likeSvg';
import { PEOPLE_FOUND_HELPFUL_TEXT } from '../constants';
import { LikeProps } from '../types';

const Wrap = styled.section`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  margin-top: -1px;
`;

const LikeIcon = styled.span`
  display: inline-block;
  font-weight: 600;
  color: rgb(232, 0, 113);
  text-transform: uppercase;
  line-height: 14px;
`;

const LikeTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  padding: 5px 0px 5px 5px;
  color: rgb(255, 255, 255);
`;

const LikeCount = styled.strong`
  margin-right: 5px;
`;

export default ({ count }: LikeProps) => {
  if (count === 0) {
    return null;
  }
  return (
    <Wrap>
      <LikeIcon>
        <LikeSvg />
      </LikeIcon>
      <LikeTitle>
        <LikeCount>{count}</LikeCount>
        {PEOPLE_FOUND_HELPFUL_TEXT}
      </LikeTitle>
    </Wrap>
  );
};
