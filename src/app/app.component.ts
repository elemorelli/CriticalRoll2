import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MainPage} from '../pages/main/main';
import {HelpPage} from '../pages/help/help';
import {GlossaryPage} from '../pages/glossary/glossary';
import {SettingsPage} from '../pages/settings/settings';
import {LicensePage} from '../pages/license/license';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage = MainPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      {title: 'Start', component: MainPage},
      {title: 'Help', component: HelpPage},
      {title: 'Glossary', component: GlossaryPage},
      {title: 'Settings', component: SettingsPage},
      {title: 'License', component: LicensePage}
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
