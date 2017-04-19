import {Component} from "@angular/core";
import {EffectsService} from "../../../providers/effects-service";


@Component({
  selector: 'effects',
  templateUrl: 'effects.html',
  providers: [EffectsService]
})

export class Effects {

  public effects: any;

  constructor(public drawnEffects: EffectsService) {
    this.effects = drawnEffects.getDrawnEffects();
  }

  // ngOnInit() {
  //   this.drawnEffects.getDrawnEffects().subscribe(
  //     data => this.effects = data,
  //     error => console.log("Error!")
  //   );
  // }

}
