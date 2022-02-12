import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  n = 5;

  constructor() {}

  ngOnInit() {}

  getRandomNumbers() {
    let list: number[] = [];
    for (let i = 0; i < this.n; i++) {
      list.push(Math.ceil(Math.random() * 100));
    }
    return list;
  }
}
