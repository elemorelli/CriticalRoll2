export class EffectModel {

  constructor(public type: string, public subtype: string, public title: string, public text: string) {
    this.type = type;
    this.subtype = subtype;
    this.title = title;
    this.text = text;
  }
}
