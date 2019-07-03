import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
cNum;
cName;
  constructor(private obj:Router) { }
  getInfo(){
    this.obj.navigate(['/payment'], {queryParams: {cardN:'cName'}});
  }
  ngOnInit() {
  }

}
