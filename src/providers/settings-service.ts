import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import "rxjs/add/operator/map";

@Injectable()
export class SettingsService {

  private currentLanguage: string;
  private currentSystem: string;


  private availableLanguages: any = [
    {'tag': 'en', 'name': 'English'},
    {'tag': 'es', 'name': 'Spanish'}
  ];
  private availableSystems: any = [
    {'tag': 'pfrpg', 'name': 'Pathfinder RPG'},
    {'tag': 'dnd5', 'name': 'Dungeon and Dragons 5th Ed.'},
    {'tag': 'dnd3', 'name': 'Dungeon and Dragons 3rd Ed.'}
  ];

  constructor(private storage: Storage) {
    this.storage.ready().then(() => {
        this.storage.get('language').then((language) => {
          if (language != null) {
            this.currentLanguage = language;
          } else {
            this.setLanguage(this.availableLanguages[0]);
          }
        });
        this.storage.get('system').then((system) => {
          if (system != null) {
            this.currentSystem = system;
          } else {
            this.setSystem(this.availableSystems[0]);
          }
        })
      }
    );
  }

  getAllLanguages() {
    return this.availableLanguages;
  }

  getLanguage() {
    return this.currentLanguage;
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
    this.storage.set('language', language);
  }

  getAllSystems() {
    return this.availableSystems;
  }

  getSystem() {
    return this.currentSystem;
  }

  setSystem(system: string) {
    this.currentSystem = system;
    this.storage.set('system', system);
  }
}
