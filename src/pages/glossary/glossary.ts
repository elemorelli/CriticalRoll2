import {Component} from "@angular/core";
import {AlertController, NavController} from "ionic-angular";
import {RuletipsService} from "../../providers/ruletips-service";

@Component({
  selector: 'page-glossary',
  templateUrl: 'glossary.html'
})
export class GlossaryPage {

  ruletips: any;

  constructor(public navCtrl: NavController, private ruletipsService: RuletipsService, private alert: AlertController) {
    this.ruletips = ruletipsService.getAll();
  }

  displayRuletip(title: string, text: string) {

    this.alert.create({
      title: title,
      message: text,
      cssClass: 'ruletip'
    }).present();
  }
}
