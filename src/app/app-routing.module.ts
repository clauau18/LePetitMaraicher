import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {VegetableComponent} from './vegetable/vegetable.component';
import {BuyingPageComponent} from './buying-page/buying-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'buying',component:BuyingPageComponent},
  {path:'vegetable/:id',component:VegetableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
