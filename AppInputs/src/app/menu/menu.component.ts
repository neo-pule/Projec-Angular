import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private obj:Router){

  }
    click1()
    {
      this.obj.navigateByUrl("");
    }
    click2()
    {
      this.obj.navigateByUrl("content");
    }
    click3()
    {
      this.obj.navigateByUrl("about");
    }
    click4()
    {
      this.obj.navigateByUrl("feedback");
    }
    // getProfile()
    // {
    
    //   this.obj.navigateByUrl("home");
    //      this.obj.navigateByUrl("content");
    //      this.obj.navigateByUrl("about");
    // }
  ngOnInit() {
  }

}
