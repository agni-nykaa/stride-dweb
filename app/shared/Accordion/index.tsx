import React, { useState } from 'react';
import ChevronDownSmall from '~/components/Icons/ChevronDownSmall';
import ChevronUpSmall from '~/components/Icons/ChevronUpSmall';
import { localStorageService } from '~/utils/storage/localStorage';

import {
  AccordionWrapper,
  ChevronWrapper,
  Children,
  Header,
  SubTitle,
  TextWrapper,
  Title,
} from './styled';


interface AccordionProps {
  icon?: React.ReactNode;
  title?: React.ReactNode | string;
  subTitle?: string | undefined;
  children?: React.ReactNode;
  opened?: boolean;
  keyValue: string;
  storageKey?: string;
}

const Accordion = ({
  icon,
  title,
  subTitle,
  children,
  opened = false,
  keyValue,
  storageKey = 'accordionOpenedSections',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(opened);

  const toggleAccordion = () => {
    const openedSectionsLocal = localStorageService?.getItem(storageKey);
    let openedSections: string[] = [];
    if (!isOpen) {
      if (openedSectionsLocal) {
        openedSections = JSON?.parse(openedSectionsLocal);
      }
      openedSections.push(keyValue);
      localStorageService?.setItem(
        storageKey,
        JSON.stringify([...new Set(openedSections)]),
      );
    }
    setIsOpen(!isOpen);
  };

  const handleChildrenClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AccordionWrapper onClick={toggleAccordion}>
      <Header isOpen={isOpen}>
        <>
          {icon && icon}
          <TextWrapper>
            <Title data-test-id="AccordionTitle">{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </TextWrapper>
          <ChevronWrapper>
            {isOpen ? <ChevronUpSmall /> : <ChevronDownSmall />}
          </ChevronWrapper>
        </>
      </Header>
      <Children
        isOpen={isOpen}
        onClick={handleChildrenClick}
      >
        {children}
      </Children>
    </AccordionWrapper>
  );
};

export default Accordion;
