import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: number = 0;
  public interval: number;

  constructor() {}

  start(ms: number) {
    if (!this.timer && this.interval) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  reset() {
    this.counter = 0;
  }

  getCount() {
    return this.counter;
  }
}
