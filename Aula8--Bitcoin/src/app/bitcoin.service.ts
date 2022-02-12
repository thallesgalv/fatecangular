import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BitCoinRate {
  time: {
    updated: string;
  };
  bpi: {
    BRL: {
      rate_float: number;
    };
    USD: {
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  bitCoinRates: Array<BitCoinRate> = [];

  constructor(private http: HttpClient) {}

  getBitCoinRates() {
    this.http
      .get<BitCoinRate>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.bitCoinRates.push(data);
      });
  }

  updateBitCoinRates() {
    setInterval(() => {
      this.getBitCoinRates()
    }, 60000);
  }
}
