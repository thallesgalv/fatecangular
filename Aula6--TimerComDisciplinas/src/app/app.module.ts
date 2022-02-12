import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimerService } from '../timer.service';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsService } from '../subjects.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, SubjectsComponent],
  bootstrap: [AppComponent],
  providers: [TimerService, SubjectsService]
})
export class AppModule {}
