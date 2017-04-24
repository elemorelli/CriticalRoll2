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

  constructor(public navCtrl: NavController, private settings: SettingsService) {
    this.availableLanguages = settings.getAllLanguages();
    this.availableSystems = settings.getAllSystems();
    this.language = settings.getLanguage();
    this.system = settings.getSystem();
  }

  setSelectedLanguage() {
    this.settings.setLanguage(this.language);
  }

  setSelectedSystem() {
    this.settings.setSystem(this.system);
  }
}
