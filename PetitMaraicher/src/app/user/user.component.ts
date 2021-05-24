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

    console.log('id from comp' + this.user);
    console.log("this.egtable" + this.adminService.getUser(this._id))
    this.adminService.getUser(this._id).subscribe(
        (user: Users) => {
          this.user = user;
          console.log('vegetable XXX' + user)
        },
        (error) => {
          console.log('Error');
        }
    );

    
    
  }

  updateUser(): void {
    this.adminService.updateUser(this.user).subscribe(
        (user: Users) => {
          this.router.navigate(['/admin']);
        },
        (error:any) => {
          console.log('Error  update de User');
        }
    );
  }

  saveUser():void{
    this.adminService.saveUser(this.user);
    this.router.navigate(["/admin"])
  }

}
