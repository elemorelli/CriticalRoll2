import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";

@Component({
  selector: 'effects',
  templateUrl: 'effects.html'
})

export class Effects {

  public effects: any;

  constructor(public effectsService: EffectsService) {
    this.effects = effectsService.getDrawnEffects();
  }
}
