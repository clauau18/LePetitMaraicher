import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit {

  username:any = "";
  password:any = "";

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  submit():any{
    this.authService.login(this.username, this.password).subscribe(
      (userInfo:any)=>{
        this.authService.connectedUser = userInfo;
      },
      (error)=>{
        console.log("error",error)
      }
    )
  }

}
