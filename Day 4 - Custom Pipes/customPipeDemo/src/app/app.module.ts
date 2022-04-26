import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuestList } from './Components/guest.component';
import { CommonModule } from '@angular/common';
import { Greetingspipe } from './Pipes/guestgreetings.pipes';
import { Stocks } from './Components/Stocks/stocks.component';
import { StockPipe } from './Pipes/stock.pipe';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductdiscountPipe } from './Pipes/productdiscount.pipe';

@NgModule({
  declarations: [
    AppComponent, GuestList, Greetingspipe, Stocks, StockPipe, EmployeeComponent, ProductsComponent,
     ProductdiscountPipe
  ],
  imports: [
    BrowserModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
