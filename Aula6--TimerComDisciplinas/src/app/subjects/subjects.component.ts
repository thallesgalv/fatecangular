import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  inputValue: '';

  constructor(public subjectService: SubjectsService) {
    subjectService.add('Desenvolvimento para Servidores II');
    subjectService.add('Desenvolvimento para dispositivos móveis I');
    subjectService.add('Projeto do trabalho de graduação em Sistemas');
    subjectService.add('Tópicos Especiais em Sistemas para Internet II');
  }

  handleClick() {
    this.subjectService.add(this.inputValue);
    this.inputValue = '';
  }

  ngOnInit() {}
}
