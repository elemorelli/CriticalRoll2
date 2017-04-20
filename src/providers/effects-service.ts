import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {BehaviorSubject, Observable} from "rxjs";
import {EffectModel} from "./effect-model";

@Injectable()
export class EffectsService {

  private currentLanguage: string = 'en';
  private currentSystem: string = 'pfrpg';


  private drawnEffects: any = [];
  private observableEffectsList: BehaviorSubject<EffectModel[]> = new BehaviorSubject([]);

  private effectsData: object = {};
  private languanges: any = ['en', 'es'];
  private systems: any = ['pfrpg', 'dnd3', 'dnd5'];

  constructor(private http: Http) {

    this.languanges.forEach(language => {
      this.effectsData[language] = {};
      this.systems.forEach(system => {
        this.effectsData[language][system] = [];
        this.effectsData[language][system]['critical'] = {};
        this.effectsData[language][system]['fumble'] = {};
        this.loadFromJson(language, system, 'critical', 'slashing');
        this.loadFromJson(language, system, 'critical', 'bludgeoning');
        this.loadFromJson(language, system, 'critical', 'piercing');
        this.loadFromJson(language, system, 'critical', 'magical');
        this.loadFromJson(language, system, 'fumble', 'melee');
        this.loadFromJson(language, system, 'fumble', 'ranged');
        this.loadFromJson(language, system, 'fumble', 'natural');
        this.loadFromJson(language, system, 'fumble', 'magical');
      });
    });
  }

  private loadFromJson(language: string, system: string, type: string, subtype: string) {
    this.http.get('assets/json/effects/' + language + '/' + system + '/' + type + '/' + subtype + '.json')
      .subscribe(data => {

        this.effectsData[language][system][type][subtype] = data.json();
      });
  }

  getDrawnEffects(): Observable<EffectModel[]> {
    return this.observableEffectsList.asObservable()
  }

  clearEffects() {
    this.drawnEffects = [];
  }

  private drawEffect(language, system, type, subtype) {
    let effects = this.effectsData[language][system][type][subtype];
    let effectIndex = Math.floor(Math.random() * effects.length);
    this.drawnEffects.push(effects[effectIndex]);
    this.observableEffectsList.next(this.drawnEffects);
  }

  drawCriticalSlashingEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'critical', 'slashing');
  }

  drawCriticalBludgeoningEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'critical', 'bludgeoning');
  }

  drawCriticalPiercingEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'critical', 'piercing');
  }

  drawCriticalMagicalEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'critical', 'magical');
  }

  drawFumbleMeleeEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'fumble', 'melee');
  }

  drawFumbleRangedEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'fumble', 'ranged');
  }

  drawFumbleNaturalEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'fumble', 'natural');
  }

  drawFumbleMagicalEffect() {
    this.drawEffect(this.currentLanguage, this.currentSystem, 'fumble', 'magical');
  }
}
