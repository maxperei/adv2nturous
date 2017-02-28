import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactManager } from '../../providers/contact-manager'


@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  card: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private contactManager: ContactManager) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  ionViewDidLoad() {
    this.card = this.formBuilder.group({
      id: this.selectedItem.id,
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
    this.contactManager.loadContacts(this.card);
  }
}
