import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class DrawnEffects {

  private effects: any = [];

  constructor() {
  }

  getEffects() {
    return this.effects;
  }

  push(effect) {
    this.effects.push(effect);
  };

  clearEffects() {
    this.effects = [];
  }

}
