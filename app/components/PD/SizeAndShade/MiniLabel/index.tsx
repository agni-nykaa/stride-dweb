import React from 'react';

import { Wrapper, Text } from './styled';

interface MiniLabelProps {
  text: string;
}

const MiniLabel: React.FC<MiniLabelProps> = ({ text }) => (
  <Wrapper>
    <Text>{text}</Text>
  </Wrapper>
  );

export default MiniLabel;
