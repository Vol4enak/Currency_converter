import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConverterComponent } from './components/product/converter/converter.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from './services/currency.service';
import { HeaderComponent } from './components/product/header/header.component';
@NgModule({
  declarations: [AppComponent, ConverterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
