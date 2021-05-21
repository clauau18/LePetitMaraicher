import { Injectable } from '@angular/core';

import {Vegetable} from './models/vegetable';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {
  vegetableId!: number;
  nameVegetable!: string;
  priceVegetable!: number;
  quantityVegetable: string = "1 kg";

  vegetables:Array<Vegetable> =  new Array<Vegetable>();

  constructor() { }

  ngOnInit(): void {
  }

  addVegetable(): void {
    var vegetable: Vegetable = new Vegetable();
    vegetable.vegetableId = Math.random();
    vegetable.vegetableName = this.nameVegetable;
    vegetable.vegetablePrice = this.priceVegetable;
    vegetable.vegetableQuantity = this.quantityVegetable;

    this.nameVegetable = ""; // sera bindé dans la page HTML
    this.priceVegetable = 0;
    this.vegetables.push(vegetable);
  }

  deleteVegetable(vegetable:Vegetable): void {
    var index = this.vegetables.indexOf(vegetable);
    this.vegetables.splice(index,1);
  }

  getVegetable(vegetableId:number): Vegetable {
    for(let i=0; i< this.vegetables.length;i++) {
      var vegetable = this.vegetables[i];
      if (vegetable.vegetableId == vegetableId)
        return vegetable;
    }
    return null as any;
  }

  saveVegetable(vegetable:Vegetable):any {
    var index = this.vegetables.indexOf(vegetable);
    this.vegetables.splice(index,1);
    this.vegetables.push(vegetable);
  }

}
