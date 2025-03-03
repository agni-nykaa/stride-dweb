import React from 'react';

import Bag from '../assets/BagIcon';
import { Button } from '../styled';

const ShoppingBag = () => {
  const cartCount = 0; // TODO cart items count from context
  return (
    <Button>
      <Bag />
    </Button>
  );
};

export default ShoppingBag;
