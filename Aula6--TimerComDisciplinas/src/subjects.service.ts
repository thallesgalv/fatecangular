import { Injectable } from '@angular/core';

interface Subjects {
  id: number;
  name: String;
}

@Injectable()
export class SubjectsService {
  private list: Subjects[] = [];
  constructor() {}

  getList() {
    return this.list;
  }

  add(inputValue: string) {
    this.getList().push({
      id: new Date().getTime(),
      name: inputValue
    });
  }

  remove(id: number) {
    this.getList().splice(
      this.getList().indexOf(this.getList().find(e => e.id === id)),
      1
    );
  }
}
