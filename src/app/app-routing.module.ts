import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {VegetableComponent} from './vegetable/vegetable.component';
import {BuyingPageComponent} from './buying-page/buying-page.component';
import {ConnexionPageComponent} from './connexion-page/connexion-page.component';
import {CommandResumeComponent} from './command-resume/command-resume.component';
import {BasketPageComponent} from './basket-page/basket-page.component';
import {PaymentPageComponent} from './payment-page/payment-page.component';
import {SignupPageComponent} from './signup-page/signup-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'buying',component:BuyingPageComponent},
  {path:'vegetable/:id',component:VegetableComponent},
  {path:'connexion',component:ConnexionPageComponent},
  {path:'command',component:CommandResumeComponent},
  {path:'basket',component:BasketPageComponent},
  {path:'payment',component:PaymentPageComponent},
  {path:'signup',component:SignupPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
