import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy
} from '@angular/core';
import {WidgetRegistry, Validator, Binding, FormProperty, PropertyGroup} from 'ngx-schema-form';
import {Subscription} from 'rxjs';

import sampleSchema1 from './sampleschema.json';
import sampleSchema2 from './otherschema.json';
import sampleModel from './samplemodel.json';
import binding_sample_schema from './binding_sample_schema.json';
import binding_sample_model from './binding_sample_model.json';
import binding_sample_bindings from './binding_sample_bindings';
import visibility_binding_example from './visibility-binding-example-schema.json';

import {AppService, AppData} from '../app.service';
import {ISchema} from 'ngx-schema-form';

@Component({
  selector: 'sf-json-schema-example',
  templateUrl: './json-schema-example.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class JsonSchemaExampleComponent implements OnInit, OnDestroy {
  schema: ISchema = {properties: {}};
  model: any = {};
  value: any;
  fieldValidators: { [fieldId: string]: Validator } = {};
  actions = {};
  fieldBindings: { [path: string]: Binding[] } = {};
  schemaUrl: string;

  private subs: Subscription;

  samples = [
    {label: 'Sample 1 - General', event: this.changeSchemaFirst, selected: true},
    {label: 'Sample 2 - Custom bindings', event: this.changeSchemaWithBindings, selected: false},
    {label: 'Sample 3 - Otherschema', event: this.changeSchemaOtherschema, selected: false},
    {label: 'Sample 4 - Visibility binding', event: this.changeSchemaVisibilityBinding, selected: false},
  ];

  constructor(
    registry: WidgetRegistry,
    private appService: AppService
  ) {


  }

  ngOnInit() {

    this.subs = this.appService.dataChanged
      .subscribe((data: AppData | null) => {
        if (data) {
          this.schema = data.schema;
          return;
        }
        this.changeSchemaInitial();
      });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  logErrors(errors) {
    console.log('ERRORS', errors);
  }

  changeSchemaInitial() {
    for (const sample of this.samples) {
      if (sample.selected) {
        sample.event.bind(this)();
      }
    }
  }

  changeSchema(event) {
    for (const sample of this.samples) {
      if (sample.label === event) {
        sample.event.bind(this)();
      }
    }
  }

  changeSchemaFirst() {
    this.schema = sampleSchema1 as unknown as ISchema;
    this.model = sampleModel;
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};

    this.fieldValidators['/bornOn'] = (value, property, form) => {
      let errors = null;
      const dateArr = value.split('-');

      if (dateArr.length === 3) {
        const now = new Date();
        const min = new Date(
          now.getFullYear() - 100,
          now.getMonth(),
          now.getDay(),
        ).getTime();
        const max = new Date().getTime();
        const born = new Date(
          dateArr[0],
          dateArr[1] - 1,
          dateArr[2],
        ).getTime();

        if (born < min || born > max) {
          errors = [
            {
              bornOn: {
                expectedValue: '>today - 100 && < today',
                actualValue: value,
              },
            },
          ];
        }
      }
      return errors;
    };
    this.fieldValidators['/promotion'] = (value, property, form) => {
      if (value === 'student') {
        const bornOn = form.getProperty('/bornOn');

        if (bornOn.valid) {
          const date = bornOn.value.split('-');
          const validYear = new Date().getFullYear() - 17;

          try {
            const actualYear = parseInt(date[0], 10);

            if (actualYear < validYear) {
              return null;
            }

            return [
              {
                promotion: {
                  bornOn: {
                    expectedValue: 'year<' + validYear,
                    actualValue: actualYear,
                  },
                },
              },
            ];
          } catch (e) {
          }
        }

        return [
          {
            promotion: {
              bornOn: {
                expectedFormat: 'date',
                actualValue: bornOn.value,
              },
            },
          },
        ];
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

    this.actions['toggle_title'] = (formProperty: FormProperty, form: PropertyGroup, params: any) => {
      formProperty.schema.readOnly = !formProperty.schema.readOnly;
    };

  }

  changeSchemaOtherschema() {
    this.schema = sampleSchema1 as unknown as ISchema;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }

  changeSchemaWithBindings() {
    this.schema = binding_sample_schema as unknown as ISchema;
    this.model = binding_sample_model;
    this.fieldBindings = binding_sample_bindings;
    this.fieldValidators = {};
    this.actions = {};
  }

  changeSchemaVisibilityBinding() {
    this.schema = visibility_binding_example as unknown as ISchema;
    this.model = {};
    this.fieldBindings = {};
    this.fieldValidators = {};
    this.actions = {};
  }

  disableAll() {
    Object.keys(this.schema.properties).map(prop => {
      this.schema.properties[prop].readOnly = true;
    });
  }

  setValue(value) {
    this.value = value;
  }

}
