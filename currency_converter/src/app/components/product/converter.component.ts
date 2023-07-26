import { Component, Input } from '@angular/core';
import { CurrencyData } from 'src/app/module/currency';
import { CurrencyService } from "../../services/currency.service";

@Component({
  selector: 'converter-app',
  templateUrl: './converter.component.html',
})
export class ConverterComponent {
  @Input()
  currency!: CurrencyData;
  value_1: { first: number | null } = { first: null };
  onInputChangeFirst(): void {
    console.log(this.value_1);
  }
  value_2: { second: number | null } = { second: null };
  onInputChangeSecond(): void {
    console.log(this.value_2);
  }

}