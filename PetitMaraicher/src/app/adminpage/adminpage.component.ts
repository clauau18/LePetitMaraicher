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
  image:any;

  login!: string;
  adresse!: string;
  codepostal!: string;
  ville!: string;
  fullName!: string;
  password!: string;
  type!: boolean;
  
  constructor(public vegetablesService: VegetablesService, public adminService: AdminService) { }
  
  users!:Array<Users>;

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
      (users:any)=>{
        this.users.push(users);
        //this.vegetablesService.vegetables2.push(vegetable);
      },
      (error: any)=> {
        console.log("Error in addVegetables ")
      }
    )
  }

  addUser() {
    var user: Users = new Users;
    
    user._id = Math.random();
    user.login = this.login;
    user.adresse = this.adresse;
    user.codepostal = this.codepostal;
    user.password = this.password;
    user.fullName = this.fullName


    this.adminService.addUser(user).subscribe(
      (users:any)=>{
        this.users.push(user);
        //this.vegetablesService.vegetables2.push(vegetable);
      },
      (error: any)=> {
        console.log("Error in addUser ")
      }
    )
  }

  saveUser(user:Users):any {
    var index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.users.push(user);
  }

  deleteUser(user:Users){
    this.adminService.deleteUser(user._id).subscribe(
      () => {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
      },
      (error) => {
        console.log('Delete error');
      }
    )
  }
}
