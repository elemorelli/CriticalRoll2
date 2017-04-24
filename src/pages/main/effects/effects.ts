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

  constructor(private effectsService: EffectsService, private ruletips: RuletipsService, private alert: AlertController) {
    this.effects = effectsService.getDrawnEffects();
  }

  ngOnInit() {
    (<any>window).angularComponentRef = {
      displayRuletip: (value, language, system) => this.displayRuletip(value, language, system),
      component: this
    };
  }

  displayRuletip(ruletipTag, language, system) {

    let ruletip = this.ruletips.get(ruletipTag, language, system);

    this.alert.create({
      title: ruletip.title,
      message: ruletip.text,
      cssClass: 'ruletip'
    }).present();
  }
}
