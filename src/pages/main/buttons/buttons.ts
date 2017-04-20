import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";

@Component({
  selector: 'buttons',
  templateUrl: 'buttons.html',
  providers: [EffectsService]
})

export class Buttons {

  constructor(public effectsService: EffectsService) {
  }

  drawCriticalSlashingEffect() {
    this.effectsService.drawCriticalSlashingEffect();
  }

  drawCriticalBludgeoningEffect() {
    this.effectsService.drawCriticalBludgeoningEffect();
  }

  drawCriticalPiercingEffect() {
    this.effectsService.drawCriticalPiercingEffect();
  }

  drawCriticalMagicalEffect() {
    this.effectsService.drawCriticalMagicalEffect();
  }

  drawFumbleMeleeEffect() {
    this.effectsService.drawFumbleMeleeEffect();
  }

  drawFumbleRangedEffect() {
    this.effectsService.drawFumbleRangedEffect();
  }

  drawFumbleNaturalEffect() {
    this.effectsService.drawFumbleNaturalEffect();
  }

  drawFumbleMagicalEffect() {
    this.effectsService.drawFumbleMagicalEffect();
  }

}
