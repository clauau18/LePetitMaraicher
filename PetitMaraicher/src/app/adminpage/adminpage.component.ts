import { Component, OnInit } from '@angular/core';

import {Vegetable} from '../models/vegetable';
import { VegetablesService} from '../vegetables.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  nameVegetable!: string;
  priceVegetable!: number;
  quantityVegetable: string = "1 kg";
  vegetables:any;
  constructor(public vegetablesService: VegetablesService) { }

  ngOnInit(): void {
  }


  addVegetable() {
    var vegetable: Vegetable = new Vegetable;
    
    vegetable._id = Math.random();
    vegetable.vegetableName = this.nameVegetable;
    vegetable.vegetablePrice = this.priceVegetable;
    vegetable.vegetableQuantity = this.quantityVegetable;

    this.vegetablesService.addVegetable(vegetable).subscribe(
      (vegetables:any)=>{
        this.vegetables.push(vegetable);
        this.vegetablesService.vegetables2.push(vegetable);
      },
      (error: any)=> {
        console.log("Error in addVegetables ")
      }
    )
  }
}
