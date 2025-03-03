import React from 'react';
import { ProductVariant } from '~/types/PD';

import TEMPLATE_MAP from './constants';

interface TemplateSchema {
  [key: string]: any;
}

interface TemplateProps {
  schema: TemplateSchema;
}

interface RenderTemplateParams {
  id: string;
  data: TemplateSchema;
  metaData: any;
  templateData: any;
  currentSkuData: ProductVariant;
}

class TemplateFactory {
  private templates: { [key: string]: React.ComponentType<TemplateProps> };

  constructor() {
    this.templates = TEMPLATE_MAP;
  }

  renderTemplate({
    id,
    data,
    metaData,
    templateData,
    currentSkuData,
  }: RenderTemplateParams): React.ReactElement | null {
    const TemplateComponent = this.templates[id];
    if (!TemplateComponent) {
      console.error(`Template with ID ${id} not found.`);
      return null;
    }
    return (
      <TemplateComponent
        data={data}
        metaData={metaData}
        templateData={templateData}
        currentSkuData={currentSkuData}
      />
    );
  }

  getRegisteredTemplateIds(): string[] {
    return Object.keys(this.templates);
  }
}

export default TemplateFactory;
