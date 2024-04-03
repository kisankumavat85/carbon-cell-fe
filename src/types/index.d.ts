interface Window {
  ethereum: any;
}

declare type Population = {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
};

declare type BitcoinPriceIndex = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};

declare type BitcoinPriceIndexData = {
  [key: string]: BitcoinPriceIndex;
};
