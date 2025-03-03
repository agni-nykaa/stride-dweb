import styled from '@emotion/styled';
import React from 'react';
import { webViewCallbacks } from '~/constants/webview';
import { getDevice, isAndroid, isWeb } from '~/utils/device';
import { getBrandPageUrl } from '~/utils/pageUrls';
import { webViewCallbackhandler } from '~/utils/webview';

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

interface BrandLogoProps {
  src: string;
  alt: string;
  brandId: string;
  brandName: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  src,
  alt,
  brandId,
  brandName,
}) => {
  const handleBrandClickForApp = () => {
    const appParams = {
      device: getDevice(),
      callbackFunctionName: webViewCallbacks.showBrand,
      callbackParams: isAndroid()
        ? { brandId: Number(brandId), brandName }
        : { id: brandId.toString(), int_cmp: '' },
    };
    webViewCallbackhandler(appParams);
  };

  const handleBrandClick = () => {
    if (!isWeb()) {
      handleBrandClickForApp();
      return;
    }
    window.location.href = getBrandPageUrl(brandName, brandId);
  };

  return (
    <Logo
      src={src}
      alt={alt}
      onClick={handleBrandClick}
    />
  );
};

export default BrandLogo;
