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
    return this.http.get("http://localhost:3000/admin/users/"+userId);
  }

  updateUser(user: Users): Observable<any>{
    return this.http.put('http://localhost:3000/admin/users/' + user._id, user);
  }

  deleteUser(userId:any) {
    return this.http.delete("http://localhost:3000/admin/users/"+userId);
  }

  saveUser(user:Users):any {
    var index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.users.push(user);
  }
}
