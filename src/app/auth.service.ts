import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    connectedUser:any = null;
    constructor(private http: HttpClient) {}

    login(username:any, password:any):Observable<any>{
        return this.http.post("http://localhost:3000/login", {username:username, password:password}, {withCredentials: true}); 
    }

    logout():Observable<any>{
        console.log("ddd")
        return this.http.get("http://localhost:3000/login", {withCredentials: true});
    }

    register(username:any, password:any, fullName:any):Observable<any>{
        return this.http.post("http://localhost:3000/register", {username: username, password:password, fullName:fullName},{withCredentials: true});
    }

}