import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";


@Component({
  selector: 'effects',
  templateUrl: 'effects.html',
  providers: [EffectsService]
})

export class Effects {

  public effects: any;

  constructor(public effectsService: EffectsService) {
    this.effects = effectsService.getDrawnEffects();
  }

  // ngOnInit() {
  //   this.drawnEffects.getDrawnEffects().subscribe(
  //     data => this.effects = data,
  //     error => console.log("Error!")
  //   );
  // }

}
