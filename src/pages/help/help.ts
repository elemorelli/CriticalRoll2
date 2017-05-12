import {Component} from "@angular/core";
import {SettingsService} from "../../providers/settings-service";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  public system: string;

  constructor(public navCtrl: NavController, private settings: SettingsService) {
    this.system = settings.getSystem();
  }
}
