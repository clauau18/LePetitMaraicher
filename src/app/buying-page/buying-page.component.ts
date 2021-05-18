import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buying-page',
  templateUrl: './buying-page.component.html',
  styleUrls: ['./buying-page.component.scss']
})
export class BuyingPageComponent implements OnInit {
  nameVegetable: string | undefined;
  priceVegetable: string | undefined;
  quantityVegetable: string = "1 kg";

  vegetables:Array<{nameVegetable: string, priceVegetable: string, quantityVegetable: string}> =  new Array<{nameVegetable: string, priceVegetable: string, quantityVegetable: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  addVegetable(): void {
    var vegetable: any = {
      id:Math.random(),
      nameVegetable: this.nameVegetable,
      priceVegetable: this.priceVegetable,
      quantityVegetable: this.quantityVegetable
    }
    this.nameVegetable = ""; // sera bindé dans la page HTML
    this.priceVegetable = "";
    this.vegetables.push(vegetable);
  }

  deleteNode(vegetable:any): void {
    var index = this.vegetables.indexOf(vegetable);
    this.vegetables.splice(index,1);
  }

}
