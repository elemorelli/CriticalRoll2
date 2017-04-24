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
    this.availableLanguages = settingsService.getAvailableLanguages();
    this.availableSystems = settingsService.getAvailableSystems();
    this.language = settingsService.getCurrentLanguage();
    this.system = settingsService.getCurrentSystem();
  }

  setSelectedLanguage() {
    this.settingsService.setCurrentLanguage(this.language);
  }

  setSelectedSystem() {
    this.settingsService.setCurrentSystem(this.system);
  }


}
