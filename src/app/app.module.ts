import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { BookShopComponent } from './book-shop/book-shop.component';
import { PaytmMallListComponent } from './paytm-mall-list/paytm-mall-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MobileRechargeComponent, BookShopComponent, PaytmMallListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
