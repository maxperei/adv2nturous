import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Authentification } from "../../providers/authentification";
import { Identification } from "../identification/identification";
import { ContactsPage } from "../contacts/contacts";
import { ContactManager } from "../../providers/contact-manager";
import { Subject } from 'rxjs';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  user: any;
  data: any;
  subscribe: any;
  constructor(private navCtrl: NavController, private navParams: NavParams, private auth: Authentification, private contactManager: ContactManager) {
    this.user = auth.user;
  }

  ionViewDidLoad(){
    if(!this.auth.isAuth()){
      this.here();
    }
  }

  here(){
    this.navCtrl.setRoot(Identification);
  }


  contacts(){
    this.contactManager.retrieveContacts();
    this.subscribe = this.contactManager.updateKntk$.subscribe(() => {
      this.navCtrl.push(ContactsPage);
      this.subscribe.unsubscribe();
    })
  }

  update(){
    this.auth.loadUser(this.user);
  }

  logout(){
    window.localStorage.clear();
    this.here();
  }
}
