import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'effects',
  templateUrl: 'effects.html'
})
export class Effects {

  public effects: any;

  constructor(public effectsService: EffectsService, public alertCtrl: AlertController) {
    this.effects = effectsService.getDrawnEffects();
  }

  ngOnInit() {
    (<any>window).angularComponentRef = {
      displayTooltip: (value) => this.displayTooltip(value),
      component: this
    };
  }

  displayTooltip(data) {

    this.alertCtrl.create({
      title: 'Title',
      message: 'Text'
    }).present();
  }
}
