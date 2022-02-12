import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumerosComponent } from './numeros/numeros.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'numeros', component: NumerosComponent }
    ])
  ],
  declarations: [AppComponent, NavbarComponent, NumerosComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
