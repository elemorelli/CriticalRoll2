import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Buttons} from "./buttons/buttons";
import {Effects} from "./effects/effects";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  entryComponents: [Buttons, Effects]
})
export class MainPage {

  constructor(public navCtrl: NavController) {
  }

}
