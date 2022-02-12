import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/interfaces';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  title = 'Alunos';
  findImage = '';

  students: Student[] = [
    {
      nome: 'Felipe Gameiro',
      ra: '0050831921006',
      github: 'gameiro666',
    },
    {
      nome: 'Karoline Teodoro',
      ra: '0050831921012',
      github: 'kateodoros',
    },
    {
      nome: 'Pedro Salvino',
      ra: '0050831921022',
      github: 'PedroSalvino',
    },
    {
      nome: 'Thalles Galvão',
      ra: '0050831921029',
      github: 'thallesgalv',
    },
    {
      nome: 'Wesley Nascimento',
      ra: '0050831921032',
      github: 'wesley1323',
    },
  ];

  constructor(private http: HttpClient) {}

  getImages(user: String) {
    this.http
      .get<any>(`https://api.github.com/users/${user}`)
      .subscribe((data) => {
        if (data) {
          if (data) {
            this.students!.find((i) => i.github === user)!.imagem =
              data.avatar_url;
          }
        }
      });
  }

  ngOnInit(): void {
    this.getImages('gameiro666');
    this.getImages('thallesgalv');
    this.getImages('wesley1323');
    this.getImages('kateodoros');
    this.getImages('PedroSalvino');
  }
}
