import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Vegetable} from './models/vegetable';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {

  vegetables:Array<Vegetable> =  new Array<Vegetable>();
  vegetables2:any;

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
  }
  
  
 

  deleteVegetable(vegetableId:any) {
    return this.http.delete("http://localhost:3000/buying/"+vegetableId);
  }

  getVegetable2(vegetableId:number): Vegetable {
    for(let i=0; i< this.vegetables.length;i++) {
      var vegetable = this.vegetables[i];
      if (vegetable._id == vegetableId)
        return vegetable;
    }
    return null as any;
  }

  getVegetable(vegetableId:any):Observable<any> {
    return this.http.get("http://localhost:3000/buying/"+vegetableId);
  }

  addVegetable(vegetable:Vegetable):any {
    return this.http.post("http://localhost:3000/buying", vegetable);

  }
  
  getVegetables():any{
    return this.http.get('http://localhost:3000/buying');
  }
  updateVegetable(vegetable: Vegetable): Observable<any>{
    return this.http.put('http://localhost:3000/buying/' + vegetable._id, vegetable);
  }

  saveVegetable(vegetable:Vegetable):any {
    var index = this.vegetables.indexOf(vegetable);
    this.vegetables.splice(index,1);
    this.vegetables.push(vegetable);
  }

}
