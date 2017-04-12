import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {MainPage} from '../pages/main/main';
import {HelpPage} from '../pages/help/help';
import {GlossaryPage} from '../pages/glossary/glossary';
import {SettingsPage} from '../pages/settings/settings';
import {LicensePage} from '../pages/license/license';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    HelpPage,
    GlossaryPage,
    SettingsPage,
    LicensePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    HelpPage,
    GlossaryPage,
    SettingsPage,
    LicensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
