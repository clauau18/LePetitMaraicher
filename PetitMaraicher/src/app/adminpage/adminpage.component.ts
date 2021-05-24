import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Users } from '../models/users';

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
  image:any;

  
  constructor(public vegetablesService: VegetablesService, public adminService: AdminService) { }
  users!:any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    console.log("YOOOOOOOOOOOOO")
    this.adminService.getUsers().subscribe(
      (users:Array<Users>)=>{
        this.users = users;
        console.log(users)
        console.log(this.users)
      },
      (error: any)=> {
        console.log("Error in getVegetables ")
      }
    )
    
  }

  addVegetable() {
    var vegetable: Vegetable = new Vegetable;
    
    vegetable._id = Math.random();
    vegetable.vegetableName = this.nameVegetable;
    vegetable.vegetablePrice = this.priceVegetable;
    vegetable.vegetableQuantity = this.quantityVegetable;
    vegetable.vegetableImage = this.image;


    this.vegetablesService.addVegetable(vegetable).subscribe(
      (vegetables:any)=>{
        this.vegetables.push(vegetable);
        //this.vegetablesService.vegetables2.push(vegetable);
      },
      (error: any)=> {
        console.log("Error in addVegetables ")
      }
    )
  }
}
