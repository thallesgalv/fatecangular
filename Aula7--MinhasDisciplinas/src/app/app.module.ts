import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GradesComponent } from './grades/grades.component';
import { SchedulesService } from './schedules.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'grades', component: GradesComponent }
    ])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubjectsComponent,
    GradesComponent
  ],
  bootstrap: [AppComponent],
  providers: [SchedulesService]
})
export class AppModule {}
