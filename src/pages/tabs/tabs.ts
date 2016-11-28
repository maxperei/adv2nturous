import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { ContactManager } from '../../providers/contact-manager'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  contacts: any = ContactsPage;

  constructor() {

  }
}
