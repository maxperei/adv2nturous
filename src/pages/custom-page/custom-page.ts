import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'custom-page.html'
})

export class CustomPage {
  text: string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.text = navParams.data.gianni;
    this.text = navParams.get('gianni');
  }
}
