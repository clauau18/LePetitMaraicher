import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { BuyingPageComponent } from './buying-page/buying-page.component';
import { CommandResumeComponent } from './command-resume/command-resume.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VegetableComponent,
    BuyingPageComponent,
    CommandResumeComponent,
    ConnexionPageComponent,
    BasketPageComponent,
    SignupPageComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
