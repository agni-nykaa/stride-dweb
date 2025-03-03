import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const ReviewContainer = styled.div`
  background: ${({ theme }) => theme?.colors?.surface};
  padding: ${({ theme: { spacing } }) =>
    `${spacing?.spacing60} ${spacing?.spacing80}`};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => `${spacing?.spacing40}`};
  margin-bottom: ${({ theme }) => theme?.spacing?.spacing60};
  padding: ${({ theme: { spacing } }) =>
    `${spacing?.spacing80} ${spacing?.spacing0}`};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme?.colors?.positive};
  color: ${({ theme }) => theme?.colors?.surface};
  ${({ theme }) => theme?.typography?.buttonMedium};
  padding: ${({ theme: { spacing } }) => `${spacing?.spacing20}`};
  border-radius: 2px;
  width: fit-content;
  margin: ${({ theme: { spacing } }) =>
    `${spacing?.spacing60} ${spacing?.spacing0}`};
`;

export const Shade = styled.div`
  display: inline-block;
  margin-top: 0.25rem;
  color: rgba(0, 19, 37, 0.72);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`;

export const ShadeColor = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: -2px;
`;

export const ReviewText = styled.div`
  ${({ theme }) => theme?.typography?.subTitleSmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  padding-bottom: ${({ theme: { spacing } }) => `${spacing?.spacing40}`};
  margin-top: ${({ theme: { spacing } }) => `${spacing?.spacing40}`};
`;

export const Wrap = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  color: rgb(102, 102, 102);
  line-height: 24px;
  margin: ${({ theme }) => theme?.spacing?.spacing0};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme?.colors?.surface};
  padding: ${({ theme: { spacing } }) =>
    `${spacing?.spacing40} ${spacing?.spacing80}`};
  padding-left: ${({ theme }) => theme?.spacing?.spacing0};
  white-space: nowrap;
  overflow: auto hidden;
  scrollbar-width: none;
  width: 100%;
`;

export const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const FeedbackSection = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.08)};
  border-bottom: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.08)};
  font-size: 14px;
  justify-content: space-between;
`;

export const HelpfulText = styled.strong`
  cursor: pointer;
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  ${({ theme }) => theme?.typography?.labelMedium};
`;

export const ShadeText = styled.span`
  cursor: pointer;
  margin: ${({ theme }) => theme?.spacing?.spacing0};
  padding: ${({ theme }) => theme?.spacing?.spacing0};
  box-sizing: border-box;
  ${({ theme }) => theme?.typography?.bodyMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
`;

export const ShadeName = styled.span`
  cursor: pointer;
  margin: ${({ theme }) => theme?.spacing?.spacing0};
  padding: ${({ theme }) => theme?.spacing?.spacing0};
  box-sizing: border-box;
  ${({ theme }) => theme?.typography?.bodyMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export const ReviewDesc = styled.p`
  cursor: pointer;
  box-sizing: border-box;
  ${({ theme }) => theme?.typography?.bodySmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
`;

export const ReviewImageWrapper = styled.div`
  font-size: 14px;
  overflow: hidden;
  width: 54px;
  height: 54px;
  vertical-align: top;
  cursor: pointer;
  margin: ${({ theme: { spacing } }) =>
    `${spacing?.spacing0} ${spacing?.spacing40} ${spacing?.spacing0} ${spacing?.spacing0}`};
`;

export const HelpfulWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme: { spacing } }) =>
    `${spacing?.spacing40} ${spacing?.spacing80} ${spacing?.spacing40} ${spacing?.spacing0}`};
`;

export const PeopleCountSection = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  ${({ theme }) => theme?.typography?.subTitleSmall};
  padding: 0.5rem 0px 0.5rem 1rem;
  border-left: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.08)};
`;

export const PeopleCount = styled.span`
  cursor: pointer;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  ${({ theme }) => theme?.typography?.subTitleSmall};
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  margin-right: 0.25rem;
`;

export const VariantName = styled.div`
  margin-top: 0.5rem;
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
`;

export const ReviewTitle = styled.div`
  ${({ theme }) => theme?.typography?.buttonMedium};
  text-size-adjust: 100%;
  cursor: pointer;
  margin: ${({ theme }) => theme?.spacing?.spacing0};
  box-sizing: border-box;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;
