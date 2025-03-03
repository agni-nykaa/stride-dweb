import React from 'react';

import {
  TabsWrapper,
  TabButtonsContainer,
  TabButton,
  HorizontalLine,
} from './styled';
import {
  TAB_VARIANTS,
  TAB_ALIGNMENTS,
  TabVariant,
  TabAlignment,
} from './constants';

interface Tab {
  key: string;
  label: string;
}

interface TabsContainerProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (index: number) => void;
  variant?: TabVariant;
  alignment?: TabAlignment;
}

const TabsContainer: React.FC<TabsContainerProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = TAB_VARIANTS.DEFAULT,
  alignment = TAB_ALIGNMENTS.SPACE_BETWEEN,
}) => (
  <TabsWrapper>
    <TabButtonsContainer
      variant={variant}
      alignment={alignment}
    >
      {tabs.map((tab, index) => (
        <TabButton
          key={tab.key}
          onClick={() => onTabChange(index)}
          active={activeTab === index}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabButtonsContainer>
    <HorizontalLine />
  </TabsWrapper>
);

export default TabsContainer;
