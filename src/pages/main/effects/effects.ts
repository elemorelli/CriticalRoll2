import {Component} from "@angular/core";
import {DrawnEffects} from "../../../providers/drawn-effects";

@Component({
  selector: 'effects',
  templateUrl: 'effects.html',
  providers: [DrawnEffects]
})

export class Effects {

  private effects = [];

  constructor(public drawnEffects: DrawnEffects) {

    this.effects = this.drawnEffects.getEffects();
  }
}
