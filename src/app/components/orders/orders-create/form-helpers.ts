import { FormBuilder } from "@angular/forms";

// A utility class that defines helper methods related to orders-form
export class FormHelpers {
  private constructor() {}

  static getPantsItemTemplate(fb: FormBuilder) {
    return fb.group({
      type: 'PANT',
      kneeOne: '',
      kneeTwo: '',
      height: '',
      waist: '',
      sheet: '',
      crotch: '',
      fleet: '',
      heel: '',
      pocket: '',
      backPocket: ''
    });
  }

  static getShirtsItemTemplate(fb: FormBuilder) {
    return fb.group({
      type: 'SHIRT',
      height: '',
      york: '',
      sleeveLength: '',
      sleeveAround: '',
      chest: '',
      waist: '',
      collar: '',
      addOn: ''
    });
  }

  static getCoatsItemTemplate(fb: FormBuilder) {
    return fb.group({
      type: 'COAT',
      heightFront: '',
      heightBack: '',
      york: '',
      goldMiddle: '',
      sleeveLength: '',
      sleeveEnd: '',
      sleeveMiddle: '',
      collar: ''
    });
  }

  static getWestCoatItemTemplate(fb: FormBuilder) {
    return fb.group({
      type: 'WESTCOAT',
      height: '',
      york: '',
      chest: '',
      waist: ''
    });
  } 
}