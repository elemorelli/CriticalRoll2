import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {SettingsService} from "../../providers/settings-service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public availableLanguages: any;
  public availableSystems: any;

  public language: string;
  public system: string;

  constructor(public navCtrl: NavController, private settingsService: SettingsService) {
    this.availableLanguages = settingsService.getLanguagesList();
    this.availableSystems = settingsService.getSystemsList();
    this.language = settingsService.getLanguage();
    this.system = settingsService.getSystem();
  }

  setSelectedLanguage() {
    this.settingsService.setLanguage(this.language);
  }

  setSelectedSystem() {
    this.settingsService.setSystem(this.system);
  }


}
