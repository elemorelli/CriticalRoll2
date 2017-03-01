import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {MainPage} from "../pages/main/main";
import {HelpPage} from "../pages/help/help";
import {GlossaryPage} from "../pages/glossary/glossary";
import {SettingsPage} from "../pages/settings/settings";
import {LicensePage} from "../pages/license/license";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Start', icon: 'basket', component: MainPage},
      {title: 'Help', icon: 'bicycle', component: HelpPage},
      {title: 'Glossary', icon: 'bicycle', component: GlossaryPage},
      {title: 'Settings', icon: 'bicycle', component: SettingsPage},
      {title: 'License', icon: 'bicycle', component: LicensePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
