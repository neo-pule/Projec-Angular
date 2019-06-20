import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
 {
  name;
  surname;
  age;
  list;
  // constructor(private obj:ItemService) {
  //   this.obj.getPeople().subscribe(data => {this.list=data
  //  console.log(this.list);
  //  });
  // }
constructor(private obj:Router){

}
  getProfile()
  {
  //   console.log(this.name);
  //   console.log(this.surname);
  //   console.log(this.age);
       this.obj.navigateByUrl("content");
      //  this.obj.navigateByUrl("about");
  }
  

  ngOnInit()
   {

  }

}
