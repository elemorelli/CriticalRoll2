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
      displayRuletip: (value) => this.displayRuletip(value),
      component: this
    };
  }

  displayRuletip(ruletipTag) {

    let ruletip = this.effectsService.getRuletip(ruletipTag);

    this.alertCtrl.create({
      title: ruletip.title,
      message: ruletip.text,
      cssClass: 'ruletip'
    }).present();
  }
}
