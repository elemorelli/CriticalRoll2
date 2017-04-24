import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";
import {AlertController} from "ionic-angular";
import {RuletipsService} from "../../../providers/ruletips-service";

@Component({
  selector: 'effects',
  templateUrl: 'effects.html'
})
export class Effects {

  public effects: any;

  constructor(private effectsService: EffectsService, private ruletipsService: RuletipsService, private alertCtrl: AlertController) {
    this.effects = effectsService.getDrawnEffects();
  }

  ngOnInit() {
    (<any>window).angularComponentRef = {
      displayRuletip: (value) => this.displayRuletip(value),
      component: this
    };
  }

  displayRuletip(ruletipTag) {

    let ruletip = this.ruletipsService.getRuletip(ruletipTag);

    this.alertCtrl.create({
      title: ruletip.title,
      message: ruletip.text,
      cssClass: 'ruletip'
    }).present();
  }
}
