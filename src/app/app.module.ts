import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VegetableDisplayComponent } from './vegetable-display/vegetable-display.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { BuyingPageComponent } from './buying-page/buying-page.component';
import { CommandResumeComponent } from './command-resume/command-resume.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VegetableDisplayComponent,
    VegetableComponent,
    BuyingPageComponent,
    CommandResumeComponent,
    ConnexionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
