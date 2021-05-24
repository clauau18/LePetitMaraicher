import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  login!: string;
  adresse!: string;
  codepostal!: string;
  ville!: string;
  fullName!: string;
  password!: string;
  type!: boolean;
  
  constructor(private http: HttpClient) { }

  getUsers():any{
    return this.http.get("http://localhost:3000/admin/users")
  }
}
