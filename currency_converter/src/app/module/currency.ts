interface CurrencyRates {
  [currencyCode: string]: number;
}

export interface CurrencyData {
  base: string;
  date: string;
  rates: CurrencyRates;
  success: boolean;
  timestamp: number;
}