import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  addpayment(cnom:any, cnum:any, cmois:any, cannee:any, cvv:any):Observable<any>{
    return this.http.post('http://localhost:3000/payment', {cnom: cnom, cnum:cnum, cmois:cmois, cannee:cannee, cvv:cvv},{withCredentials: true});
}

}
