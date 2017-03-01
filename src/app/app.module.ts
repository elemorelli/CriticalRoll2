import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {MainPage} from "../pages/main/main";
import {HelpPage} from "../pages/help/help";
import {GlossaryPage} from "../pages/glossary/glossary";
import {SettingsPage} from "../pages/settings/settings";
import {LicensePage} from "../pages/license/license";

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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
