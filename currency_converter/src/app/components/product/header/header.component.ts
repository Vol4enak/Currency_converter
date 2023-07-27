import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyData } from 'src/app/module/currency';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [CurrencyService],
})
export class HeaderComponent implements OnInit {
  @Input()
  usdValue!: number;
  eurValue!: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
   

    forkJoin([
      this.currencyService.getValues("USD"),
      this.currencyService.getValues("EUR"),
    ]).subscribe(([data1, data2]: [CurrencyData, CurrencyData]) => {
      console.log(
        'Полученные данные из HTTP-запроса 1:',
        data1.conversion_result
      );
      console.log(
        'Полученные данные из HTTP-запроса 2:',
        data2.conversion_result
      );
      this.usdValue = Number(data1.conversion_rates.UAH.toFixed(2));
      this.eurValue = Number(data2.conversion_rates.UAH.toFixed(2));
    });
  }
}
