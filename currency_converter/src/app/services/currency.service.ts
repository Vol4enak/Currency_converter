import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyData } from '../module/currency';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  static getAll() {
    throw new Error('Method not implemented.');
  }
  static getValues() {
    throw new Error('Method not implemented.');
  }
  private apiKey = '971ff67cd3ca002471fd141b';
  constructor(private httpClient: HttpClient) {}

  getAll(
    currencyValue: number | null,
    countryFirst: string | null,
    countrySec: string | null
  ): Observable<CurrencyData> {
    return this.httpClient.get<CurrencyData>(
      `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair/${countryFirst}/${countrySec}/${currencyValue}`
    );
  }
  getValues(country: string | null): Observable<CurrencyData> {
    return this.httpClient.get<CurrencyData>(
      `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${country}`
    );
  }
}
