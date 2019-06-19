import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http :HttpClient){

  }
  getPeople(){
    return this.http.get("http://jsonplaceholder.typicode.com/users");
  }

}
