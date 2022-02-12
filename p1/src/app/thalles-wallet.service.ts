import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Coins {
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
    EUR: {
      rate_float: number;
    };
  };
}

type status = '🟢' | '🔴' | '➖';

@Injectable()
export class ThallesWalletService {
  coinRates: Coins[] = [];
  brlRate: Coins[] = [];

  lastBRLRate: number;
  lastUSDRate: number;
  lastEURRate: number;
  previusValue: number;

  status: status;

  balance = 0;
  transationValue = 0;

  constructor(private http: HttpClient) {}

  getRates() {
    this.http
      .get<Coins>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe((data) => {
        if (data) {
          this.coinRates.push(data);
          this.lastEURRate = data.bpi.EUR.rate_float;
        }
      });

    if (this.coinRates.length !== 0) {
      this.http
        .get<Coins>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
        .subscribe((data) => {
          this.brlRate.push(data);

          this.lastBRLRate = data.bpi.BRL.rate_float;
          this.lastUSDRate = data.bpi.USD.rate_float;

          if (this.brlRate.length > 1) {
            this.previusValue =
              this.brlRate[this.brlRate.length - 2]?.bpi.BRL.rate_float;

            if (this.lastBRLRate > this.previusValue) this.status = '🟢';
            if (this.lastBRLRate < this.previusValue) this.status = '🔴';
            if (this.lastBRLRate == this.previusValue) this.status = '➖';
          }
        });
    }
  }

  updateRates() {
    setInterval(() => {
      this.getRates();
    }, 60000);
  }

  getBalance() {
    if (this.brlRate.length !== 0) {
      return {
        BRL: this.balance * this.lastBRLRate,
        USD: (this.balance * this.lastUSDRate).toFixed(2),
        EUR: (this.balance * this.lastEURRate).toFixed(2),
      };
    }
  }

  addValue() {
    this.balance += this.transationValue / this.lastBRLRate;
    this.transationValue = 0;
  }

  removeValue() {
    this.balance -= this.transationValue / this.lastBRLRate;
    this.transationValue = 0;
  }
}
