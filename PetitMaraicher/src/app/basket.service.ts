import { Injectable } from '@angular/core';
import {Vegetable} from './models/vegetable';
import {HeaderComponent} from './header/header.component';
import {BasketPageComponent} from './basket-page/basket-page.component';


export interface IHash {
  [vegetable: string] : number;
} 

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  priceBasket: number;
  vegetable: Vegetable = new Vegetable;
  quantity:IHash = {};

  items:Array<Vegetable> =  new Array<Vegetable>()

  constructor() {
    this.priceBasket=0;
   }
   // Ajoute au panier
  addToBasket(vegetable:Vegetable): void {    
    this.priceBasket = this.ConvertToFloat(this.priceBasket) + this.ConvertToFloat(vegetable.vegetablePrice);

    if (this.items.indexOf(vegetable) == -1) {
      this.items.push(vegetable)
      this.quantity[vegetable.vegetableName] = 1   
    }
    else {
      this.quantity[vegetable.vegetableName] = this.ConvertToFloat(this.quantity[vegetable.vegetableName]) + this.ConvertToFloat(1)
    }
    
  }

  removeFromBasket(vegetable:Vegetable): void {
    console.log(this.quantity[vegetable.vegetableName])
    if (this.items.indexOf(vegetable) != -1 && this.quantity[vegetable.vegetableName] != 0) {
      this.priceBasket = this.ConvertToFloat(this.priceBasket) - this.ConvertToFloat(vegetable.vegetablePrice);
      this.quantity[vegetable.vegetableName] =  this.ConvertToFloat(this.quantity[vegetable.vegetableName]) - this.ConvertToFloat(1)
    }
    
  }

  ConvertToFloat(val:any){
    return parseFloat(val);
  }

  getPrice() {
    return  this.priceBasket;
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

}
