import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs'

/*
  Generated class for the Authentification provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authentification {
  platform: any;
  data: any;
  url: string;
  user: Object = {};
  id: number;
  name: string;
  userObservable = new Subject<string>();
  updateUser$ = this.userObservable.asObservable();

  constructor(public http: Http) {
    this.http = http;
    this.data = null;
    if(this.isAuth()){
      this.user = JSON.parse(window.localStorage['user']);
    }
  }

  loadUser(data){
    this.user = data;
    window.localStorage['user'] = JSON.stringify(this.user);
  }

  retrieveUser(){
    this.url = "https://jsonplaceholder.typicode.com/users/"+Math.floor((Math.random() * 10) + 1);
    this.http.get(this.url).map(res => res.json()).subscribe((data) => {
      this.user = data;
      window.localStorage['user'] = JSON.stringify(this.user);
      this.userObservable.next(data);
    })
  }

  isAuth(){
      return window.localStorage['user'];
  }
}
