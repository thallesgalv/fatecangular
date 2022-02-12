import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'juros-simples', component: JurosSimplesComponent },
      { path: 'juros-compostos', component: JurosCompostosComponent }
    ])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    JurosSimplesComponent,
    JurosCompostosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
