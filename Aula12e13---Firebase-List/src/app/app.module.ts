import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAENY2G0xD9bHjXfTb_FtHcP_CmCzv5Svc',
      authDomain: 'thallesangular.firebaseapp.com',
      projectId: 'thallesangular',
      storageBucket: 'thallesangular.appspot.com',
      messagingSenderId: '554920460224',
      appId: '1:554920460224:web:7ed48280f70bb321525225',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [AppComponent, HelloComponent, IndexComponent, FirelistComponent],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
