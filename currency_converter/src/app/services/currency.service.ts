import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyData } from '../module/currency';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  static getAll(value: number | null) {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {}

  getAll(value: number | null): Observable<CurrencyData[]> {
    return this.httpClient.get<CurrencyData[]>(
      'https://v6.exchangerate-api.com/v6/971ff67cd3ca002471fd141b/latest/USD'
    );
  }
}
