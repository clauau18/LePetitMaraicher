import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  cnom:any = "";
  cnum:any = "";
  cmois:any="";
  cvv:any="";
  cannee:any="";

  constructor(public paymentservice: PaymentService) { 
    
  }

  ngOnInit(): void {
  }

  submit():any{
    this.paymentservice.addpayment(this.cnom, this.cnum, this.cmois, this.cannee, this.cvv).subscribe(
      (userInfo:any)=>{
        this.paymentservice = userInfo;
      },
      (error)=>{
        console.log("error",error)
      }
    )
  }


}
