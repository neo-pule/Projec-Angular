import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cNum :string;
  cName:string;
  date :string;
  nChildren;
  nAdult;
  nRoom;
  nights;
  mail:string;

    constructor(private obj:Router) { }
    getInfo(){
      this.obj.navigate(['/payment'], {queryParams: {cName: this.cName , 
        date: this.date, nChildren: this.nChildren, nAdult: this.nAdult, nRoom: this.nRoom, nights : this.nights, mail : this.mail}});
    }
  ngOnInit() {
  }

}
