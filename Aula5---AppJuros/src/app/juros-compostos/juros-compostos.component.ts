import { Component, OnInit } from '@angular/core';

interface TableItem {
  mes: number;
  juros: number;
}

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css']
})
export class JurosCompostosComponent implements OnInit {
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
        juros: +(this.valor * (1 + this.taxa / this.valor) ** i).toFixed(2)
      });
    }
    return list;
  }
}
