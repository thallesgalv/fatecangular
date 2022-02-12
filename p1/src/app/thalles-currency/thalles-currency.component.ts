import { Component, OnInit } from '@angular/core';
import { ThallesWalletService } from '../thalles-wallet.service';

@Component({
  selector: 'app-thalles-currency',
  templateUrl: './thalles-currency.component.html',
  styleUrls: ['./thalles-currency.component.css'],
})
export class ThallesCurrencyComponent implements OnInit {
  constructor(public walletService: ThallesWalletService) {}

  ngOnInit() {
    this.walletService.getRates();
    this.walletService.updateRates();
  }
}
