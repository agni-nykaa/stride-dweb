import styled from '@emotion/styled';
import React, { useState } from 'react';
import Share from '~/components/Icons/Share';
import { Toast } from '~/shared/Toast';

import { SHARE_SUCCESS } from './constants';
import { shareContent } from './utils';
import { getDevice, isWeb } from '~/utils/device';
import { webViewCallbacks } from '~/constants/webview';
import { webViewCallbackhandler } from '~/utils/webview';

const ShareButton = styled.div`
  display: flex;
`;

interface ShareProps {
  message: string;
  title: string;
  productImage: string;
}
function index({ title, message, productImage }: ShareProps) {
  const [toastData, setShowToast] = useState({ state: false, message: '' });

  const handleShare = async () => {
    const data = {
      message,
      title,
      url: window.location.href,
    };
    const responseData = await shareContent(data);
    if (responseData != SHARE_SUCCESS) {
      setShowToast({ state: true, message: responseData });
    }
  };
  const handleShareClick = () => {
    if (isWeb()) {
      handleShare();
    } else {
      const device = getDevice();
      const appParams = {
        device,
        callbackFunctionName: webViewCallbacks.sharePost,
        callbackParams: {
          title,
          url: window.location.href,
          image_url: productImage,
        },
      };
      webViewCallbackhandler(appParams);
    }
  };

  return (
    <>
      <ShareButton onClick={handleShareClick}>
        <Share />
      </ShareButton>
      {toastData.state && (
        <Toast
          message={toastData?.message}
          onDismiss={() => setShowToast({ state: false, message: '' })}
          background="black"
        />
      )}
    </>
  );
}

export default index;
