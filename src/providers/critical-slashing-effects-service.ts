import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class CriticalSlashingEffectsService {

  private data: object;

  constructor() {

    this.data = {
      'en': {
        'dnd3': [
          {'title': 'en-dnd3-cs-t1', 'text': 'en-dnd3-cs-e1'},
          {'title': 'en-dnd3-cs-t2', 'text': 'en-dnd3-cs-e2'},
          {'title': 'en-dnd3-cs-t3', 'text': 'en-dnd3-cs-e3'}
        ],
        'pfrpg': [
          {'title': 'en-pfrpg-cs-t1', 'text': 'en-pfrpg-cs-e1'},
          {'title': 'en-pfrpg-cs-t2', 'text': 'en-pfrpg-cs-e2'},
          {'title': 'en-pfrpg-cs-t3', 'text': 'en-pfrpg-cs-e3'}
        ],
        'dnd5': [
          {'title': 'en-dnd5-cs-t1', 'text': 'en-dnd5-cs-e1'},
          {'title': 'en-dnd5-cs-t2', 'text': 'en-dnd5-cs-e2'},
          {'title': 'en-dnd5-cs-t3', 'text': 'en-dnd5-cs-e3'}
        ],
      },
      'es': {
        'dnd3': [
          {'title': 'es-dnd3-cs-t1', 'text': 'es-dnd3-cs-e1'},
          {'title': 'es-dnd3-cs-t2', 'text': 'es-dnd3-cs-e2'},
          {'title': 'es-dnd3-cs-t3', 'text': 'es-dnd3-cs-e3'}
        ],
        'pfrpg': [
          {'title': 'es-pfrpg-cs-t1', 'text': 'es-pfrpg-cs-e1'},
          {'title': 'es-pfrpg-cs-t2', 'text': 'es-pfrpg-cs-e2'},
          {'title': 'es-pfrpg-cs-t3', 'text': 'es-pfrpg-cs-e3'}
        ],
        'dnd5': [
          {'title': 'es-dnd5-cs-t1', 'text': 'es-dnd5-cs-e1'},
          {'title': 'es-dnd5-cs-t2', 'text': 'es-dnd5-cs-e2'},
          {'title': 'es-dnd5-cs-t3', 'text': 'es-dnd5-cs-e3'}
        ],
      },
    }
  }

  getEffect(language, system) {
    let effects = this.data[language][system];

    let effectIndex = Math.floor(Math.random() * effects.length);

    return effects[effectIndex];
  }
}
