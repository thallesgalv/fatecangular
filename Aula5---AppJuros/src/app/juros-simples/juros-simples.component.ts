import { Component, OnInit } from '@angular/core';

interface TableItem {
  mes: number;
  juros: number;
}

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  valor = 100;
  taxa = 1;
  meses = 6;

  constructor() {}

  ngOnInit() {}

  getTable() {
    let list: TableItem[] = [];
    for (let i = 0; i <= this.meses; i++) {
      list.push({
        mes: i,
        juros: +(this.valor + ((this.valor * this.taxa) / 100) * i).toFixed(2)
      });
    }
    return list;
  }
}
