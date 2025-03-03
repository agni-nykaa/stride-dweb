/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import BrandLogo from '~/components/PD/BrandLogo';

import { SectionsMap } from './constants';

const PdpWrapper = styled.div`
  background-color: white;
`;

export default function ProductPage({
  data,
  metaData,
  templateData,
  currentSkuData,
}) {
  const sections = templateData.sections || [];
  return (
    <PdpWrapper>
      {sections.map((section) => {
        const Component = SectionsMap[section.name]?.component;
        const getProps = SectionsMap[section.name]?.getProps;
        const props = getProps ? getProps(data, currentSkuData, metaData) : {};
        return Component ? (
          <Component
            key={section.name}
            {...props}
          />
        ) : null;
      })}
    </PdpWrapper>
  );
}
