import { Injectable, Pipe } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { CurrencyData } from '../module/currency';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from './erroe.servive';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  static getAll() {
    throw new Error('Method not implemented.');
  }
  static getValues() {
    throw new Error('Method not implemented.');
  }
  private apiKey = '971ff67cd3ca002471fd141b';
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  getAll(
    currencyValue: number | null,
    countryFirst: string | null,
    countrySec: string | null
  ): Observable<CurrencyData> {
    return this.httpClient
      .get<CurrencyData>(
        `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair/${countryFirst}/${countrySec}/${currencyValue}`
      )
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  getValues(country: string | null): Observable<CurrencyData> {
    return this.httpClient
      .get<CurrencyData>(
        `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${country}`
      )
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
