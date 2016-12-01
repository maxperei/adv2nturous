import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

/*
  Generated class for the ContactManager provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactManager {
  contacts: Object = {};
  url: string;
  kntkObservable = new Subject<string>();
  updateKntk$ = this.kntkObservable.asObservable();

  constructor(public http: Http) {
    if(this.isStored()) {
      this.contacts = JSON.parse(window.localStorage['contacts']);
    }
  }
  loadContacts(data){
    this.contacts = data;
    window.localStorage['contacts'] = JSON.stringify(this.contacts);
  }

  retrieveContacts(){
    this.url = "https://jsonplaceholder.typicode.com/users/";
    this.http.get(this.url).map(res => res.json()).subscribe((data) => {
      this.contacts = data;
      window.localStorage['contacts'] = JSON.stringify(this.contacts);
      this.kntkObservable.next(data);
    })
  }

  isStored(){
    return window.localStorage['contacts'];
  }

}
