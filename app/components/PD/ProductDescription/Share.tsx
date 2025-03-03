import React from 'react';
import ShareButton from '~/shared/ShareButton';
import { SHARE_MESSAGE } from '~/shared/ShareButton/constants';

interface SharePropType {
  name: string;
  productImage: string;
}

function Share({ name, productImage }: SharePropType) {
  return (
    <ShareButton
      message={SHARE_MESSAGE}
      title={name}
      productImage={productImage}
    />
  );
}

export default Share;
