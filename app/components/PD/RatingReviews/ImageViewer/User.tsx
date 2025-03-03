import styled from '@emotion/styled';
import React from 'react';

import ProSvg from '../assets/proSvg';
import VerifiedSvg from '../assets/verifiedSvg';

const Wrap = styled.div`
  display: inline-block;
  width: 100%;
`;

const UserName = styled.span<{ color?: string }>`
  ${({ theme }) => theme?.typography?.subTitleMedium};
  display: block;
  color: ${(props) => props.color || '#fff'};
  margin-top: ${({ theme }) => theme?.spacing?.spacing20};
`;

const Label = styled.span`
  display: flex;
  ${({ theme }) => theme?.typography?.bodySmall};
  margin-left: ${({ theme }) => theme?.spacing?.spacing20};
  margin-bottom: ${({ theme }) => theme?.spacing?.spacing10};
`;

const UserType = styled.span<{ color?: string }>`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || '#fff'};
  display: flex;
  align-items: center;
  vertical-align: middle;
  i {
    margin-right: 4px;
    svg {
      background: white;
      border-radius: 50%;
    }
  }
`;

interface UserProps {
  name: string;
  isBuyer: boolean;
  isProUser?: boolean;
  customText?: string;
  color?: string; // New prop
}

const User: React.FC<UserProps> = ({
  name,
  isBuyer,
  isProUser,
  customText,
  color,
}: UserProps) => {
  const icon = isProUser ? (
    <ProSvg />
  ) : (
    <i>
      <VerifiedSvg />
    </i>
  );
  return (
    <Wrap>
      <UserName color={color}>{name}</UserName>
      {(isBuyer || isProUser) && (
        <UserType color={color}>
          {icon}
          <Label>{customText}</Label>
        </UserType>
      )}
    </Wrap>
  );
};

export default User;
