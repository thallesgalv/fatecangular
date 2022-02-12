import { Component, OnInit } from '@angular/core';
import { ThallesWalletService } from './thalles-wallet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Thalles Galvão';
  ra = '0050831921029';
  github = 'https://github.com/thallesgalv';

  constructor(public walletService: ThallesWalletService) {}

  ngOnInit() {
    this.walletService.getRates();
  }
}
