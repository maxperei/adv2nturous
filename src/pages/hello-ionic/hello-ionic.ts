import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomPage } from "../custom-page/custom-page";

@Component({
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(private navCtrl: NavController) {

  }

  zyVa(){
    this.navCtrl.push(CustomPage, { 'gianni' : 'guigou' });
  }
}
