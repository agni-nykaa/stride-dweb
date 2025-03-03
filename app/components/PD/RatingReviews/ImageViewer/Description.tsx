import styled from '@emotion/styled';

import { DescriptionProps } from '../types';

const Wrap = styled.section`
  padding: 0 5px;
`;

const Title = styled.h4`
  color: #ffffff;
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`;

export default (props: DescriptionProps) => {
  const { title, description } = props;
  return (
    <Wrap>
      {title && (
        <Title>
          &quot;
          {title}
          &quot;
        </Title>
      )}
      <Description>{description}</Description>
    </Wrap>
  );
};
