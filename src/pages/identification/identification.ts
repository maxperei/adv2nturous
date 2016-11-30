import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from "../profile/profile";
import { Authentification } from "../../providers/authentification"

/*
  Generated class for the Identification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-identification',
  templateUrl: 'identification.html'
})
export class Identification {
  data: Object = {};
  name: string;

  constructor(private navCtrl: NavController, private auth: Authentification) {
  }

  ionViewDidLoad(){
    if(this.auth.isAuth()){
      this.there();
    }
  }

  there(){
    this.navCtrl.setRoot(Profile);
  }

  login() {
    this.auth.retrieveUser();
    this.auth.updateUser$.subscribe(() => {
      this.there();
    });
  }
}
