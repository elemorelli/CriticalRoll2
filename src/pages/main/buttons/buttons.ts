import {Component, EventEmitter, Output} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";

@Component({
  selector: 'buttons',
  templateUrl: 'buttons.html'
})
export class Buttons {

  @Output()
  scrollHandler: EventEmitter<string> = new EventEmitter();

  constructor(public effectsService: EffectsService) {
  }

  drawCriticalSlashingEffect() {
    this.effectsService.drawCriticalSlashingEffect();
    this.emitScrollToBottom();
  }

  drawCriticalBludgeoningEffect() {
    this.effectsService.drawCriticalBludgeoningEffect();
    this.emitScrollToBottom();
  }

  drawCriticalPiercingEffect() {
    this.effectsService.drawCriticalPiercingEffect();
    this.emitScrollToBottom();
  }

  drawCriticalMagicalEffect() {
    this.effectsService.drawCriticalMagicalEffect();
    this.emitScrollToBottom();
  }

  drawFumbleMeleeEffect() {
    this.effectsService.drawFumbleMeleeEffect();
    this.emitScrollToBottom();
  }

  drawFumbleRangedEffect() {
    this.effectsService.drawFumbleRangedEffect();
    this.emitScrollToBottom();
  }

  drawFumbleNaturalEffect() {
    this.effectsService.drawFumbleNaturalEffect();
    this.emitScrollToBottom();
  }

  drawFumbleMagicalEffect() {
    this.effectsService.drawFumbleMagicalEffect();
    this.emitScrollToBottom();
  }

  private emitScrollToBottom() {
    this.scrollHandler.emit('SCROLL_TO_BOTTOM');
  }
}
