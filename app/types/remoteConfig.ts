interface AccordionConfig {
  title: string;
  subTitle: string;
  isOpened: boolean;
  key: string;
}

interface CollapsePdConfig {
  couponSection: AccordionConfig;
  offerSection: AccordionConfig;
  comboSection: AccordionConfig;
  productDetails: AccordionConfig;
  returnSection: AccordionConfig;
  deliverySection: AccordionConfig;
  rnrSection: AccordionConfig;
  highlightsSection: AccordionConfig;
}
interface PdpWidgetConfig {
  [key: string]: any;
}

interface ConfigSection {
  collapsePdConfig: CollapsePdConfig;
  pdp_widget_config: PdpWidgetConfig;
}

export interface RemoteConfig {
  switches: Record<string, unknown>;
  configs: ConfigSection;
}
