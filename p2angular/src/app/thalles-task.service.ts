import { Injectable } from '@angular/core';

interface Itens {
  id: number;
  name: string;
}

@Injectable()
export class ThallesTaskService {
  constructor() {}

  private list: Itens[] = [];

  getTasks() {
    return this.list;
  }

  addTask(text: string) {
    this.getTasks().push({
      id: new Date().getTime(),
      name: text,
    });
  }

  removeTask(id: number) {
    const tasks = this.getTasks();
    tasks.splice(tasks.indexOf(tasks.find((el) => el.id === id))), 1;
  }
}
