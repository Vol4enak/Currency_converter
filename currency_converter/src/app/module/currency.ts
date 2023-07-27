export interface CurrencyRates {
  [currencyCode: string]: number;
}

export interface CurrencyData {
  result: string;
  provider: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  time_eol_unix: number;
  base_code: string;
  conversion_result: Number;
  conversion_rates: {
    [currencyCode: string]: number;
  };
}
