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
  addToBasket(): void {
    var vegetable: Vegetable = new Vegetable();
    vegetable.vegetableId = this.vegetable.vegetableId;
    vegetable.vegetableName = this.vegetable.vegetableName;
    vegetable.vegetablePrice = this.vegetable.vegetablePrice;
    vegetable.vegetableQuantity = this.vegetable.vegetableQuantity;

    this.priceBasket += vegetable.vegetablePrice;
    this.items.push(vegetable);
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
