import {
  CLEAN_STRING_REGEX,
  DESCRIPTION_TAB,
  HOW_TO_USE_TAB,
  INGREDIENTS_TAB,
  MINIMUM_DESCRIPTION_LENGTH,
} from './constants';
import { ManufactureData, TabHeaders, TabsData } from './types';

export const getTabsValues = (
  description: string,
  ingredients: string,
  howToUse: string,
) => {
  let count = -1;
  const tabHeaders: TabHeaders = {};
  const tabsData: TabsData = {};

  const addTab = (tabName: string, value: string) => {
    if (value && value.length > MINIMUM_DESCRIPTION_LENGTH) {
      count += 1;
      tabHeaders[tabName] = count;
      tabsData[count] = { id: tabName, value: value };
    }
  };

  addTab(DESCRIPTION_TAB, description);
  addTab(INGREDIENTS_TAB, ingredients);
  addTab(HOW_TO_USE_TAB, howToUse);

  return { tabsData: tabsData, tabHeaders: tabHeaders };
};

const generateLegalInfoHtml = (
  label: string,
  content: string,
  addBreak: boolean = false,
) => {
  const cleanContent = content.replace(CLEAN_STRING_REGEX, '');
  return `<p class="mrp-n-expiry"><span style="font-weight: 600;">${label}</span>&nbsp;<span class="content-info">${cleanContent}</span></p>${
    addBreak ? '<br>' : ''
  }`;
};

export const getLegalInfoForPDP = (
  data: ManufactureData,
  countryOfManufacture: string,
) => {
  let legalInfoHtmlString = '';
  const {
    originOfCountryName,
    manufacturerName,
    manufacturerAddress,
    packerName,
    packerAddress,
    importerName,
    importerAddress,
    countryOfOriginLabel,
    manufacturerNameLabel,
    manufacturerAddressLabel,
    importerNameLabel,
    importerAddressLabel,
    packerNameLabel,
    packerAddressLabel,
  } = data;

  if (originOfCountryName) {
    legalInfoHtmlString += generateLegalInfoHtml(
      countryOfOriginLabel,
      originOfCountryName,
      true,
    );
  }

  if (manufacturerName) {
    legalInfoHtmlString += generateLegalInfoHtml(
      manufacturerNameLabel,
      manufacturerName,
    );
  }
  if (manufacturerAddress) {
    legalInfoHtmlString += generateLegalInfoHtml(
      manufacturerAddressLabel,
      manufacturerAddress,
      true,
    );
  }
  if (countryOfManufacture) {
    legalInfoHtmlString += generateLegalInfoHtml(
      'Country of Manufacture:',
      countryOfManufacture,
      true,
    );
  }
  if (importerName) {
    legalInfoHtmlString += generateLegalInfoHtml(
      importerNameLabel,
      importerName,
    );
  }
  if (importerAddress) {
    legalInfoHtmlString += generateLegalInfoHtml(
      importerAddressLabel,
      importerAddress,
      true,
    );
  }
  if (packerName) {
    legalInfoHtmlString += generateLegalInfoHtml(packerNameLabel, packerName);
  }
  if (packerAddress) {
    legalInfoHtmlString += generateLegalInfoHtml(
      packerAddressLabel,
      packerAddress,
    );
  }

  return legalInfoHtmlString;
};

export const createMrpExpiryHtml = (expiry?: string) => expiry
    ? `<p class="mrp-n-expiry" style="font-weight: 600;">Expiry Date: ${expiry}</p>`
    : '';
