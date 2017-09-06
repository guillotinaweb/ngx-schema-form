import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  WidgetRegistry,
  Validator,
  DefaultWidgetRegistry
} from './lib';

@Component({
  selector: 'sf-demo-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }]
})
export class AppComponent {

  schema: any;
  model: any;
  fieldValidators: { [fieldId: string]: Validator } = {};
  actions = {};

  constructor(registry: WidgetRegistry) {

    this.schema = require('./sampleschema.json');
    this.model = require('./samplemodel.json');

    this.fieldValidators['/bornOn'] = (value, property, form) => {
      let errors = null;
      let dateArr = value.split('-');

      if (dateArr.length === 3) {
        let now = new Date();
        let min = new Date(
          now.getFullYear() - 100,
          now.getMonth(),
          now.getDay()
        ).getTime();
        let max = new Date().getTime();
        let born = new Date(
          dateArr[0],
          dateArr[1] - 1,
          dateArr[2]
        ).getTime();

        if (born < min || born > max) {
          errors = [{
            bornOn: {
              expectedValue: '>today - 100 && < today',
              actualValue: value
            }
          }];
        }
      }
      return errors;
    };

    this.fieldValidators['/promotion'] = (value, property, form) => {

      if (value === 'student') {
        let bornOn = form.getProperty('/bornOn');

        if (bornOn.valid) {
          let date = bornOn.value.split('-');
          let validYear = new Date().getFullYear() - 17;

          try {
            let actualYear = parseInt(date[0], 10);

            if (actualYear < validYear) {
              return null;
            }

            return [{
              promotion: {
                bornOn: {
                  expectedValue: 'year<' + validYear,
                  actualValue: actualYear
                }
              }
            }];

          } catch (e) { }
        }

        return [{
          promotion: {
            bornOn: {
              expectedFormat: 'date',
              actualValue: bornOn.value
            }
          }
        }];
      }

      return null;
    };

    this.actions['alert'] = (property, options) => {
      property.forEachChildRecursive(child => {
        console.log(child.valid, child);
      });
      alert(JSON.stringify(property.value));
    };

    this.actions['reset'] = (form, options) => {
      form.reset();
    };
    this.actions['reset'] = (form, options) => {
      form.reset();
    };
    this.actions['disable'] = this.disableAll.bind(this);
  }

  logErrors(errors) {
    console.log('ERRORS', errors);
  }

  changeSchema() {
    this.schema = require('./otherschema.json');
  }

  disableAll() {
    Object.keys(this.schema.properties).map(prop => {
      this.schema.properties[prop].readOnly = true;
    });
  }
}
