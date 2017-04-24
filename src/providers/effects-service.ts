import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class EffectsService {

  private currentLanguage: string = 'en';
  private currentSystem: string = 'pfrpg';

  private drawnEffects: any = [];

  private effectsData: object = {};
  private languanges: any = ['en', 'es'];
  private systems: any = ['pfrpg', 'dnd3', 'dnd5'];

  private ruletipPattern = /%([\w\s-]+)=([\w\sñáéíóú-]+)%/gi;
  private ruletipHTML = "<a href='javascript:window.angularComponentRef.displayRuletip(&apos;$1&apos;)'>$2</a>";

  constructor(private http: Http) {

    this.languanges.forEach(language => {
      this.effectsData[language] = {};
      this.systems.forEach(system => {
        this.effectsData[language][system] = [];
        this.effectsData[language][system]['critical'] = {};
        this.effectsData[language][system]['fumble'] = {};
        this.loadEffectsFromJson(language, system, 'critical', 'slashing');
        this.loadEffectsFromJson(language, system, 'critical', 'bludgeoning');
        this.loadEffectsFromJson(language, system, 'critical', 'piercing');
        this.loadEffectsFromJson(language, system, 'critical', 'magical');
        this.loadEffectsFromJson(language, system, 'fumble', 'melee');
        this.loadEffectsFromJson(language, system, 'fumble', 'ranged');
        this.loadEffectsFromJson(language, system, 'fumble', 'natural');
        this.loadEffectsFromJson(language, system, 'fumble', 'magical');
      });
    });
  }

  private loadEffectsFromJson(language: string, system: string, type: string, subtype: string) {
    this.http.get('assets/json/' + language + '/' + system + '/' + type + '/' + subtype + '.json')
      .subscribe(data => {
        this.effectsData[language][system][type][subtype] = data.json();
      });
  }

  getDrawnEffects() {
    return this.drawnEffects;
  }

  drawEffect(language, system, type, subtype) {
    let effects = this.effectsData[language][system][type][subtype];
    let effectIndex = Math.floor(Math.random() * effects.length);
    let drawnEffect = effects[effectIndex];
    let effectText = drawnEffect.text.replace(this.ruletipPattern, this.ruletipHTML);
    this.drawnEffects.push({
      type: type,
      subtype: subtype,
      title: drawnEffect.title,
      text: effectText
    });
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

  clearEffects() {
    this.drawnEffects.splice(0, this.drawnEffects.length);
  }
}
