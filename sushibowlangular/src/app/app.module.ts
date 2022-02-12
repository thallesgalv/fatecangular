import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { ProductsService } from './products.service';
import { GlobalService } from './global.service';
import { RestaurantsService } from './restaurants.service';
import { TitleComponent } from './title/title.component';
import { ModalComponent } from './modal/modal.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsregistrationComponent } from './productsregistration/productsregistration.component';
import { RestaurantsregistrationComponent } from './restaurantsregistration/restaurantsregistration.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    RestaurantsComponent,
    HeaderComponent,
    LoginComponent,
    TitleComponent,
    ModalComponent,
    RegistrationComponent,
    ProductsregistrationComponent,
    RestaurantsregistrationComponent,
    StudentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductsService, GlobalService, RestaurantsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
