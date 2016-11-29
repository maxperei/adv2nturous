import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  card: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  ionViewDidLoad() {
    this.card = this.formBuilder.group({
      username: [''],
      email: [''],
      phone: [''],
      website: [''],
      street: [''],
      city: [''],
      zip: [''],
      cname: [''],
      baseline: ['']
    });
  }
  logForm(){
    console.log(this.card.value)
  }
}
