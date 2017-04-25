import {Component, ViewChild} from "@angular/core";
import {MenuController, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {MainPage} from "../pages/main/main";
import {HelpPage} from "../pages/help/help";
import {GlossaryPage} from "../pages/glossary/glossary";
import {SettingsPage} from "../pages/settings/settings";
import {LicensePage} from "../pages/license/license";
import {SettingsService} from "../providers/settings-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage = MainPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public settingsService: SettingsService) {
    this.initializeApp();

    this.pages = [
      {title: 'Start', component: MainPage, icon: 'icon-d20'},
      {title: 'Help', component: HelpPage, icon: 'icon-help'},
      {title: 'Glossary', component: GlossaryPage, icon: 'icon-bookmarks'},
      {title: 'Settings', component: SettingsPage, icon: 'icon-settings'},
      {title: 'License', component: LicensePage, icon: 'icon-license'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
