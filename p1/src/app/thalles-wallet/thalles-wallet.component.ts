import { Component, OnInit } from '@angular/core';
import { ThallesWalletService } from '../thalles-wallet.service';

@Component({
  selector: 'app-thalles-wallet',
  templateUrl: './thalles-wallet.component.html',
  styleUrls: ['./thalles-wallet.component.css'],
})
export class ThallesWalletComponent implements OnInit {
  constructor(public walletService: ThallesWalletService) {}

  ngOnInit() {
    this.walletService.getRates();
  }
}
