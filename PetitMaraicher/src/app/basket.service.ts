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
  priceBasket: number = 0;
  vegetable: Vegetable = new Vegetable;
  quantity:IHash = {};

  items:Array<Vegetable> =  new Array<Vegetable>()

  constructor() {
   }


  addToBasket(vegetable:Vegetable): void {
    console.log(this.quantity[vegetable.vegetableName])
    
    this.priceBasket = this.ConvertToInt(this.priceBasket) + this.ConvertToInt(vegetable.vegetablePrice);

    if (this.items.indexOf(vegetable) == -1) {
      this.items.push(vegetable)
      this.quantity[vegetable.vegetableName] = 1   
    }
    else {
      this.quantity[vegetable.vegetableName] = this.ConvertToInt(this.quantity[vegetable.vegetableName]) + this.ConvertToInt(1)
    }
    
  }

  displayFruitsInBasket(vegetableId:number): [String,number, number] {
    for(let i=0; i< this.items.length;i++) {
     
      return [this.items[i]['vegetableName'], this.items[i]['vegetablePrice'], this.quantity[this.items[i]['vegetableName']] ]
        
    }
    return null as any;
  }





  removeFromBasket(vegetable:Vegetable): void {
    console.log(this.quantity[vegetable.vegetableName])
    if (this.items.indexOf(vegetable) != -1 && this.quantity[vegetable.vegetableName] != 0) {
      this.priceBasket = this.ConvertToInt(this.priceBasket) - this.ConvertToInt(vegetable.vegetablePrice);
      this.quantity[vegetable.vegetableName] =  this.ConvertToInt(this.quantity[vegetable.vegetableName]) - this.ConvertToInt(1)
    }
    
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
