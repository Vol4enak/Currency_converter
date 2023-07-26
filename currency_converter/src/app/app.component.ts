import { Component, OnInit } from '@angular/core';
import { CurrencyData } from './module/currency';
import { CurrencyService } from './services/currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency_converter';

  currency: CurrencyData[] = [];

  constructor(private currencyService: CurrencyService) {
    {
    }
  }
  firstFunction(value: number | null): void {
    console.log('Значение из инпута:', value);
    // Ваш код для обработки значения

    // Создайте экземпляр CurrencyService и вызовите метод getAll()
   this.currencyService.getAll(value).subscribe((currency: CurrencyData[]) => {
     console.log('Результат HTTP-запроса:', currency);
     // Обработайте полученные данные, если нужно
   });
  }

  ngOnInit(): void {
    this.currencyService.getAll(value).subscribe((currency: CurrencyData[]) => {
      this.currency = currency;
      console.log(currency);
    });
  }
}
