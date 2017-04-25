import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {SettingsService} from "./settings-service";

@Injectable()
export class EffectsService {

  private drawnEffects: any = [];

  private effectsData: object = {};
  private languanges: any = ['en', 'es'];
  private systems: any = ['pfrpg', 'dnd3', 'dnd5'];

  private ruletipPattern = /%([\w\s-]+)=([\w\sñáéíóú-]+)%/gi;
  private languagePattern = /%LANG%/g;
  private systemPattern = /%SYS%/g;
  private ruletipHTML = "<a class=ruletip href='javascript:window.angularComponentRef.displayRuletip(&apos;$1&apos;,&apos;%LANG%&apos;,&apos;%SYS%&apos;)'>$2</a>";

  constructor(private http: Http, private settings: SettingsService) {

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
    let effectText = drawnEffect.text
      .replace(this.ruletipPattern, this.ruletipHTML)
      .replace(this.languagePattern, this.settings.getLanguage())
      .replace(this.systemPattern, this.settings.getSystem());
    this.drawnEffects.push({
      type: type,
      subtype: subtype,
      title: drawnEffect.title,
      text: effectText
    });
  }

  drawCriticalSlashingEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'critical', 'slashing');
  }

  drawCriticalBludgeoningEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'critical', 'bludgeoning');
  }

  drawCriticalPiercingEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'critical', 'piercing');
  }

  drawCriticalMagicalEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'critical', 'magical');
  }

  drawFumbleMeleeEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'fumble', 'melee');
  }

  drawFumbleRangedEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'fumble', 'ranged');
  }

  drawFumbleNaturalEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'fumble', 'natural');
  }

  drawFumbleMagicalEffect() {
    this.drawEffect(this.settings.getLanguage(), this.settings.getSystem(), 'fumble', 'magical');
  }

  clearAll() {
    this.drawnEffects.splice(0, this.drawnEffects.length);
  }
}
