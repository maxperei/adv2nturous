import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Authentification } from "../../providers/authentification";
import { Identification } from "../identification/identification";
import { ContactsPage } from "../contacts/contacts";
import { ContactManager } from "../../providers/contact-manager";

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
  user: Object = {};
  data: Object = {};
  constructor(private navCtrl: NavController, private navParams: NavParams, private auth: Authentification, private cM: ContactManager) {
    this.user = auth.user;
    cM.retrieveContacts();
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
    this.data = this.cM.contacts;
    this.cM.loadContacts(this.data);
    this.navCtrl.push(ContactsPage);
  }

  update(){
    this.auth.loadUser(this.user);
  }

  logout(){
    window.localStorage.clear();
    this.here();
  }
}
