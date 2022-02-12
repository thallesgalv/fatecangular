import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ThallesTaskComponent } from './thalles-task/thalles-task.component';
import { ThallesHomeComponent } from './thalles-home/thalles-home.component';
import { ThallesTaskService } from './thalles-task.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ThallesHomeComponent },
      { path: 'tarefas', component: ThallesTaskComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ThallesTaskComponent,
    ThallesHomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ThallesTaskService],
})
export class AppModule {}
