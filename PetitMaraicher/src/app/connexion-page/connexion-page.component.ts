import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authold.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-connexion-page, form-field-error-example',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit {

  login:any = "";
  password:any = "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  
  submit():any{
    this.authService.login(this.login, this.password).subscribe(
      (userInfo:any)=>{
        this.authService.connectedUser = userInfo;
      },
      (error)=>{
        console.log("error",error)
      }
    )
  }

}
