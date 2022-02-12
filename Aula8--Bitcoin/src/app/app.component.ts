import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient, public bitCoinService: BitcoinService) {}

  ngOnInit() {
    this.getBitCoinRates()
    this.updateBitCoinRates()
  }

  getBitCoinRates() {
    this.bitCoinService.getBitCoinRates();
  }

  updateBitCoinRates() {
    this.bitCoinService.updateBitCoinRates();
  }
}
