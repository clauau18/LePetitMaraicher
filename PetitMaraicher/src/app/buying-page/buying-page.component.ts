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

  vegetables:any
  ngOnInit(): void {
    this.getVegetables();
  }

  getVegetables() {
    this.vegetablesService.getVegetables().subscribe(
      (vegetables:any)=>{
        this.vegetables = vegetables;
      },
      (error: any)=> {
        console.log("Error in getVegetables ")
      }
    )
    
  }

  deleteVegetable(vegetable:Vegetable){
    this.vegetablesService.deleteVegetable(vegetable._id).subscribe(
      () => {
        const index = this.vegetables.indexOf(vegetable);
        this.vegetables.splice(index, 1);
      },
      (error) => {
        console.log('Delete error');
      }

      
    )
  }


}
