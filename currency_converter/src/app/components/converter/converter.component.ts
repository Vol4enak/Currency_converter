import { Component, Input } from '@angular/core';
import { CurrencyData } from '../../module/currency';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'converter-app',
  templateUrl: './converter.component.html',
  providers: [CurrencyService],
})
export class ConverterComponent {
  @Input()
  currency!: CurrencyData;
  selectedFirstCurrency: string = 'USD';
  selectedSecondCurrency: string = 'USD';
  value_1: number | null = null;
  value_2: number | null = null;
  constructor(private currencyService: CurrencyService) {}

  onValueChange(value: number | null, isFirstInput: boolean): void {
    if (value === null) {
      this.value_1 = null;
      this.value_2 = null;
    } else {
      if (isFirstInput) {
        this.value_1 = value;
      } else {
        this.value_2 = value;
      }
      this.makeHttpRequest(isFirstInput);
    }
  }

  onCurrencyChange(selectedCurrency: string, isFirstCurrency: boolean): void {
    if (isFirstCurrency) {
      this.selectedFirstCurrency = selectedCurrency;
    } else {
      this.selectedSecondCurrency = selectedCurrency;
    }
    this.makeHttpRequest(true);
  }

  makeHttpRequest(isValue1: boolean): void {
    if (
      (isValue1 && this.value_1 !== null) ||
      (!isValue1 && this.value_2 !== null)
    ) {
      const amount = isValue1 ? this.value_1 : this.value_2;
      const firstCurrency = isValue1
        ? this.selectedFirstCurrency
        : this.selectedSecondCurrency;
      const secondCurrency = isValue1
        ? this.selectedSecondCurrency
        : this.selectedFirstCurrency;

      this.currencyService
        .getAll(amount, firstCurrency, secondCurrency)
        .subscribe((data: CurrencyData) => {
          const conversionResult = Number(data.conversion_result.toFixed(5));
          if (isValue1) {
            this.value_2 = conversionResult;
          } else {
            this.value_1 = conversionResult;
          }
        });
    }
  }
}
