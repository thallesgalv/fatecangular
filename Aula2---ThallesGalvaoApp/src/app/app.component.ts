import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'meu-componente',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Thalles Galvao';
  email = 'thallesgalv@gmail.com'
  githubUser = 'thallesgalv'
}
