import {Component, ViewChild} from "@angular/core";
import {MenuController, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {Storage} from "@ionic/storage";

import {MainPage} from "../pages/main/main";
import {HelpPage} from "../pages/help/help";
import {GlossaryPage} from "../pages/glossary/glossary";
import {SettingsPage} from "../pages/settings/settings";
import {LicensePage} from "../pages/license/license";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;
  rootPage: any = MainPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public storage: Storage) {
    this.initializeApp();

    this.pages = [
      {title: 'Help', component: HelpPage, icon: 'app-icon-help'},
      {title: 'Glossary', component: GlossaryPage, icon: 'app-icon-glossary'},
      {title: 'Settings', component: SettingsPage, icon: 'app-icon-settings'},
      {title: 'License', component: LicensePage, icon: 'app-icon-license'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.storage.get('introShown').then((result) => {
        if (!result) {
          this.rootPage = MainPage;
        } else {
          this.rootPage = HelpPage;
          this.storage.set('introShown', true);
        }
        this.splashScreen.hide();
      });
    });
  }

  openRootPage() {
    this.menu.close();
    this.nav.setRoot(this.rootPage);
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component);
  }
}
