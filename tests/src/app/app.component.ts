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
  errors: any;
  fieldValidators = {};
  actions = {};

  constructor(registry: WidgetRegistry) {
    this.schema = require('./sampleschema.json');
    this.model = { passwordCheck: "aa" };

    this.fieldValidators = {
      "/passwordCheck": (value, property, form) => {
        return { "message": "same as 'password'" }
      }
    };
  }

  changeSchema() {
    this.schema = require('./otherschema.json');
  }
}
