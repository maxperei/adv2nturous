import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { AddContactPage } from "../add-contact/add-contact";
import { Authentification } from "../../providers/authentification";
import { ContactManager } from "../../providers/contact-manager";


@Component({
  templateUrl: 'contacts.html',
  selector: 'contact-page'
})
export class ContactsPage {
  selectedItem: any;
  items: Array<any>;
  user: any;
  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactManager: ContactManager, private auth: Authentification) {
    this.user = auth.user;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.contacts = contactManager.contacts;

    this.items = [];
    for(let i = 0; i < this.contacts.length; i++) {
      //if(this.user.id != this.contacts[i].id) {
        this.items.push(this.contacts[i]);
      //}
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  addContact(){
    this.navCtrl.push(AddContactPage)
  }
}
