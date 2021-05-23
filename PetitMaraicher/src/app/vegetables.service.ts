import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Vegetable} from './models/vegetable';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {

  vegetables:Array<Vegetable> =  new Array<Vegetable>();
  vegetables2:any;
  constructor( private http: HttpClient) {}

  ngOnInit(): void {
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
