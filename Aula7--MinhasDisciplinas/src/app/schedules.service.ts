import { Injectable } from '@angular/core';

interface Subjects {
  id: number;
  weekDay: String;
  time: String;
  name: String;
  p1?: String;
  p2?: String;
}

@Injectable()
export class SchedulesService {
  private schedulesList: Subjects[] = [];

  constructor() {}

  getList() {
    if (localStorage.getItem('list')) {
      this.schedulesList = JSON.parse(localStorage.getItem('list'));
    }
    return this.schedulesList;
  }

  add(inputWeekDay: String, inputTime: String, inputName: String) {
    this.getList().push({
      id: new Date().getTime(),
      weekDay: inputWeekDay,
      time: inputTime,
      name: inputName,
      p1: '0',
      p2: '0'
    });
    localStorage.setItem('list', JSON.stringify(this.schedulesList));
  }

  updateGrades(inputP1: String, inputP2: String, id: number) {
    this.schedulesList[this.schedulesList.findIndex(e => e.id === +id)].p1 = inputP1
    this.schedulesList[this.schedulesList.findIndex(e => e.id === +id)].p2 = inputP2
    localStorage.setItem('list', JSON.stringify(this.schedulesList));
  }

  remove(id: number) {
    this.schedulesList.splice(
      this.schedulesList.findIndex(e => e.id === id),
      1
    );
    localStorage.setItem('list', JSON.stringify(this.schedulesList));
  }
}
