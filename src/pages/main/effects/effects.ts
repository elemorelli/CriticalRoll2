import {Component} from "@angular/core";

@Component({
  selector: 'effects',
  templateUrl: 'effects.html'
})

export class Effects {

  effects: any;

  constructor() {

    this.effects = [];

    this.effects.push({
      'name': 'AAA',
      'text': 'BBB'
    });
    this.effects.push({
      'name': 'CCC',
      'text': 'DDD'
    });
    this.effects.push({
      'name': 'EEE',
      'text': 'FFF'
    });
    this.effects.push({
      'name': 'HHH',
      'text': 'JJJ'
    });
    this.effects.push({
      'name': 'HHH',
      'text': 'JJJ'
    });
    this.effects.push({
      'name': 'HHH',
      'text': 'JJJ'
    });
  }
}
