export interface TabHeaders {
  [key: string]: number;
}

interface TabObject {
  id: string;
  value: string;
}
export interface TabsData {
  [key: number]: TabObject;
}

export interface ManufactureData {
  originOfCountryName: string;
  manufacturerName: string;
  manufacturerAddress: string;
  packerName: string;
  packerAddress: string;
  importerName: string;
  importerAddress: string;
  manufacturerNameLabel: string;
  manufacturerAddressLabel: string;
  packerNameLabel: string;
  packerAddressLabel: string;
  importerNameLabel: string;
  importerAddressLabel: string;
  countryOfOriginLabel: string;
}
