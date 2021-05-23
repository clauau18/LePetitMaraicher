import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
  }
  
  
  addVegetable2(): void {
    var vegetable: Vegetable = new Vegetable();
    vegetable._id = Math.random();
    vegetable.vegetableName = this.nameVegetable;
    vegetable.vegetablePrice = this.priceVegetable;
    vegetable.vegetableQuantity = this.quantityVegetable;

 
   this.vegetables.push(vegetable);
 }

  deleteVegetable(vegetable:Vegetable): void {
    var index = this.vegetables.indexOf(vegetable);
    this.vegetables.splice(index,1);
  }

  getVegetable(vegetableId:number): Vegetable {
    for(let i=0; i< this.vegetables.length;i++) {
      var vegetable = this.vegetables[i];
      if (vegetable._id == vegetableId)
        return vegetable;
    }
    return null as any;
  }

  addVegetable(vegetable:Vegetable):any {
    return this.http.post("http://localhost:3000/buying", vegetable);

  }
  
  getVegetables():any{
    return this.http.get('http://localhost:3000/buying');
  }

  saveVegetable(vegetable:Vegetable):any {
    var index = this.vegetables.indexOf(vegetable);
    this.vegetables.splice(index,1);
    this.vegetables.push(vegetable);
  }

}
