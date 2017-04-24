import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {SafePipe} from "../pipes/safe-pipe";
import {MainPage} from "../pages/main/main";
import {Buttons} from "../pages/main/buttons/buttons";
import {Effects} from "../pages/main/effects/effects";
import {HelpPage} from "../pages/help/help";
import {GlossaryPage} from "../pages/glossary/glossary";
import {SettingsPage} from "../pages/settings/settings";
import {LicensePage} from "../pages/license/license";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {EffectsService} from "../providers/effects-service";
import {RuletipsService} from "../providers/ruletips-service";

@NgModule({
  declarations: [
    MyApp,
    SafePipe,
    MainPage,
    Buttons,
    Effects,
    HelpPage,
    GlossaryPage,
    SettingsPage,
    LicensePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EffectsService,
    RuletipsService
  ]
})
export class AppModule {
}
