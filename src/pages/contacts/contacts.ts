import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ContactManager } from "../../providers/contact-manager";
import { Authentification } from "../../providers/authentification";


@Component({
  templateUrl: 'contacts.html',
  selector: 'contact-page'
})
export class ContactsPage {
  selectedItem: any;
  items: Array<{id: string, name: string}>;
  user: Object = {};
  contacts: Object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private cM: ContactManager, private auth: Authentification) {
    this.user = auth.user;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.contacts = cM.contacts;

    this.items = [];
    for(let i = 0; i < this.contacts.length; i++) {
      this.items.push({
        id: this.contacts[i].id,
        name: this.contacts[i].name
      });
    }
  }

  itemTapped(event, item) {
    console.log(item);
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
