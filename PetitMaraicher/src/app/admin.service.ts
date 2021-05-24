import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  
  constructor(private http: HttpClient) { }

  getUsers():any{
    return this.http.get("http://localhost:3000/admin/users")
  }

  addUser(user:Users):any{
    return this.http.post("http://localhost:3000/admin/users",user)
  }
}
