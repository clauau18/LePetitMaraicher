import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  _id!:any;
  user!:Users;

  constructor(private route:ActivatedRoute, private router: Router,  public adminService: AdminService) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id');
    this.user = { login: '', adresse: '', codepostal : "", ville: "", fullName:""};
  }

  saveUser():void{
    this.adminService.saveUser(this.user);
    this.router.navigate(["/admin"])
  }

}
