import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThallesWalletService } from './thalles-wallet.service';
import { RouterModule } from '@angular/router';
import { ThallesCurrencyComponent } from './thalles-currency/thalles-currency.component';
import { ThallesWalletComponent } from './thalles-wallet/thalles-wallet.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'app', component: AppComponent },
      { path: 'currency', component: ThallesCurrencyComponent },
      { path: 'wallet', component: ThallesWalletComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    ThallesCurrencyComponent,
    ThallesWalletComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ThallesWalletService],
})
export class AppModule {}
