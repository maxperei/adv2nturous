import { Component, ViewChild } from '@angular/core';

import {Platform, MenuController, Nav, IonicApp} from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { CustomPage } from '../pages/custom-page/custom-page';
import { ContactsPage } from '../pages/contacts/contacts';
import { Identification } from "../pages/identification/identification";
import { Profile } from "../pages/profile/profile";
import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Identification;
  pages: Array<{title: string, component: any}>;

  constructor(private app: IonicApp, private platform: Platform, private menu: MenuController) {

    this.initializeApp();

    // set our app's pages
      this.pages = [
        {title: 'Identification', component: Identification},
        {title: 'Profile', component: Profile},
        {title: 'Hello Ionic', component: HelloIonicPage},
        {title: 'Custom Page', component: CustomPage, params: {'gianni': 'guigou'}},
        {title: 'Contacts', component: ContactsPage}
      ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    //let nav = this.app.getComponent('nav');
    this.nav.setRoot(page.component, page.params);
  }
}
