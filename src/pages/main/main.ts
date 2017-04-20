import {Component, ViewChild} from "@angular/core";
import {Content, NavController} from "ionic-angular";
import {EffectsService} from "../../providers/effects-service";
import {Buttons} from "./buttons/buttons";
import {Effects} from "./effects/effects";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  entryComponents: [Buttons, Effects],
  providers: [EffectsService]
})
export class MainPage {

  @ViewChild(Content)
  content: Content;

  constructor(public navCtrl: NavController, public effectsService: EffectsService) {
  }

  clearEffects() {
    this.effectsService.clearEffects();
    this.content.scrollToTop();
  }

  scroll(to: string) {
    if (to === 'SCROLL_TO_TOP') {
      this.content.scrollToTop();
    } else if (to === 'SCROLL_TO_BOTTOM') {
      this.content.scrollToBottom();
    }
  }
}
