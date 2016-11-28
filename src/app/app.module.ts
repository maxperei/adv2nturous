import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { CustomPage } from '../pages/custom-page/custom-page';
import { Identification } from '../pages/identification/identification';
import { Profile } from "../pages/profile/profile";
import { Authentification } from "../providers/authentification";
import {ContactManager} from "../providers/contact-manager";
import {ContactsPage} from "../pages/contacts/contacts";
import {TabsPage} from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    CustomPage,
    ContactsPage,
    Identification,
    Profile,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    CustomPage,
    ContactsPage,
    Identification,
    Profile,
    TabsPage
  ],
  providers: [
    Authentification,
    ContactManager
  ]
})
export class AppModule {}
