import { Injectable } from '@angular/core';
import {Vegetable} from './models/vegetable';
import {HeaderComponent} from './header/header.component';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  priceBasket: number;
  vegetable!: Vegetable;

  items:Array<Vegetable> =  new Array<Vegetable>()

  constructor() {
    this.priceBasket=0;
   }


  addToBasket(vegetable:Vegetable): void {
    console.log(vegetable.vegetablePrice)

    this.priceBasket = this.ConvertToInt(this.priceBasket) + this.ConvertToInt(vegetable.vegetablePrice);
    this.items.push(vegetable);
  }

  removeFromBasket(vegetable:Vegetable): void {
    console.log(vegetable.vegetablePrice)

    this.priceBasket = this.ConvertToInt(this.priceBasket) - this.ConvertToInt(vegetable.vegetablePrice);
    this.items.push(vegetable);
  }

  ConvertToInt(val:any){
    return parseInt(val);
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
