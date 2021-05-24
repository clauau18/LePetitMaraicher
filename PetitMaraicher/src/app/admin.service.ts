import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  users:Array<Users> = new Array<Users>();
  
  constructor(private http: HttpClient) { }

  getUsers():any{
    return this.http.get("http://localhost:3000/admin/users")
  }

  addUser(user:Users):any{
    return this.http.post("http://localhost:3000/admin/users",user)
  }

  getUser(userId:any):Observable<any> {
    
    console.log("USERID : "+userId);
    return this.http.get("http://localhost:3000/buying/"+userId);
  }

  saveUser(user:Users):any {
    var index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.users.push(user);
  }
}
