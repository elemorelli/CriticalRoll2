import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {BehaviorSubject, Observable} from "rxjs";
import {EffectModel} from "./effect-model";

@Injectable()
export class EffectsService {

  private drawnEffects: any = [];
  private observableEffectsList: BehaviorSubject<EffectModel[]> = new BehaviorSubject([]);

  private effectsData: object = {
    'en': {'dnd3': [], 'dnd5': [], 'pfrpg': []},
    'es': {'dnd3': [], 'dnd5': [], 'pfrpg': []}
  };

  constructor(private http: Http) {
    this.loadFromJson('en', 'pfrpg', 'critical', 'slashing');
  }

  private loadFromJson(language: string, system: string, type : string, subtype : string) {
    this.http.get('assets/json/effects/' + language + '/' + system + '/' + type +'-' + subtype + '.json')
      .subscribe(data => {
        this.effectsData['en']['pfrpg'] = data.json();
      });
  }

  getDrawnEffects(): Observable<EffectModel[]> {
    return this.observableEffectsList.asObservable()
  }

  clearEffects() {
    this.drawnEffects = [];
  }

  drawCriticalSlashingEffect(language, system) {
    let effects = this.effectsData[language][system];
    let effectIndex = Math.floor(Math.random() * effects.length);
    this.drawnEffects.push(effects[effectIndex]);
    this.observableEffectsList.next(this.drawnEffects);
  }
}
