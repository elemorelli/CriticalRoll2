import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {SettingsService} from "./settings-service";

@Injectable()
export class RuletipsService {

  private languanges: any = ['en', 'es'];
  private systems: any = ['pfrpg', 'dnd3', 'dnd5'];

  private ruletips: object = {};

  constructor(private http: Http, private settingsService: SettingsService) {

    this.languanges.forEach(language => {
      this.ruletips[language] = {};
      this.systems.forEach(system => {
        this.ruletips[language][system] = {};
        this.loadRuletipsFromJson(language, system);

      });
    });
  }

  private loadRuletipsFromJson(language: string, system: string) {
    this.http.get('assets/json/' + language + '/' + system + '/ruletips.json')
      .subscribe(data => {
        this.ruletips[language][system] = data.json();
      });
  }

  getRuletip(ruletipTag: string) {
    return this.ruletips[this.settingsService.getLanguage()][this.settingsService.getSystem()][ruletipTag];
  }

  getRuletipsList() {
    let ruletips = this.ruletips[this.settingsService.getLanguage()][this.settingsService.getSystem()];
    return Object.keys(ruletips).map(key => ruletips[key]);
  }
}
