import {Component} from "@angular/core";
import {CriticalSlashingEffectsService} from "../../../providers/critical-slashing-effects-service";
import {DrawnEffects} from "../../../providers/drawn-effects";

@Component({
  selector: 'buttons',
  templateUrl: 'buttons.html',
  providers: [CriticalSlashingEffectsService]
})

export class Buttons {

  constructor(public drawnEffects: DrawnEffects, public criticalSlashingEffectsService: CriticalSlashingEffectsService) {

  }

  public drawEffect() {
    let effect = this.criticalSlashingEffectsService.getEffect('en', 'pfrpg');
    this.drawnEffects.push(effect);
  }
}
