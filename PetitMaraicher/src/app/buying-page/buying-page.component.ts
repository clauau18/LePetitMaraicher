import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Vegetable } from '../models/vegetable';
import { VegetablesService} from '../vegetables.service'


@Component({
  selector: 'app-buying-page',
  templateUrl: './buying-page.component.html',
  styleUrls: ['./buying-page.component.scss']
})
export class BuyingPageComponent implements OnInit {
  
  vegetableId!: number;
  nameVegetable!: string;
  priceVegetable!: number;
  quantityVegetable: string = "1 kg";

  constructor(public vegetablesService: VegetablesService, public basketService: BasketService) { }

  //vegetables:Array<Vegetable> =  new Array<Vegetable>();
  vegetables:any
  ngOnInit(): void {
    this.getVegetables();
  }

  getVegetables() {
    this.vegetablesService.getVegetables().subscribe(
      (vegetables:any)=>{
        console.log("getVegetables PRINT");
        this.vegetables = vegetables;
        console.log(vegetables)
        console.log(this.vegetables)
      },
      (error: any)=> {
        console.log("Error in getVegetables ")
      }
    )
    
  }


}
