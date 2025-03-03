import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 10px;
`;

export const LinksWrapper = styled.div<{ footerBg?: string }>`
  background-color: rgb(58, 64, 71);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 20px;
  text-align: center;
  text-transform: lowercase;
  :first-letter {
    text-transform: uppercase;
  }
  :firstline {
    text-transform: uppercase;
  }
`;

export const Box = styled.p`
  margin-bottom: 10px;
`;

export const IconContainer = styled.i`
  margin-right: 10px;
  svg {
    vertical-align: middle;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const DownloadLink = styled.a`
  margin: 0 8px;
  display: inline-block;
`;

export const FeaturesContainer = styled.div`
  background-color: rgb(243, 244, 245);
  color: #3a4047;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: center;
`;

export const FeatureItem = styled.div`
  padding: 0 4px;
  flex: 1;
  line-height: 20px;
`;

export const TitleText = styled.div`
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 10px;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`;

export const DescriptionText = styled.div`
  padding: 0 15px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const FeatureImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const SocialMediaContainer = styled.div`
  background-color: rgb(243, 244, 245);
  text-align: center;
  margin: 20px 0;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  img {
    width: 20px;
    height: 20px;
  }
`;
