import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EffectsService} from "../../providers/effects-service";
import {Buttons} from "./buttons/buttons";
import {Effects} from "./effects/effects";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  entryComponents: [Buttons, Effects],
  providers: [EffectsService]
})
export class MainPage {

  constructor(public navCtrl: NavController, public effectsService: EffectsService) {
  }

  clearEffects() {
    this.effectsService.clearEffects();
  }

}
