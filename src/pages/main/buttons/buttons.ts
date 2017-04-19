import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";

@Component({
  selector: 'buttons',
  templateUrl: 'buttons.html',
  providers: [EffectsService]
})

export class Buttons {

  constructor( public effectsService: EffectsService) {

  }

  public drawCriticalSlashingEffect() {
    this.effectsService.drawCriticalSlashingEffect('en', 'pfrpg');
  }
}
