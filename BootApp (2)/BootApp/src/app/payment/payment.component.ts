import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  @Input() cName
  @Input() cNum
  @Input()  date
  @Input()  nChildren
  @Input() nAdult
  @Input() nRoom
  @Input() nights
  @Input() mail
   expY :string;

   expM:string;
  @Input() number


  

  constructor( private addr:ActivatedRoute) { 
  
  }
 
  ngOnInit() {
    this.addr.queryParams.subscribe(data => {
      console.log(data)

      this.cName = data.cName
      console.log(this.cName),
      this.cNum = data.cNum
      console.log(this.cName),
      this.date = data.date
      console.log(this.cName),
      this.nChildren = data.nChildren
      console.log(this.cName)
      ,this.nRoom = data.nRoom
      console.log(this.nRoom)
      this.nights = data.nights
      console.log(this.nights),
      this.mail = data.mail
      console.log(this.mail)
    });
  }

}
